import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-toggle-compound-with-di',
  template: `<ng-content></ng-content>`,
})
export class ToggleCompoundWithDiComponent implements OnInit {
  @Input()
  on: boolean;

  @Output()
  toggle: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  toggleHandler(e) {
    this.on = e;
    this.toggle.emit(e);
  }
}
