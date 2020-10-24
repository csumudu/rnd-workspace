import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, merge, fromEvent } from 'rxjs';
import {
  mapTo,
  startWith,
  scan,
  distinctUntilChanged,
  map,
} from 'rxjs/operators';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  constructor(private http: HttpClient) {}

  @ViewChild('up', { static: true })
  btnUp: ElementRef;

  @ViewChild('down', { static: true })
  btnDowm: ElementRef;

  movies$: Observable<any>;

  taskCount$: Observable<number>;

  showLoading$: Observable<boolean>;

  ngAfterViewInit(): void {}

  ngOnInit(): void {
    /*  interval(500)
      .pipe(
        take(3),
        delay(Math.random() * 1000),
        map((v, i) => ['finding nemo', 'troy', 'tin tin'][i]),
        tap(console.log),
        exhaustMap((url) =>
          this.http.get(
            `https://yts.mx/api/v2/list_movies.json?query_term=${url}`
          )
        ),
        map((res: any) => res.data.movies[0])
      )
      .subscribe(console.log); */

    const uiEvents$ = merge(
      fromEvent(this.btnDowm.nativeElement, 'click').pipe(mapTo(-1)),
      fromEvent(this.btnUp.nativeElement, 'click').pipe(mapTo(1))
    );

    this.taskCount$ = uiEvents$.pipe(
      startWith(0),
      scan((total, action) => (total + action >= 0 ? total + action : 0)),
      distinctUntilChanged()
    );

    this.showLoading$ = this.taskCount$.pipe(map((v) => v > 0));

    this.taskCount$.subscribe(console.log);
  }
}
