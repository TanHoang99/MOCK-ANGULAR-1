import { Component, OnInit } from "@angular/core";
import { navItems } from "../model";
import { NavbarService } from "../../service/navbar.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  navItems: navItems[] = [];
  constructor(private navbarService: NavbarService) {}

  ngOnInit() {
    this.navbarService.getNavItems().subscribe((navItem) => {
      this.navItems = navItem;
      console.log(navItem);
    });
  }
}
