import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-toggle-on',
  template: `<div *ngIf="on">ON</div>`,
})
export class ToggleOnComponent implements OnInit {
  @Input()
  on: boolean;

  constructor() {}

  ngOnInit(): void {}
}
