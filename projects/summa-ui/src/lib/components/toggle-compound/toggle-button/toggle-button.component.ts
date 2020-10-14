import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-toggle-button',
  template: `
    <lib-toggle [on]="on" (toggle)="toggle.emit($event)"></lib-toggle>
  `,
  styleUrls: ['./toggle-button.component.css'],
})
export class ToggleButtonComponent implements OnInit {
  @Input()
  on: boolean;

  @Output()
  toggle: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
