import { Component, OnInit } from "@angular/core";
import { PostService } from "../service/post.service";
import { Post } from "../share/model";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  postItems: Post[] = [];
  postLaptrinh: Post[] = [];
  postWebMienPhi: Post[] = [];
  postQuanTriWeb: Post[] = [];
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPostHomeItems().subscribe((postHomeItem) => {
      this.postItems = postHomeItem;
      this.postQuanTriWeb = postHomeItem[3].group;
      this.postWebMienPhi = postHomeItem[4].group;
      this.postLaptrinh = postHomeItem[5].group;
      console.log(this.postItems);
      console.log(this.postLaptrinh);
    });
  }
}
