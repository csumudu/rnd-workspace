import { Component, OnInit } from '@angular/core';
import { ToggleCompoundWithDiComponent } from '../toggle-compound-with-di.component';

@Component({
  selector: 'lib-toggle-di-on',
  template: `<div *ngIf="parent.on">ON</div>`,
})
export class ToggleDiOnComponent implements OnInit {
  constructor(public parent: ToggleCompoundWithDiComponent) {}

  ngOnInit(): void {}
}
