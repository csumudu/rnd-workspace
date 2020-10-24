import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations: [
    trigger('toggleEffect', [
      transition('void=>*', [
        style({
          opacity: 0,
        }),
        animate(300),
      ]),
      transition('* => void', [animate(500, style({ opacity: 0 }))]),
    ]),
  ],
})
export class AnimationComponent implements OnInit {
  isVisible: boolean;

  constructor() {}

  ngOnInit(): void {}

  onToggle() {
    this.isVisible = !this.isVisible;
  }
}
