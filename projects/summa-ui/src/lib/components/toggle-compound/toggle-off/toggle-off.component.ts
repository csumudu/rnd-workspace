import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-toggle-off',
  template: `<div *ngIf="!on">OFF</div>`,
  styleUrls: ['./toggle-off.component.css'],
})
export class ToggleOffComponent implements OnInit {
  @Input()
  on: boolean;

  constructor() {}

  ngOnInit(): void {}
}
