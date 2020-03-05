import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ChangeDetectionStrategy
} from "@angular/core";

import {
  MatPaginator,
  MatSort,
  MatTableDataSource,
  MatSnackBar
} from "@angular/material";
import { field } from "src/app/shared/model/global.model";

import { catchError, map, tap, shareReplay } from "rxjs/operators";
import { EMPTY, Observable } from "rxjs";
import { Model } from "../model/model";
import { NgForm } from "@angular/forms";
import swal from "sweetalert2";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilderCrudDemoService } from "../service/form-builder/form-builder-crud-demo.service";
import { GenericService } from "../service/generic/generic.service";

@Component({
  selector: "app-put",
  templateUrl: "./put.component.html",
  styleUrls: ["./put.component.css"]
})
export class PutComponent implements OnInit {
  success = false;
  model = null;
  errorMessage = "";
  url;

  categoryModel = 1;
  constructor(
    private formBuilderCrudDemoService: FormBuilderCrudDemoService,
    private genericService: GenericService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  items = {} as any; // Changes
  modelId: number;
  operatorId: number;

  ngOnInit() {
    this.modelId = +this.route.snapshot.params["module"];

    this.operatorId = +this.route.snapshot.params["operator"];

    this.formBuilderCrudDemoService
      .selectModelByIdForPut(this.modelId)
      .subscribe((res: any) => {
        this.model = res.jsonDataObject;
        this.genericService
          .get(res.jsonDataObject.url, this.operatorId)
          .subscribe((response: any) => {
            this.items = response;
          });
      });
  }
  toggleValueStaticCheck(name, item) {
    debugger
    this.items[name] = item.value;
  }

  toggleValueStaticSelect(name, item) {
    debugger
    this.items[name] = +item;
  }

  reset(form: NgForm) {
    form.resetForm();
  }

  submit(item: any, model: any) {
    debugger;
    item.id = +this.route.snapshot.params["operator"];
    let valid = true;
    for (var member in item) {
      if (item[member] == null || item[member] == "") {
        let name = member.charAt(0).toUpperCase() + member.slice(1);
        swal(
          "Error",
          "Please enter " +
            `<span style="color:#f27474">${name
              .match(/[A-Z][a-z]+|[0-9]+/g)
              .join(" ")}</span>`,
          "error"
        );
        valid = false;
        return true;
      }
    }
    if (!valid) {
      return false;
    }
    console.log("Save", item);
    this.genericService.update(model.url, item).subscribe(
      success => {
        this.snackBar.open("Submitted Successfully", "👌 🙂", {
          duration: 5000
        });
      },
      error => {
        this.snackBar.open("Something going wrong!!", "✋ 🙁", {
          duration: 5000
        });
      },
      () => {
        this.router.navigate(["/"]);
      }
    );
  }
}
