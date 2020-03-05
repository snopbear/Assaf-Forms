import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import * as Material from "@angular/material";

@NgModule({
  imports: [
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatRadioModule,
    Material.MatSelectModule,
    Material.MatCheckboxModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatButtonModule,
    Material.MatSnackBarModule,
    Material.MatTableModule,
    Material.MatIconModule,
    Material.MatPaginatorModule,
    Material.MatSortModule,
    Material.MatTabsModule,
    Material.MatSidenavModule,
    Material.MatListModule,
    Material.MatCardModule,
    Material.MatIconModule,
    Material.MatProgressSpinnerModule,
    Material.MatMenuModule,
    Material.MatDialogModule ,
    Material.MatExpansionModule,
    Material.MatTooltipModule
  ],
  exports: [
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatRadioModule,
    Material.MatSelectModule,
    Material.MatCheckboxModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatButtonModule,
    Material.MatSnackBarModule,
    Material.MatTableModule,
    Material.MatIconModule,
    Material.MatPaginatorModule,
    Material.MatSortModule,
    Material.MatTabsModule,
    Material.MatSidenavModule,
    Material.MatListModule,
    Material.MatCardModule,
    Material.MatIconModule,
    Material.MatProgressSpinnerModule,
    Material.MatMenuModule,
    Material.MatDialogModule,
    Material.MatExpansionModule,
    Material.MatTooltipModule
  ],
  providers: [Material.MatIconRegistry]
  , schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MaterialModule { }
