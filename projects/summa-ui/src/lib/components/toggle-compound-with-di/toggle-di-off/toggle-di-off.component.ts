import { Component, OnInit } from '@angular/core';
import { ToggleCompoundWithDiComponent } from '../toggle-compound-with-di.component';

@Component({
  selector: 'lib-toggle-di-off',
  template: `<div *ngIf="!parent.on">OFF</div>`,
})
export class ToggleDiOffComponent implements OnInit {
  constructor(public parent: ToggleCompoundWithDiComponent) {}

  ngOnInit(): void {}
}
