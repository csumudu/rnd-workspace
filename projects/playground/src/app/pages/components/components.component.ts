import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent implements OnInit {
  links: Routes = [
    {
      path: './card',
      data: { name: 'Cards' },
    },
    {
      path: './toggle',
      data: { name: 'Toggle Button' },
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
