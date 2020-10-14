import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ComponentsComponent } from './pages/components/components.component';
import { SearchComponent } from './pages/search/search.component';
import { CardComponent } from './pages/components/childrens/card/card.component';
import { ToggleComponent } from './pages/components/childrens/toggle/toggle.component';

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
