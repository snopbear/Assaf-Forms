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

import { catchError, tap, map, shareReplay, flatMap } from "rxjs/operators";
import { EMPTY, Observable } from "rxjs";
import { Model } from "../model/model";
import { NgForm } from "@angular/forms";
import swal from "sweetalert2";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilderCrudDemoService } from "../service/form-builder/form-builder-crud-demo.service";
import { GenericService } from "../service/generic/generic.service";
@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements OnInit {
  @ViewChild("form", { static: false }) form: NgForm;
  success = false;
  errorMessage = "";
  modelId: number;
  operatorId: number;
  model$: Observable<any>;
  items = {} as any; // Changes
  trust = true;

  constructor(
    private formBuilderCrudDemoService: FormBuilderCrudDemoService,
    private genericService: GenericService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.modelId = +this.route.snapshot.params["module"];

    this.operatorId = 0;

    this.model$ = this.formBuilderCrudDemoService
      .selectModelByIdObservableForPost(this.modelId)
      .pipe(
        map(model => {
          return {
            ...model.jsonDataObject,
            url: model.jsonDataObject.url
          };
        }),
        catchError(err => {
          this.errorMessage = err;
          return EMPTY;
        }),
        shareReplay(1)
      );

    this.model$.subscribe((res: any) => {
      debugger;
      this.genericService
        .get(res.url, this.operatorId)
        .subscribe((response: any) => {
          this.items = response;
        });
    });
  }

  toggleValue(item) {
    item.selected = !item.selected;
  }

  reset(form: NgForm) {
    form.resetForm();
  }

  handleEmitValue(val) {
    debugger;
    console.log(val);
  }
  submit(item: any) {
    debugger;
    let combinedObject = {} as any;
    let controls = [
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "hr",
      "paragraph",
      "pre",
      "quote",
      "bQuote",
      "span",
      "autocomplete",
      "radio",
      "button",
      "checkbox"
    ];
    //let combinedList = ([] = []);

    let valid = true;
    let validationArray = JSON.parse(JSON.stringify(item.tabs));
    validationArray.reverse().forEach(tab => {
      tab.accordions.forEach(accordion => {
        accordion.fields.forEach(field => {
          debugger;
          if (
            field.required &&
            !field.value &&
            (field.selectedValue == 0) &&
            !Array.isArray ==
              (function(item = field.selectedValues) {
                if (item == 0 || item == undefined) {
                  return false;
                } else {
                  return true;
                }
              })()
          ) {
            swal("Error", "Please enter " + field.label, "error");
            valid = false;
            return false;
          }
          if (field.required && field.regex) {
            let regex = new RegExp(field.regex);
            if (regex.test(field.value) == false) {
              swal("Error", field.errorText, "error");
              valid = false;
              return false;
            }
          }
          if (field.required &&   field.dynamic == false && field.type == "checkbox") {
            if (field.values.filter(r => r.selected).length == 0) {
              swal("Error", "Please enter " + field.label, "error");
              valid = false;
              return false;
            }
          }
          else
            if (field.required &&   field.dynamic == true && field.type == "checkbox" && field.selectedValues.length == 0) {
              swal("Error", "Please enter " + field.label, "error");
              valid = false;
              return false;
            }
          

          if (controls.includes(field.type) && field.dynamic == true) {
            if (field.type != "checkbox") {
              combinedObject[field.name] = +field.selectedValue;
            } else {
              combinedObject[field.name] = field.selectedValues;
            }
          }
          if (controls.includes(field.type) && field.dynamic == false) {
            if (field.type != "checkbox") {
              combinedObject[field.name] = +field.value;
            } else {
              combinedObject[field.name] = field.values
                .map(function(item) {
                  debugger;
                  if (item.selected != false) {
                    return +item.value;
                  }
                })
                .filter(item => item != undefined);
            }
          }
          if (!controls.includes(field.type)) {
            combinedObject[field.name] = field.value;
          }
        });
      });
    });
    if (!valid) {
      return false;
    }
    console.log(combinedObject);
    console.log("Save", combinedObject);
    this.genericService.post(item.url, combinedObject).subscribe(
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
        console.log(combinedObject);
        //this.router.navigate(["/"]);
      }
    );
  }
}
