import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MaterialSelectComponent } from "./material/material-select/material-select.component";
import { MaterialModule } from '../material/material.module';
import { MaterialRadioButtonComponent } from './material/material-radio-button/material-radio-button.component';
import { FormsModule } from "@angular/forms";
import { HtmlSelectPostComponent } from './html/html-select/html-select-post/html-select-post.component';
import { HtmlSelectPutComponent } from './html/html-select/html-select-put/html-select-put.component';
import { HtmlRadioButtonPostComponent } from './html/html-radio-button/html-radio-button-post/html-radio-button-post.component';
import { HtmlRadioButtonPutComponent } from './html/html-radio-button/html-radio-button-put/html-radio-button-put.component';
import { HtmlCheckBoxPostComponent } from './html/html-check-box/html-check-box-post/html-check-box-post.component';
import { HtmlCheckBoxPutStaticComponent } from './html/html-check-box/html-check-box-put-static/html-check-box-put-static.component';
import { HtmlCheckBoxPutDynamicComponent } from './html/html-check-box/html-check-box-put-dynamic/html-check-box-put-dynamic.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,FormsModule
  ],
  declarations: [
    MaterialSelectComponent,
    HtmlSelectPostComponent,
    HtmlSelectPutComponent,
    MaterialRadioButtonComponent,
    HtmlRadioButtonPostComponent,
    HtmlRadioButtonPutComponent,
    HtmlCheckBoxPostComponent,
    HtmlCheckBoxPutStaticComponent,
    HtmlCheckBoxPutDynamicComponent

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    MaterialSelectComponent,
    HtmlSelectPostComponent,
    HtmlSelectPutComponent,
    MaterialRadioButtonComponent,
    HtmlRadioButtonPostComponent,
    HtmlRadioButtonPutComponent,
    HtmlCheckBoxPostComponent,
    HtmlCheckBoxPutStaticComponent,
    HtmlCheckBoxPutDynamicComponent

  ]
})
export class ComponentsModule {}
