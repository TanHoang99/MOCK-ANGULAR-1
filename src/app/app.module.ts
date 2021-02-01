import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./share/navbar/navbar.component";
import { MenuItemsComponent } from "./share/navbar/menu-items/menu-items.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./share/header/header.component";
import { FooterComponent } from "./share/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuItemsComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
