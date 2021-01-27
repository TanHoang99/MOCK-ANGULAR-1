import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./share/navbar/navbar.component";
import { AdminHomeComponent } from "./admin/admin-home/admin-home.component";
import { PostComponent } from "./admin/post/post.component";
import { TestsComponent } from "./tests/tests.component";
import { FooterComponent } from "./footer/footer.component";
import { MainComponent } from "./main/main.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminHomeComponent,
    PostComponent,
    TestsComponent,
    FooterComponent,
    MainComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
