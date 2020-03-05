import { Component, OnInit, Input } from "@angular/core";
import { AbstractedService } from "src/app/shared/core/_services/abstracted/abstracted.service";
import { Observable } from "rxjs";

@Component({
  selector: "html-check-box-put-dynamic",
  templateUrl: "./html-check-box-put-dynamic.component.html",
  styleUrls: ["./html-check-box-put-dynamic.component.css"]
})
export class HtmlCheckBoxPutDynamicComponent implements OnInit {
  selectedValues: number[] = [];
  itemsOf = [];

  @Input() srvUrl: string;
  @Input() name?: string;
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() relatedTo?: string;
  @Input() required?: boolean;
  @Input() visible?: boolean;
  @Input() items?: { id: any; name: string }[];
  @Input() selected?: number[] = [];
  options$: Observable<{ id: any; name: string }[]>;
  constructor(private abstractedService: AbstractedService) {}
  ngOnInit() {
    this.abstractedService.getRoot(this.srvUrl).subscribe(
      (response: any[]) => {
        debugger;

        response.forEach(
          function(element) {
            debugger;
            this.selected.forEach(
              function(select) {
                debugger;
                if (element.id === select) {
                  element.selected = true;
                }
              }.bind(this)
            );
            this.itemsOf.push(element);
          }.bind(this)
        );
      },
      err => {
        console.log(err);
      }
    );
    // debugger;
    // console.log(this.selected);
  }

  onChange(item: any, items: any) {
    debugger
    item.selected = !item.selected;
    this.selectedValues = [];
    items.forEach(
      function(elementSelected) {
        debugger;
        if (elementSelected.selected == true) {
          this.selectedValues.push(elementSelected.id);
        }
      }.bind(this)
    );
  }
}
