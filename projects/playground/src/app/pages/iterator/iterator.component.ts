import { Component, OnInit } from '@angular/core';

interface MenuItem {
  id: string;
  name: string;
  parentId: string;
  chilredn: MenuItem[];
}

const menu: MenuItem[] = [
  {
    id: '1',
    name: 'Home',
    chilredn: [
      {
        id: '1.1',
        name: 'Home: sub 1',
        parentId: '1',
        chilredn: [
          {
            id: '1.1.1',
            name: 'Home: sub 1 : sub 2',
            parentId: '1.1',
            chilredn: [
              {
                id: '1.1.1.1',
                name: 'Home: sub 1 : sub 2: sub 3',
                parentId: '1.1.1',
                chilredn: [],
              },
            ],
          },
        ],
      },
      {
        id: '1.2',
        name: 'Home: sub 2',
        parentId: '1',
        chilredn: [],
      },
      {
        id: '1.3',
        name: 'Home: sub 3',
        parentId: '1',
        chilredn: [],
      },
    ],
    parentId: null,
  },
  {
    id: '2',
    name: 'Products',
    chilredn: [],
    parentId: null,
  },
  {
    id: '3',
    name: 'Services',
    chilredn: [],
    parentId: null,
  },
  {
    id: '4',
    name: 'FAQ',
    chilredn: [],
    parentId: null,
  },
];
@Component({
  selector: 'app-iterator',
  templateUrl: './iterator.component.html',
  styleUrls: ['./iterator.component.scss'],
})
export class IteratorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
