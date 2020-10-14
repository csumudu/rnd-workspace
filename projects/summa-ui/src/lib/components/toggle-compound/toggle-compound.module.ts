import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { ToggleOnComponent } from './toggle-on/toggle-on.component';
import { ToggleOffComponent } from './toggle-off/toggle-off.component';
import { SummaUiModule } from '../../summa-ui.module';
import { ToggleCompoundComponent } from './toggle-compound.component';

@NgModule({
  declarations: [
    ToggleButtonComponent,
    ToggleOnComponent,
    ToggleOffComponent,
    ToggleCompoundComponent,
  ],
  imports: [CommonModule, SummaUiModule],
  exports: [
    ToggleButtonComponent,
    ToggleOnComponent,
    ToggleOffComponent,
    ToggleCompoundComponent,
  ],
})
export class ToggleCompoundModule {}
