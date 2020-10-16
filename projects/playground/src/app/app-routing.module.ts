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
    path: 'dynamic',
    component: DynamicComponent,
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
