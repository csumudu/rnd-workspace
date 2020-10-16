import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-css-grid',
  templateUrl: './css-grid.component.html',
  styleUrls: ['./css-grid.component.scss'],
})
export class CssGridComponent implements OnInit {
  links: Routes = [
    {
      path: './center',
      data: { name: 'Centering' },
    },
    {
      path: './blocks',
      data: { name: 'Blocks' },
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
