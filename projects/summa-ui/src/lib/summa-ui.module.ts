import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabPanelComponent } from './components/sm-tab/tab-panel/tab-panel.component';
import { TabComponent } from './components/sm-tab/tab/tab.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [TabPanelComponent, TabComponent, CardComponent],
  imports: [CommonModule],
  exports: [TabPanelComponent, TabComponent, CardComponent],
})
export class SummaUiModule {}
