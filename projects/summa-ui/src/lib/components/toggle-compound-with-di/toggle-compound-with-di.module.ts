import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleCompoundWithDiComponent } from './toggle-compound-with-di.component';
import { SummaUiModule } from '../../summa-ui.module';
import { ToggleDiButtonComponent } from './toggle-di-button/toggle-di-button.component';
import { ToggleDiOnComponent } from './toggle-di-on/toggle-di-on.component';
import { ToggleDiOffComponent } from './toggle-di-off/toggle-di-off.component';

@NgModule({
  declarations: [
    ToggleCompoundWithDiComponent,
    ToggleDiButtonComponent,
    ToggleDiOnComponent,
    ToggleDiOffComponent,
  ],
  imports: [CommonModule, SummaUiModule],
  exports: [
    ToggleCompoundWithDiComponent,
    ToggleDiButtonComponent,
    ToggleDiOnComponent,
    ToggleDiOffComponent,
  ],
})
export class ToggleCompoundWithDiModule {}
