import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GjForumComponent} from "./components/gj-forum/gj-forum.component";
import {GjForumDetailsComponent} from "./components/gj-forum-details/gj-forum-details.component";

const routes: Routes = [
  {
    path: '',
    component: GjForumComponent,
  },
  {
    path: 'forum/posts/:id',
    component: GjForumDetailsComponent,
  },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
