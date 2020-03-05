import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { InfoComponent } from './info/info.component';
import { PostComponent } from './crud-demo/post/post.component';
import { PutComponent } from './crud-demo/put/put.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "view", component: ViewComponent },
  { path: "info", component: InfoComponent },
  { path: "post", component: PostComponent },
  { path: "post/:module", component: PostComponent },
  { path: "put", component: PutComponent },
  { path: "put/:module/:operator", component: PutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
