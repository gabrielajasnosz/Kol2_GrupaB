import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GjForumComponent} from './components/gj-forum/gj-forum.component';
import {GjForumItemComponent} from './components/gj-forum-item/gj-forum-item.component';
import {GjForumDetailsComponent} from './components/gj-forum-details/gj-forum-details.component';
import {HttpClientModule} from "@angular/common/http";
import {GjDataService} from "./services/gj-data.service";

@NgModule({
  declarations: [
    AppComponent,
    GjForumComponent,
    GjForumItemComponent,
    GjForumDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [GjDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
