import { Component, OnInit } from '@angular/core';
import { ToggleCompoundWithDiComponent } from '../toggle-compound-with-di.component';

@Component({
  selector: 'lib-toggle-di-button',
  template: `<lib-toggle [on]="parent.on"(toggle)="parent.toggleHandler($event)"></lib-toggle>`,
})
export class ToggleDiButtonComponent implements OnInit {
  constructor(public parent: ToggleCompoundWithDiComponent) {}

  ngOnInit(): void {}
}
