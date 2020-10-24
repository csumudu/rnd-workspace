import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ComponentsComponent } from './pages/components/components.component';
import { SearchComponent } from './pages/search/search.component';
import { CardComponent } from './pages/components/childrens/card/card.component';
import { ToggleComponent } from './pages/components/childrens/toggle/toggle.component';
import { CssGridComponent } from './pages/css-grid/css-grid.component';
import { CenteringComponent } from './pages/css-grid/centering/centering.component';
import { BlocksComponent } from './pages/css-grid/blocks/blocks.component';
import { DynamicComponent } from './pages/dynamic/dynamic.component';
import { AnimationComponent } from './pages/animation/animation.component';
import { ReactiveComponent } from './pages/reactive/reactive.component';
import { TimerComponent } from './pages/timer/timer.component';
import { DecoratorParentComponent } from './pages/decorators/decorator-parent/decorator-parent.component';
import { TypescriptComponent } from './pages/typescript/typescript.component';
import { IteratorComponent } from './pages/iterator/iterator.component';
import { DirectivesComponent } from './pages/directives/directives.component';
import { CounterComponent } from './pages/reactive/counter/counter.component';
import { OperatorsComponent } from './pages/reactive/operators/operators.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'post',
    component: PostComponent,
  },
  {
    path: 'components',
    component: ComponentsComponent,
    children: [
      {
        path: 'card',
        component: CardComponent,
      },
      {
        path: 'toggle',
        component: ToggleComponent,
      },
    ],
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'decorators',
    component: DecoratorParentComponent,
  },
  {
    path: 'iterator',
    component: IteratorComponent,
  },
  {
    path: 'directive',
    component: DirectivesComponent,
  },
  {
    path: 'ts',
    component: TypescriptComponent,
  },
  {
    path: 'dynamic',
    component: DynamicComponent,
  },
  {
    path: 'reactive',
    component: ReactiveComponent,
    children: [
      {
        path: 'operators',
        component: OperatorsComponent,
        pathMatch: 'full',
      },
      {
        path: 'counter',
        component: CounterComponent,
      },
      {
        path: '',
        redirectTo: 'counter',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'timer',
    component: TimerComponent,
  },
  {
    path: 'animation',
    component: AnimationComponent,
  },
  {
    path: 'grid',
    component: CssGridComponent,
    children: [
      {
        path: 'center',
        component: CenteringComponent,
      },
      {
        path: 'blocks',
        component: BlocksComponent,
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
