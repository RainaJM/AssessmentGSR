import { Component, OnInit } from "@angular/core";
import { HomeService } from "../home.service";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  constructor(private homeService: HomeService, private route: Router) {}

  ngOnInit() {}

  /**
   * @method onSearch
   * @param user
   * @description fetches the user data
   */
  onSearch(user) {
    this.homeService
      .getData("https://jsonplaceholder.typicode.com/users?name=" + user)
      .subscribe((response) => {
        if (response.length != 0) {
          this.homeService.setTaskView({ userDetail: response[0] });
          this.route.navigate(["/posts"]);
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "We couldn't find the user!",
          });
        }
      });
  }
}
