import { Component, OnInit, ViewChild } from "@angular/core";
import { field } from "../shared/model/global.model";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Model } from "../shared/model/model";
import { FormBuilderService } from "../shared/services/form-builder.service";
import { NgForm } from "@angular/forms";
declare var $: any;
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.css"]
})
export class ViewComponent implements OnInit {
  ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
    { position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
    { position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
    { position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be" },
    { position: 5, name: "Boron", weight: 10.811, symbol: "B" },
    { position: 6, name: "Carbon", weight: 12.0107, symbol: "C" },
    { position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N" },
    { position: 8, name: "Oxygen", weight: 15.9994, symbol: "O" },
    { position: 9, name: "Fluorine", weight: 18.9984, symbol: "F" },
    { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" },
    { position: 11, name: "Sodium", weight: 22.9897, symbol: "Na" },
    { position: 12, name: "Magnesium", weight: 24.305, symbol: "Mg" },
    { position: 13, name: "Aluminum", weight: 26.9815, symbol: "Al" },
    { position: 14, name: "Silicon", weight: 28.0855, symbol: "Si" },
    { position: 15, name: "Phosphorus", weight: 30.9738, symbol: "P" },
    { position: 16, name: "Sulfur", weight: 32.065, symbol: "S" },
    { position: 17, name: "Chlorine", weight: 35.453, symbol: "Cl" },
    { position: 18, name: "Argon", weight: 39.948, symbol: "Ar" },
    { position: 19, name: "Potassium", weight: 39.0983, symbol: "K" },
    { position: 20, name: "Calcium", weight: 40.078, symbol: "Ca" }
  ];

  displayedColumns: string[] = ["position", "name", "weight", "symbol"];

  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  show = false;
  success = false;
  isSaved = false;
  favoriteGridSystem = "col-12";
  modelTemplete = new Model();

  model: any = {
    id: "",
    name: "",
    description: "",
    gridSystem: "col-12",
    theme: {
      modelId: "",
      bgColor: "ffffff",
      textColor: "555555",
      bannerImage: ""
    },
    tabs: [
      {
        id: 1,
        header: "Tab 1",
        modelId: "",
        accordions: [
          {
            id: 1,
            header: "Header 1",
            parentId: 1,
            fields: Array<field>(),
            modelId: ""
          }
        ]
      }
    ]
  };

  constructor(private formBuilderService: FormBuilderService) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  bindModel(model: Model) {
    this.show = true;
    this.model = JSON.parse(model.jsonDataObject);
  }

  newModel(model: Model) {
    this.isSaved = false;
    this.modelTemplete = new Model();
  }
  saveModel(model: Model) {
    this.formBuilderService.addModel(model).subscribe((res: any) => {
      console.log(res);
    });
    this.isSaved = true;
    $("#myModal").modal("hide");
  }

  toggleValue(item) {
    item.selected = !item.selected;
  }
  submit(item: any) {}
  reset(form: NgForm) {
    form.resetForm();
  }
}
