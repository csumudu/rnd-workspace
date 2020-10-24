import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Observable, of, interval, merge, fromEvent } from 'rxjs';
import {
  concatMap,
  mergeMap,
  map,
  tap,
  switchMap,
  exhaustMap,
  delay,
  take,
  scan,
  filter,
  takeUntil,
} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { mapTo, startWith, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss'],
})
export class ReactiveComponent implements OnInit {
  ngOnInit(): void {}
}
