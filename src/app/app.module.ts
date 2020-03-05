import {
  BrowserModule,
  HAMMER_GESTURE_CONFIG
} from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";

import { HeaderComponent } from "./navigation/header/header.component";
import { SidenavListComponent } from "./navigation/sidenav-list/sidenav-list.component";
import { HomeComponent } from "./home/home.component";
import { ViewComponent } from "./view/view.component";
import { InfoComponent } from "./info/info.component";
import { CategoryFilterPipe } from "./shared/pipe/category-filter.pipe";
import { GestureConfig, MAT_DATE_LOCALE } from "@angular/material";
import { NgxJsonViewerModule } from "ngx-json-viewer-scrolling";
import {
  BsDatepickerModule,
  BsDatepickerConfig
} from "ngx-bootstrap/datepicker";
import { PostComponent } from "./crud-demo/post/post.component";
import { PutComponent } from "./crud-demo/put/put.component";

import { ComponentsModule } from "./shared/component/components.module";

export function getDatepickerConfig(): BsDatepickerConfig {
  return Object.assign(new BsDatepickerConfig(), {
    //   containerClass: 'theme-dark-blue',
    dateInputFormat: "DD/MM/YYYY",
    isAnimated: true
  });
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavListComponent,
    HomeComponent,
    ViewComponent,
    InfoComponent,
    CategoryFilterPipe,
    PostComponent,
    PutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxJsonViewerModule,
    ComponentsModule,
    BsDatepickerModule.forRoot(),
    ComponentsModule
  ],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig },
    { provide: MAT_DATE_LOCALE, useValue: "en-GB" },
    { provide: BsDatepickerConfig, useFactory: getDatepickerConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
