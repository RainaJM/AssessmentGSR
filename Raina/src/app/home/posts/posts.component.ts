import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HomeService } from "../home.service";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"],
})
export class PostsComponent implements OnInit {
  public userData;
  public userPosts = [];
  constructor(private router: Router, private homeService: HomeService) {}

  ngOnInit() {
    this.homeService.getTaskView().subscribe((res) => {
      this.userData = res.userDetail;
    });
    this.homeService
      .getData(
        "https://jsonplaceholder.typicode.com/posts?userId=" + this.userData.id
      )
      .subscribe((response) => {
        this.userPosts = response;
      });
  }
}
