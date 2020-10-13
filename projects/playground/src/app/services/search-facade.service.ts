import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

const url = 'https://demo.dataverse.org';

export interface IPagination {
  current?: number;
  pageSize?: number;
}

interface ISearchStore {
  searchTearm: string;
  resultMeta?: {
    total: number;
    numberOfPages: number;
  };
  results: any[];
  pageSizes: number[];
  pagination: IPagination;
}

const defaultOpt = [10, 20, 30];

const SearchStore: ISearchStore = {
  searchTearm: '',
  pageSizes: defaultOpt,
  pagination: {
    current: 1,
    pageSize: defaultOpt[0],
  },
  resultMeta: {
    total: 0,
    numberOfPages: 0,
  },
  results: [],
};

@Injectable({
  providedIn: 'root',
})
export class SearchFacadeService {
  private store = new BehaviorSubject<ISearchStore>(SearchStore);

  private store$ = this.store.asObservable();

  results$ = this.store$.pipe(
    map((s) => s.results),
    distinctUntilChanged()
  );

  pagination$ = this.store$.pipe(
    map((s) => s.pagination),
    distinctUntilChanged()
  );

  searchTerm$ = this.store$.pipe(
    map((s) => s.searchTearm),
    distinctUntilChanged()
  );

  resultMeta$ = this.store$.pipe(
    map((s) => s.resultMeta),
    distinctUntilChanged()
  );

  constructor(private service: HttpClient) {
    combineLatest([this.searchTerm$, this.pagination$])
      .pipe(
        switchMap(([term, pg]) => {
          const { current, pageSize } = pg;
          return this.service.get<any>(
            `${url}/api/search?q=${term}&start=${
              (current - 1) * pageSize
            }&per_page=${pageSize}`
          );
        })
      )
      .subscribe(
        ({
          data: {
            items = [],
            total_count: total = 0,
            count_in_response: pageSize = 10,
          } = {},
        }) =>
          this.store.next({
            ...this.store.value,
            results: items,
            resultMeta: {
              total,
              numberOfPages: Math.ceil(
                total / this.store.value.pagination.pageSize
              ),
            },
          })
      );
  }

  public setPageSizes(opt: number[]): void {
    this.store.next({ ...this.store.value, pageSizes: opt });
  }

  public onSearch(searchTearm: string): void {
    this.store.next({ ...this.store.value, searchTearm });
  }

  public onChangePagination(pagination: IPagination): void {
    this.store.next({
      ...this.store.value,
      pagination: {
        ...this.store.value.pagination,
        current:
          pagination.pageSize > this.store.value.pagination.pageSize
            ? 1
            : this.store.value.pagination.pageSize,
        ...pagination,
      },
    });
  }
}
