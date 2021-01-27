import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './share/navbar/navbar.component';
import { MenuItemsComponent } from './share/navbar/menu-items/menu-items.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
