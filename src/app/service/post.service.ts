import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class PostService {
  private apiUrl: string = "https://baas.kinvey.com";
  private apiAppKey: string = "kid_HJzt5bQkd";
  private apiAppSecret: string = "33676f9812b14798bd6ae171ca97e3aa";
  private authToken =
    "6942131e-667d-4169-a47a-717026e48fb7.Rbqp7w2dDsbZVyNwUZRErN12Nm7MGWNTIyWsNMjkZNs=";
  constructor(private http: HttpClient) {}
  getPostHomeItems() {
    let post_category = [];
    let post_category_temp = [];
    return this.http
      .get<any>(`${this.apiUrl}/appdata/${this.apiAppKey}/post`, {
        headers: {
          Authorization: `Kinvey ${this.authToken}`,
          "Content-Type": "application/json",
        },
      })
      .pipe(
        map((data) => {
          post_category = data.filter((item) => item.post_category == "Block");
          post_category_temp = data.filter(
            (item) => item.post_category != "Block"
          );
          post_category.forEach((item) => {
            item.group = [];
            data.forEach((post) => {
              if (post.post_category == item.post_title) {
                item.group.push(post);
              }
            });
          });
          return post_category;
        })
      );
  }
}
