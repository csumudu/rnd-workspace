import {
  Component,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'lib-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  private isClicked: boolean;

  @Input()
  public title: string;

  constructor() {}

  ngOnInit(): void {}

  @HostBinding('class.clicked')
  get clickStatus(): boolean {
    return this.isClicked;
  }

  @HostListener('click', ['$event'])
  clickHandler(): void {
    this.isClicked = !this.isClicked;
  }
}
