import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";
import { AbstractedService } from "src/app/shared/core/_services/abstracted/abstracted.service";

@Component({
  selector: "html-check-box-put-static",
  templateUrl: "./html-check-box-put-static.component.html",
  styleUrls: ["./html-check-box-put-static.component.css"]
})
export class HtmlCheckBoxPutStaticComponent implements OnInit {
  selectedValues: number[] = [];
  itemsOf = [];
  @Input() name?: string;
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() relatedTo?: string;
  @Input() required?: boolean;
  @Input() visible?: boolean;
  @Input() items?: { id: any; name: string }[];
  @Input() selected?: number[] = [];

  constructor(private abstractedService: AbstractedService) {}
  ngOnInit() {
    console.log(this.selected);
    this.items.forEach(
      function(element) {
        this.selected.forEach(
          function(select) {
            if (element.value === select) {
              element.selected = true;
            }
          }.bind(this)
        );
        this.itemsOf.push(element);
      }.bind(this)
    );
  }

  onChange(item: any, items: any) {
    item.selected = !item.selected;
    this.selectedValues = [];
    items.forEach(
      function(elementSelected) {
        debugger;
        if (elementSelected.selected == true) {
          this.selectedValues.push(elementSelected.value);
        }
      }.bind(this)
    );
  }
}
