import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MarketlistComponent } from './marketlist/marketlist.component';
import { SandhailistComponent } from './marketlist/sandhailist/sandhailist.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'marketlist', component: MarketlistComponent},
  { path: 'marketlist/:districtName', component: SandhailistComponent},
  { path: 'contact', component: ContactComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    MarketlistComponent,
    SandhailistComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
