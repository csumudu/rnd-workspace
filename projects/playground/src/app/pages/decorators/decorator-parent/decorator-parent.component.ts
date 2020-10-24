import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decorator-parent',
  templateUrl: './decorator-parent.component.html',
  styleUrls: ['./decorator-parent.component.scss'],
})
export class DecoratorParentComponent implements OnInit {
  public single: string;
  public double: string;

  constructor() {}

  ngOnInit(): void {}
  change(e) {
    this.single = e;
    this.double = e + e + 'dbl';
  }
}
