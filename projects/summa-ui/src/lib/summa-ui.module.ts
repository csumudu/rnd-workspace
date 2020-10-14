import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabPanelComponent } from './components/sm-tab/tab-panel/tab-panel.component';
import { TabComponent } from './components/sm-tab/tab/tab.component';
import { CardComponent } from './components/card/card.component';
import { ToggleComponent } from './components/toggle/toggle.component';

@NgModule({
  declarations: [
    TabPanelComponent,
    TabComponent,
    CardComponent,
    ToggleComponent,
  ],
  imports: [CommonModule],
  exports: [TabPanelComponent, TabComponent, CardComponent, ToggleComponent],
})
export class SummaUiModule {}
