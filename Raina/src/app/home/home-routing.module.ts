import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SearchComponent } from "./search/search.component";
import { PostsComponent } from "./posts/posts.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "SearchComponent",
    pathMatch: "full",
  },
  {
    path: "",
    component: SearchComponent,
  },
  {
    path: "posts",
    component: PostsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
