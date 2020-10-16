import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent implements OnInit {
  public state = true;
  public diState = true;

  constructor() {}

  ngOnInit(): void {}

  onToggle(e) {
    this.state = e;
    console.log(e);
  }

  clickHandler() {
    this.state = !this.state;
    console.log(this.state);
  }

  clickHandlerDi(): void {
    this.diState = !this.diState;
    console.log(this.diState);
  }

  diHandler(e) {
    this.diState = e;
  }
}
