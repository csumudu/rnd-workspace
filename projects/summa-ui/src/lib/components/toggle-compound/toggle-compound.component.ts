import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { ToggleOnComponent } from './toggle-on/toggle-on.component';
import { ToggleOffComponent } from './toggle-off/toggle-off.component';
import { BehaviorSubject } from 'rxjs';
import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  AfterContentInit,
  ContentChild,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'lib-toggle-compound',
  template: ` <ng-content></ng-content> `,
  styleUrls: ['./toggle-compound.component.css'],
})
export class ToggleCompoundComponent implements OnInit, AfterContentInit {
  private inptStream$ = new BehaviorSubject(false);

  @Input()
  set on(val) {
    this.inptStream$.next(val);
  }

  get on() {
    return this.inptStream$.getValue();
  }

  @Output()
  toggle: EventEmitter<boolean> = new EventEmitter();

  @ContentChild(ToggleButtonComponent)
  button: ToggleButtonComponent;

  @ContentChild(ToggleOnComponent)
  onComp: ToggleOnComponent;

  @ContentChild(ToggleOffComponent)
  offComp: ToggleOffComponent;

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.inptStream$.subscribe((v) => {
      this.button.on = v;
      this.offComp.on = v;
      this.onComp.on = v;
      this.toggle.emit(v);
    });

    this.button.toggle.subscribe((v) => {
      this.inptStream$.next(v);
    });
  }
}
