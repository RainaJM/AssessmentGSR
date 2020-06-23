import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PostsComponent } from './posts/posts.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [PostsComponent, SearchComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
