import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { navItems } from "../share/model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class NavbarService {
  private apiUrl: string = "https://baas.kinvey.com";
  private apiAppKey: string = "kid_HJzt5bQkd";
  private apiAppSecret: string = "33676f9812b14798bd6ae171ca97e3aa";
  private authToken =
    "6942131e-667d-4169-a47a-717026e48fb7.Rbqp7w2dDsbZVyNwUZRErN12Nm7MGWNTIyWsNMjkZNs=";
  constructor(private http: HttpClient) {}

  getNavItems() {
    let navItems = [];
    let navItemsTemp = [];
    return this.http
      .get<any>(`${this.apiUrl}/appdata/${this.apiAppKey}/category`, {
        headers: {
          Authorization: `Kinvey ${this.authToken}`,
          "Content-Type": "application/json",
        },
      })
      .pipe(
        map((data) => {
          navItems = data.filter((item) => item.nav_parent_id == null);
          navItemsTemp = data.filter((item) => item.nav_parent_id);
          navItems.forEach((itemLV1) => {
            itemLV1.children = [];
            navItemsTemp.forEach((itemLV2) => {
              if (itemLV2.nav_parent_id == itemLV1._id) {
                itemLV1.children.push(itemLV2);
              }
            });
            itemLV1.children.forEach((itemLV2) => {
              itemLV2.children = [];
              navItemsTemp.forEach((itemLV3) => {
                if (itemLV3.nav_parent_id == itemLV2._id) {
                  itemLV2.children.push(itemLV3);
                }
              });
            });
          });
          return navItems;
        })
      );
  }
  createNavItems(navItems: navItems) {
    return this.http.post<any>(
      `${this.apiUrl}/appdata/${this.apiAppKey}/category`,
      navItems,
      {
        headers: {
          Authorization: `Kinvey ${this.authToken}`,
          "Content-Type": "application/json",
        },
      }
    );
  }
}
