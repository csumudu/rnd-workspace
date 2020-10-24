import { Component, OnInit } from '@angular/core';

interface User {
  name: string;
}

interface Admin {
  roles: string[];
}

export interface GeneralEvent {
  name: string;
  source: any;
}

// Make all Optional in GeneralEvent
type MyEvent = {
  [k in keyof GeneralEvent]+?: GeneralEvent[k];
};

// Make all Required and readonly
// -? remove optional
// +readonly add readonly
type MyRequredEvent = {
  +readonly [k in keyof MyEvent]-?: MyEvent[k];
};

type MyUnion = User | Admin;
type MyUnion2 = User & Admin;

// Can not do this
/* interface test extends MyUnion{

} */

interface test2 extends MyUnion2 {
  one: string;
}

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.scss'],
})
export class TypescriptComponent implements OnInit {
  constructor() {}

  user: User | Admin;

  ngOnInit(): void {
    console.log((this.user as User)?.name);

    const e: MyEvent = {
      name: '',
    };

    //Need all required props
    const ge: GeneralEvent = {
      name: '',
      source: '',
    };

    const m: MyUnion2 = {
      name: '',
      roles: [],
    };
  }
}
