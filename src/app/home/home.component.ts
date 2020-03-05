import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import {
  MatPaginator,
  MatSort,
  MatTableDataSource,
  MatTabChangeEvent,
  MatSnackBar
} from "@angular/material";
import { DndDropEvent, DropEffect } from "ngx-drag-drop";
import { value, field } from "../shared/model/global.model";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import swal from "sweetalert2";
import { Guid } from "../shared/guid/guid";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, AfterViewInit {
  //#region report
  report = false;

  reports: any = [];
  //#endregion report

  //#region expansion panel
  panelOpenState = false;
  //#endregion expansion panel

  // #region Start json viewer
  binded;
  // #endregion End json viewer

  // #region Start Manage Tabs and Occordions
  modelId = Guid.newGuid();
  headerClicked;
  tabHeaderValue;
  selectedTabIndex = 0;
  selectedTabId = 1;
  occordionHeaderValue;

  favoriteGridSystem = "col-12";
  gridSystems: string[] = [
    "col-1",
    "col-2",
    "col-3",
    "col-4",
    "col-5",
    "col-6",
    "col-7",
    "col-8",
    "col-9",
    "col-10",
    "col-11",
    "col-12"
  ];
  // #endregion end Manage Tabs and Occordions

  // #region start DataTable

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  columns: Array<any> = [];
  displayedColumns: string[];

  positions: any[] = [];
  dataSource: MatTableDataSource<any>;
  isEmpty = true;
  columnsNumber = 2;

  addColumnToTable(item) {
    item.values.push(this.value);
    this.value = { label: "", value: "" };
    item.dataSource.push(this.value.label);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  returnColumnsToDataTable(item: any) {
    if (this.columnsNumber <= item.values.length) {
      this.columns = [];
      item.values.map(
        function(element) {
          this.columns.push(element);
        }.bind(this)
      );
      this.displayedColumns = this.columns.map(column => column.value);
      this.columnsNumber = item.values.length + 1;
    }
    return this.columns;
  }

  // #endregion end DataTable

  // #region start controls
  value: value = {
    id: 1,
    label: "",
    value: "",
    selected: false
  };
  success = false;

  fieldModels: Array<field> = [
    {
      type: "h1",
      icon: "fa fa-header",
      label: "H1",
      placeholder: "Heading 1",
      parent: "",
      relatedTo: "",
      category: "headings",
      material: "false",
      visible: false
    },
    {
      type: "h2",
      icon: "fa fa-header",
      label: "H2",
      placeholder: "Heading 2",
      parent: "",
      relatedTo: "",
      category: "headings",
      material: "false",
      visible: false
    },
    {
      type: "h3",
      icon: "fa fa-header",
      label: "H3",
      placeholder: "Heading 3",
      parent: "",
      relatedTo: "",
      category: "headings",
      material: "false",
      visible: false
    },
    {
      type: "h4",
      icon: "fa fa-header",
      label: "H4",
      placeholder: "Heading 4",
      parent: "",
      relatedTo: "",
      category: "headings",
      material: "false",
      visible: false
    },
    {
      type: "h5",
      icon: "fa fa-header",
      label: "H5",
      placeholder: "Heading 5",
      parent: "",
      relatedTo: "",
      category: "headings",
      material: "false",
      visible: false
    },
    {
      type: "h6",
      icon: "fa fa-header",
      label: "H6",
      placeholder: "Heading 6",
      parent: "",
      relatedTo: "",
      category: "headings",
      material: "false",
      visible: false
    },
    {
      type: "hr",
      icon: "fa fa-window-minimize",
      label: "Hr",
      subtype: "hr",
      handle: true,
      parent: "",
      relatedTo: "",
      category: "tag",
      material: "false",
      visible: false
    },
    {
      type: "paragraph",
      icon: "fa-paragraph",
      label: "Paragraph",
      placeholder: "Paragraph",
      parent: "",
      relatedTo: "",
      category: "typography",
      material: "false",
      visible: false
    },
    {
      type: "pre",
      icon: "fa fa-outdent",
      label: "pre",
      placeholder: "pre",
      parent: "",
      relatedTo: "",
      category: "typography",
      material: "false",
      visible: false
    },
    {
      type: "quote",
      icon: "fa fa-quote-left",
      label: "Quote",
      placeholder: "Quote",
      parent: "",
      relatedTo: "",
      category: "typography",
      material: "false",
      visible: false
    },
    {
      type: "bQuote",
      icon: "fa fa-quote-right",
      label: "Block Quote",
      placeholder: "block quote",
      parent: "",
      relatedTo: "",
      category: "typography",
      material: "false",
      visible: false
    },
    {
      type: "span",
      icon: "fa-font",
      label: "Span",
      placeholder: "Span",
      parent: "",
      relatedTo: "",
      category: "regular-controls",
      material: "false",
      visible: false
    },
    {
      type: "text",
      icon: "fa fa-text-width",
      label: "Text",
      description: "Enter your name",
      placeholder: "Enter your name",
      className: "form-control",
      subtype: "text",
      regex: "",
      handle: true,
      parent: "",
      relatedTo: "",
      category: "regular-controls",
      material: "false",
      value: "",
      visible: false
    },
    {
      type: "textarea",
      icon: "fa fa-text-height",
      label: "Textarea",
      parent: "",
      relatedTo: "",
      category: "regular-controls",
      material: "false",
      value: "",
      visible: false
    },
    {
      type: "email",
      icon: "fa-envelope",
      required: true,
      label: "Email",
      description: "Enter your email",
      placeholder: "Enter your email",
      className: "form-control",
      subtype: "text",
      regex: "^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+).([a-zA-Z]{2,5})$",
      errorText: "Please enter a valid email",
      handle: true,
      parent: "",
      relatedTo: "",
      category: "regular-controls",
      material: "false",
      value: "",
      visible: false
    },
    {
      type: "phone",
      icon: "fa-phone",
      label: "Phone",
      description: "Enter your phone",
      placeholder: "Enter your phone",
      className: "form-control",
      subtype: "text",
      regex: "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$",
      errorText: "Please enter a valid phone number",
      handle: true,
      parent: "",
      relatedTo: "",
      category: "regular-controls",
      material: "false",
      value: "",
      visible: false
    },
    {
      type: "number",
      label: "Number",
      icon: "fa-html5",
      description: "Age",
      placeholder: "Enter your age",
      className: "form-control",
      value: "0",
      min: 0,
      max: 100,
      parent: "",
      relatedTo: "",
      category: "regular-controls",
      material: "false",
      visible: false
    },
    {
      type: "date",
      icon: "fa-calendar",
      label: "Date",
      placeholder: "Date",
      className: "form-control",
      parent: "",
      relatedTo: "",
      category: "regular-controls",
      material: "false",
      value: "",
      visible: false
    },
    {
      type: "datetime-range",
      icon: "fa fa-calendar-check-o",
      label: "DateTime Range",
      placeholder: "Date Time",
      className: "form-control",
      parent: "",
      relatedTo: "",
      category: "regular-controls",
      material: "false",
      value: "",
      visible: false
    },
    {
      type: "checkbox",
      required: true,
      label: "Checkbox",
      icon: "fa-list",
      description: "Checkbox",
      inline: true,
      values: [
        {
          id: 1,
          label: "Option 1",
          value: "1",
          selected: false
        }
      ],
      parent: "",
      relatedTo: "",
      category: "regular-controls",
      material: "false",
      value: "",
      dynamic: false,
      apiUrl: "",
      visible: false,
      selectedValues: [],
      embedded: ""
    },
    {
      type: "radio",
      icon: "fa-list-ul",
      label: "Radio",
      description: "Radio boxes",
      values: [
        {
          id: 1,
          label: "Option 1",
          value: "1",
          selected: false
        }
      ],
      parent: "",
      relatedTo: "",
      category: "regular-controls",
      material: "false",
      dynamic: false,
      apiUrl: "",
      visible: false,
      selectedValue: 0,
      embedded: ""
    },
    {
      type: "autocomplete",
      icon: "fa-bars",
      label: "Select",
      description: "Select",
      placeholder: "Select",
      className: "form-control",
      values: [
        {
          id: 1,
          label: "Option 1",
          value: "1",
          selected: false
        }
      ],
      parent: "",
      relatedTo: "",
      category: "regular-controls",
      material: "false",
      dynamic: false,
      apiUrl: "",
      visible: false,
      selectedValue: 0,
      embedded: ""
    },
    {
      type: "file",
      icon: "fa-file",
      label: "File Upload",
      className: "form-control",
      subtype: "file",
      parent: "",
      relatedTo: "",
      category: "regular-controls",
      material: "false",
      visible: false
    },
    {
      type: "button",
      icon: "fa-paper-plane",
      subtype: "submit",
      label: "Submit",
      className: "btn",
      parent: "",
      relatedTo: "",
      category: "regular-controls",
      material: "false",
      visible: false
    },
    {
      type: "button-with-reset",
      icon: "fa fa-rocket",
      subtype: "submit",
      nestedType: "reset",
      label: "Submit",
      sublabel: "Clear",
      className: "btn",
      parent: "",
      relatedTo: "",
      category: "regular-controls",
      material: "false",
      visible: false
    },
    {
      type: "text-material",
      icon: "fa fa-text-width",
      label: "Text",
      description: "Enter your name",
      placeholder: "Enter your name",
      className: "form-control",
      subtype: "text",
      regex: "",
      handle: true,
      parent: "",
      relatedTo: "",
      category: "angular-material",
      material: "true",
      hideRequiredMarker: "true",
      appearance: "legacy",
      hintLabel: "",
      errorText: "",
      visible: false
    },
    {
      type: "text-length-material",
      icon: "fa fa-lock",
      label: "Text - Max",
      description: "Enter your name",
      placeholder: "Enter your name",
      className: "form-control",
      subtype: "text",
      regex: "",
      handle: true,
      parent: "",
      relatedTo: "",
      category: "angular-material",
      material: "true",
      hideRequiredMarker: "true",
      appearance: "",
      hintLabel: "",
      errorText: "",
      maxLength: "10",
      visible: false
    },

    {
      type: "clearable-material",
      icon: "fa fa-window-close-o",
      label: "Text - Clear",
      description: "Clearable",
      placeholder: "Clear",
      className: "form-control",
      subtype: "text",
      regex: "",
      handle: true,
      parent: "",
      relatedTo: "",
      category: "angular-material",
      material: "true",
      hideRequiredMarker: "true",
      appearance: "legacy",
      hintLabel: "",
      errorText: "",
      divider: true,
      visible: false
    },
    {
      type: "textarea-material",
      icon: "fa fa-text-height",
      label: "Textarea",
      description: "Enter your name",
      placeholder: "Enter your name",
      className: "form-control",
      subtype: "text",
      regex: "",
      handle: true,
      parent: "",
      relatedTo: "",
      category: "angular-material",
      material: "true",
      hideRequiredMarker: "true",
      appearance: "legacy",
      hintLabel: "",
      errorText: "",
      visible: true
    },
    {
      type: "textarea-length-material",
      icon: "fa fa-lock",
      label: "Textarea - Max",
      description: "Enter your name",
      placeholder: "Enter your name",
      className: "form-control",
      subtype: "text",
      regex: "",
      handle: true,
      parent: "",
      relatedTo: "",
      category: "angular-material",
      material: "true",
      hideRequiredMarker: "true",
      appearance: "legacy",
      hintLabel: "",
      errorText: "",
      maxLength: "10",
      divider: true,
      visible: false
    },
    {
      type: "email-material",
      icon: "fa-envelope",
      required: "",
      label: "Email",
      description: "Enter your email",
      placeholder: "Enter your email",
      className: "form-control",
      subtype: "text",
      regex: "^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+).([a-zA-Z]{2,5})$",
      errorText: "Please enter a valid email",
      handle: true,
      parent: "",
      relatedTo: "",
      category: "angular-material",
      material: "true",
      hideRequiredMarker: "true",
      appearance: "legacy",
      hintLabel: "",
      visible: false
    },
    {
      type: "phone-material",
      icon: "fa-phone",
      label: "Phone",
      description: "Enter your name",
      placeholder: "Enter your name",
      className: "form-control",
      subtype: "text",
      regex: "",
      handle: true,
      parent: "",
      relatedTo: "",
      category: "angular-material",
      material: "true",
      hideRequiredMarker: "true",
      appearance: "legacy",
      hintLabel: "",
      errorText: "",
      visible: false
    },
    {
      type: "number-material",
      icon: "fa-html5",
      label: "Number",
      description: "Enter your name",
      placeholder: "Enter your name",
      className: "form-control",
      subtype: "text",
      regex: "",
      handle: true,
      parent: "",
      relatedTo: "",
      category: "angular-material",
      material: "true",
      hideRequiredMarker: "true",
      appearance: "legacy",
      hintLabel: "",
      errorText: "",
      value: 20,
      min: 12,
      max: 90,
      visible: false
    },
    {
      type: "basic-datepicker-material",
      icon: "fa fa-calendar",
      label: "Basic ",
      description: "Choose a date",
      placeholder: "Choose a date",
      className: "form-control",
      subtype: "text",
      regex: "",
      handle: true,
      parent: "",
      relatedTo: "",
      category: "angular-material-datepicker",
      material: "true",
      hideRequiredMarker: "true",
      errorText: "",
      visible: false
    },
    {
      type: "start-date-datepicker-material",
      icon: "fa fa-calendar-check-o",
      label: "Start date ",
      description: "Choose a date",
      placeholder: "Choose a date",
      className: "form-control",
      subtype: "text",
      regex: "",
      handle: true,
      parent: "",
      relatedTo: "",
      category: "angular-material-datepicker",
      material: "true",
      errorText: "",
      visible: false
    },
    {
      type: "min-max-validation-datepicker-material",
      icon: "fa fa-maxcdn",
      label: "Min & Max validation",
      description: "Choose a date",
      placeholder: "Choose a date",
      className: "form-control",
      subtype: "text",
      regex: "",
      handle: true,
      parent: "",
      relatedTo: "",
      category: "angular-material-datepicker",
      material: "true",
      errorText: "",
      minDate: new Date(),
      maxDate: new Date(),
      visible: false
    },
    {
      type: "touch-ui-date-datepicker-material",
      icon: "fa fa-hand-pointer-o",
      label: "Touch UI",
      description: "Choose a date",
      placeholder: "Choose a date",
      className: "form-control",
      subtype: "text",
      regex: "",
      handle: true,
      parent: "",
      relatedTo: "",
      category: "angular-material-datepicker",
      material: "true",
      errorText: "",
      visible: false
    },
    {
      type: "open-method-date-datepicker-material",
      icon: "fa fa-fire",
      label: "Open",
      description: "Choose a date",
      placeholder: "Choose a date",
      className: "form-control",
      subtype: "text",
      regex: "",
      handle: true,
      parent: "",
      relatedTo: "",
      category: "angular-material-datepicker",
      material: "true",
      errorText: "",
      visible: false
    },
    {
      type: "datatable-material",
      icon: "fa fa-table",
      label: "Data Table",
      values: [
        {
          label: "Option 1",
          value: "option-1"
        },
        {
          label: "Option 2",
          value: "option-2"
        }
      ],
      displayedColumns: ["Position", "Name", "Weight", "Symbol"],
      parent: "",
      relatedTo: "",
      category: "angular-material-datatable",
      material: "true",
      visible: false
    }
  ];
  // #endregion end controls

  // #region start model
  model: any = {
    id: this.modelId,
    name: "",
    description: "",
    url: "",
    gridSystem: "col-12",
    theme: {
      modelId: this.modelId,
      bgColor: "ffffff",
      textColor: "555555",
      bannerImage: ""
    },
    tabs: [
      {
        id: 1,
        header: "Tab 1",
        modelId: this.modelId,
        accordions: [
          {
            id: 1,
            header: "Header 1",
            parentId: 1,
            fields: Array<field>(),
            modelId: this.modelId
          }
        ]
      }
    ]
  };
  // #endregion end controls

  //#region start manage Accordions
  clickHeader(id: any) {
    this.headerClicked = id;
  }

  addHeader() {
    this.model.tabs[this.selectedTabIndex].accordions.push({
      id: this.model.tabs[this.selectedTabIndex].accordions.length + 1,
      header: "Header ".concat(
        this.model.tabs[this.selectedTabIndex].accordions.length + 1
      ),
      parentId: this.modelId,
      fields: Array<field>()
    });
  }

  editHeader() {
    if (this.occordionHeaderValue != undefined) {
      this.model.tabs[this.selectedTabIndex].accordions[
        this.headerClicked
      ].header = this.occordionHeaderValue;
    }
  }
  //#endregion end manage Accordions

  //#region start manage Tabs
  selectedTab(selected: MatTabChangeEvent) {
    this.selectedTabIndex = selected.index;
    this.binded = true;
  }

  addTab() {
    this.model.tabs.push({
      id: this.model.tabs.length + 1,
      header: "Tab ".concat(this.model.tabs.length + 1),
      accordions: [
        {
          id: 1,
          header: "Header 1",
          parentId: this.modelId,
          fields: Array<field>()
        }
      ]
    });
  }

  editTab() {
    if (this.tabHeaderValue != undefined) {
      this.model.tabs[this.selectedTabIndex].header = this.tabHeaderValue;
    }
  }
  //#endregion end manage Tabs

  //#region start manage Grid-System
  radioChange(event: any) {
    this.model.gridSystem = event.value;
    this.binded = false;
  }
  //#endregion end manage Grid-System

  //#region start bind data-table
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  //#endregion end bind data-table

  //#region start dndDraggable
  onDragStart(event: DragEvent) {
    // console.log("drag started", JSON.stringify(event, null, 2));
  }

  onDragEnd(event: DragEvent) {
    //console.log("drag ended", JSON.stringify(event, null, 2));
  }

  onDraggableCopied(event: DragEvent) {
    //console.log("draggable copied", JSON.stringify(event, null, 2));
  }

  onDraggableLinked(event: DragEvent) {
    //console.log("draggable linked", JSON.stringify(event, null, 2));
  }

  onDragged(item: any, list: any[], effect: DropEffect) {
    if (effect === "move") {
      const index = list.indexOf(item);
      list.splice(index, 1);
    }
  }

  onDragCanceled(event: DragEvent) {
    //console.log("drag cancelled", JSON.stringify(event, null, 2));
  }

  onDragover(event: DragEvent) {
    // console.log("dragover", JSON.stringify(event, null, 2));
  }

  onDrop(event: DndDropEvent, list?: any[]) {
    if (list && (event.dropEffect === "copy" || event.dropEffect === "move")) {
      if (event.dropEffect === "copy")
        event.data.name = event.data.type + "-" + new Date().getTime();
      let index = event.index;
      if (typeof index === "undefined") {
        index = list.length;
      }
      list.splice(index, 0, event.data);
    }
  }

  removeField(i: any, data: any) {
    debugger;

    if (this.selectedTabIndex == undefined) {
      alert("this.selectedTabIndex undefined");
    }
    swal({
      title: "Are you sure?",
      text: "Do you want to remove this field?",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3f51b5",
      cancelButtonColor: "#ff4081",
      confirmButtonText: "Yes, remove!"
    }).then(result => {
      if (result.value) {
        this.model.tabs[this.selectedTabIndex].accordions.map(function(
          element
        ) {
          if (element.id == data.id) {
            element.fields.splice(i, 1);
          }
        });
      }
    });
  }
  //#endregion end dndDraggable

  //#region start add value to lookups
  addValue(values) {
    debugger;
    this.value = {
      id: values.length + 1,
      label: "",
      value: "",
      selected: false
    };
    values.push(this.value);
  }
  toggleSelected(changed, items) {
    items.forEach(function(item) {if (changed.id != item.id) item.selected = false});
    changed.selected = true;
  }

  //#endregion end add value to lookups

  //#region start validation controls

  toggleValue(item) {
    item.selected = !item.selected;
  }

  setMinDate(item: any) {
    item.minDate = new Date(item);
  }

  setMaxDate(item: any) {
    item.maxDate = new Date(item);
  }

  //#endregion end validation controls

  //#region start Submitted buttons
  reset(form: NgForm) {
    form.resetForm();
  }
  submit(item: any) {
    let valid = true;
    let validationArray = JSON.parse(JSON.stringify(this.model.fields));
    validationArray.reverse().forEach(field => {
      console.log(field.label + "=>" + field.required + "=>" + field.value);
      if (field.required && !field.value && field.type != "checkbox") {
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
      if (field.required && field.type == "checkbox") {
        if (field.values.filter(r => r.selected).length == 0) {
          swal("Error", "Please enterrr " + field.label, "error");
          valid = false;
          return false;
        }
      }
    });
    if (!valid) {
      return false;
    }
    console.log("Save", this.model);

    let input = new FormData();
    input.append("fields", JSON.stringify(this.model.fields));

    // input.append("formId", this.model._id);
    // input.append("fields", JSON.stringify(this.model.fields));
    this.http.post("http://localhost:50952/weatherforecast", input).subscribe(
      r => {
        console.log(r);
        swal("Success", "You have contact sucessfully", "success");
        this.success = true;
      },
      error => {
        swal("Error", error.message, "error");
      }
    );
  }
  //#endregion end Submitted buttons

  //#region start copy
  copy(item: any) {
    document.addEventListener("copy", (e: ClipboardEvent) => {
      e.clipboardData.setData("text/plain", JSON.stringify(item));
      e.preventDefault();
      document.removeEventListener("copy", null);
    });
    document.execCommand("copy");
    this.snackBar.open("json has been copied !!", " 🍰 ", {
      duration: 5000
    });
  }
  //#endregion end copy

  //#region start constructor
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {}
  //#endregion end constructor

  //#region start OnInit
  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.positions);
  }

  //#endregion end OnInit

  updateForm() {
    let input = new FormData();
    input.append("id", this.model._id);
    input.append("name", this.model.name);
    input.append("description", this.model.description);
    input.append("bannerImage", this.model.theme.bannerImage);
    input.append("bgColor", this.model.theme.bgColor);
    input.append("textColor", this.model.theme.textColor);
    input.append("fields", JSON.stringify(this.model.fields));

    // this.us.putDataApi('/admin/updateForm',input).subscribe(r=>{
    //   console.log(r);
    //   swal('Success','App updated successfully','success');
    // });
  }
}
