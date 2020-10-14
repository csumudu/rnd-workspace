import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SummaUiModule} from "summa-ui";
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ComponentsComponent } from './pages/components/components.component';
import { SearchComponent } from './pages/search/search.component';
import { CardComponent } from './pages/components/childrens/card/card.component';
import { ToggleComponent } from './pages/components/childrens/toggle/toggle.component'
import { ToggleCompoundModule } from '../../../summa-ui/src/lib/components/toggle-compound/toggle-compound.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    DashboardComponent,
    ComponentsComponent,
    SearchComponent,
    CardComponent,
    ToggleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SummaUiModule,
    ToggleCompoundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
