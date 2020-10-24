import { Component, Input, OnInit, Pipe } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

export function asObservable<T>(): any {
  console.log('Decorator - Called');

  return (target, key): any => {
    console.log('Property Descriptor - called');
    const instance = Symbol();

    Object.defineProperty(target, key, {
      get(): Observable<T> {
        console.log('getter called');
        console.log(this);
        if (!this[instance]) {
          this[instance] = new Subject();
        }

        return this[instance].asObservable();
      },
      set(s: T): void {
        if (!this[instance]) {
          this[instance] = new Subject();
        }
        this[instance].next(s);
      },
      configurable: true,
    });
  };
}

export function logValues() {
  return (target, key) => {
    const parentSetter = Object.getOwnPropertyDescriptor(target, key);
    const gt = parentSetter.get;
    const st = parentSetter.set;

    Object.defineProperty(target, key, {
      set(v): void {
        console.log('.....................');
        console.log('Value Changed: ', v);
        console.log('.....................');
        st.call(this, v);
      },
      get: gt,
    });
  };
}

@Component({
  selector: 'app-decorators',
  templateUrl: './decorators.component.html',
  styleUrls: ['./decorators.component.scss'],
})
export class DecoratorsComponent implements OnInit {
  constructor() {}

  @Input()
  title: string;

  @logValues()
  @Input()
  @asObservable<string>()
  name: string | Observable<string> = '';

  formatted$: Observable<any> = (this.name as Observable<any>).pipe(
    map((v) => String(v).toUpperCase())
  );

  ngOnInit(): void {
    console.log('ON IMIT');
    (this.name as Observable<string>).subscribe((v) =>
      console.log('On Init -called')
    );
  }
}
