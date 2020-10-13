import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { startWith, tap } from 'rxjs/operators';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'lib-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.scss'],
})
export class TabPanelComponent implements OnInit, AfterContentInit {
  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;

  @Input()
  tabTemplate: TemplateRef<any>

  selected: BehaviorSubject<TabComponent> = new BehaviorSubject<TabComponent>(
    null
  );

  constructor() {}
  ngAfterContentInit(): void {
    const subs = this.selected
      .pipe(
        tap((e) => {
          if (!e) {
            this.selected.next(this.tabs.first);
          }
        })
      )
      .subscribe((s) => {
        this.tabs.forEach((t) => {
          if (s) {
            t.hide = t !== s;
          }
        });
      });
  }

  ngOnInit(): void {}

  get tabsContext(): { tabs: QueryList<TabComponent> } {
    return {
      tabs: this.tabs,
    };
  }

  onSelect(e): void {
    this.selected.next(e);
  }
}
