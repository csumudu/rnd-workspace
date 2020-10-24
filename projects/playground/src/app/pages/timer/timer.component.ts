import { Component, OnInit, Pipe } from '@angular/core';
import { merge, Subject, interval, NEVER } from 'rxjs';
import {
  distinctUntilChanged,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';
import { startWith, map, mapTo, scan, tap, pluck } from 'rxjs/operators';

export interface IUIState {
  count: number;
  isRunning: boolean;
  initialCount: number;
  isIncrement: boolean;
  speed: number;
  diff: number;
}

const initialState = {
  count: 0,
  isRunning: false,
  initialCount: 0,
  isIncrement: false,
  speed: 1000,
  diff: 1,
};

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  public startButton$: Subject<any> = new Subject();
  public pauseButton$: Subject<any> = new Subject();
  private manualActions$: Subject<any> = new Subject();

  uiEventSource$ = merge(
    this.startButton$.pipe(mapTo({ isRunning: true })),
    this.pauseButton$.pipe(mapTo({ isRunning: false })),
    this.manualActions$
  );

  uiState$ = this.uiEventSource$.pipe(
    startWith(initialState),
    scan((state, action) => ({ ...state, ...action }))
  );

  isRunning$ = this.uiState$.pipe(pluck('isRunning'), distinctUntilChanged());

  countTimer$ = this.isRunning$.pipe(
    switchMap((e) => (e ? interval(1000) : NEVER)),
    tap((e) => this.manualActions$.next({ count: e }))
  ).subscribe();

  public UI$ = this.uiState$.pipe(
    map(({ count }: IUIState) => ({ count })),
    tap(console.log)
  );

  constructor() {}

  ngOnInit(): void {}

  getValue(e): any {
    return e.target.value;
  }
}
