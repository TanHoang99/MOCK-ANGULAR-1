import { Component, Input, OnInit } from "@angular/core";
import { navItems } from "../../nav-item";

@Component({
  selector: "app-menu-items",
  templateUrl: "./menu-items.component.html",
  styleUrls: ["./menu-items.component.scss"],
})
export class MenuItemsComponent implements OnInit {
  @Input() item: navItems;

  constructor() {}

  ngOnInit() {}
}
