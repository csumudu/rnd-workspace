import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {
  @Input()
  title: string;

  @HostBinding('class.hide')
  @Input()
  hide: boolean;

  constructor() {}

  ngOnInit(): void {}
}
