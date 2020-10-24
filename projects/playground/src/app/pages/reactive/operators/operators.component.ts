import { Component, OnInit } from '@angular/core';
import { of, Observable, Subject, timer, pairs, interval } from 'rxjs';
import {
  buffer,
  bufferCount,
  first,
  last,
  map,
  pairwise,
  takeLast,
} from 'rxjs/operators';

const multiply = <T>(obs: Observable<any>): Observable<T> => {
  const result = new Observable<T>((observer) => {
    obs.subscribe(
      (v) => {
        const x: any = v * 10;
        observer.next(x);
      },
      (e) => observer.error(e),
      () => observer.complete()
    );
  });
  return result;
};

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss'],
})
export class OperatorsComponent implements OnInit {
  source$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9);
  timer$ = interval(1000);

  constructor() {}

  ngOnInit(): void {
    multiply(this.source$).pipe(takeLast(2)).subscribe(console.log);

    this.timer$.pipe().subscribe(console.log);
  }
}
