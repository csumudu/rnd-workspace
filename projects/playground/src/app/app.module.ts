import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaUiModule } from 'summa-ui';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ComponentsComponent } from './pages/components/components.component';
import { SearchComponent } from './pages/search/search.component';
import { CardComponent } from './pages/components/childrens/card/card.component';
import { ToggleComponent } from './pages/components/childrens/toggle/toggle.component';
import { ToggleCompoundModule } from '../../../summa-ui/src/lib/components/toggle-compound/toggle-compound.module';
import { ToggleCompoundWithDiModule } from '../../../summa-ui/src/lib/components/toggle-compound-with-di/toggle-compound-with-di.module';
import { CssGridComponent } from './pages/css-grid/css-grid.component';
import { CenteringComponent } from './pages/css-grid/centering/centering.component';
import { BlocksComponent } from './pages/css-grid/blocks/blocks.component';
import { DynamicComponent } from './pages/dynamic/dynamic.component';
import { ComponentOneComponent } from './pages/dynamic/component-one/component-one.component';
import { AnimationComponent } from './pages/animation/animation.component';
import { ReactiveComponent } from './pages/reactive/reactive.component';
import { TimerComponent } from './pages/timer/timer.component';
import { ToArrayPipe } from './pages/timer/to-array.pipe';
import { DecoratorsComponent } from './pages/decorators/decorators.component';
import { DecoratorParentComponent } from './pages/decorators/decorator-parent/decorator-parent.component';
import { TypescriptComponent } from './pages/typescript/typescript.component';
import { IteratorComponent } from './pages/iterator/iterator.component';
import { DirectivesComponent } from './pages/directives/directives.component';
import { CounterComponent } from './pages/reactive/counter/counter.component';
import { OperatorsComponent } from './pages/reactive/operators/operators.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    DashboardComponent,
    ComponentsComponent,
    SearchComponent,
    CardComponent,
    ToggleComponent,
    CssGridComponent,
    CenteringComponent,
    BlocksComponent,
    DynamicComponent,
    ComponentOneComponent,
    AnimationComponent,
    ReactiveComponent,
    TimerComponent,
    ToArrayPipe,
    DecoratorsComponent,
    DecoratorParentComponent,
    TypescriptComponent,
    IteratorComponent,
    DirectivesComponent,
    CounterComponent,
    OperatorsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SummaUiModule,
    ToggleCompoundModule,
    ToggleCompoundWithDiModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [],
})
export class AppModule {}
