import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { nav } from "./share/navbar/share.model";

@Injectable({
  providedIn: "root",
})
export class NavbarService {
  private kinVeyBaseUrl = "https://baas.kinvey.com";

  private kinVeyAppKey = "kid_HJzt5bQkd";

  private kinVeySecret = "33676f9812b14798bd6ae171ca97e3aa";

  httpOptions = {
    headers: new HttpHeaders({
      Authorization:
        "d6cd6223-9ff7-4214-bcf8-eb71d8b0f610.22nIZ13DlcIE7tYc21VjkTTryZ/h3qpUAhE8ssFsfvg=",
      "Content-Type": "application/json",
    }),
  };

  constructor(private http: HttpClient) {}
  submitCreateBook(nav: nav) {
    return this.http
      .post<any>(
        `${this.kinVeyBaseUrl}/appdata/${this.kinVeyAppKey}/category`,
        nav,
        this.httpOptions
      )
      .pipe(
        map((data) => {
          const book: nav = {
            title: data.title,
            author: data.author,
            description: data.description,
            id: data._id,
          };
          return book;
        })
      );
  }
}
