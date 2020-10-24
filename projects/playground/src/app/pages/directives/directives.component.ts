import { Component, Directive, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[clickstream]',
})
export class clickStream {}

Number.prototype[Symbol.iterator] = function () {
  let internal = this;
  let val = this - internal;

  return {
    next() {
      return {
        value: 'MY' + val++,
        done: val > 5,
      };
    },
  };
};

const ddd: any = Number(10);

const myGen = function* (x) {
  let i = 0;
  while (i < 10) {
    yield* ddd;
    yield i++;
  }
};

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
})
export class DirectivesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const x = Number(10);

    const arr = new Array(10);

    const it = x[Symbol.iterator]();

    for (const d of arr) {
      console.log(d);
    }

    const gen = myGen(10);
    for (let s of gen) {
      console.log(s);
    }
  }
}
