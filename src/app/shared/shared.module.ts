import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "./material/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { DndModule } from "ngx-drag-drop";
import { AccordionModule } from "ngx-bootstrap/accordion";
import { DirectivesModule } from './directives/directives.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    DndModule,
    DirectivesModule,
 
    AccordionModule.forRoot(),
  ],
  exports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    DndModule,
    DirectivesModule,
    AccordionModule,
  ]
})
export class SharedModule {}
