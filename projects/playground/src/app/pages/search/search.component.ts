import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { from, fromEvent, Observable, of } from 'rxjs';
import { SearchFacadeService } from '../../services/search-facade.service';
import { map, tap } from 'rxjs/operators';
import {
  throttleTime,
  debounceTime,
  map,
  switchMap,
  concatAll,
} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, AfterViewInit {
  constructor(private search: SearchFacadeService) {}

  @ViewChild('inpt')
  private input: ElementRef<any>;

  @ViewChild('pgSize')
  private select: ElementRef<any>;

  public pageSizeOpt: number[] = [10, 20, 30];

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        map((e: any) => e.target.value),
        debounceTime(500)
      )
      .subscribe((v) => this.search.onSearch(v));

    fromEvent(this.select.nativeElement, 'change')
      .pipe(map((e: any) => e.target.value))
      .subscribe((v) =>
        this.search.onChangePagination({ pageSize: v })
      );
  }

  pageChange(pg): void {
    this.search.onChangePagination({ current: pg });
  }
}
