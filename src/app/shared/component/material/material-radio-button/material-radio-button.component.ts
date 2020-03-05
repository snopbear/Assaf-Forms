import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";
import { AbstractedService } from "src/app/shared/core/_services/abstracted/abstracted.service";

@Component({
  selector: "material-radio-button",
  templateUrl: "./material-radio-button.component.html",
  styleUrls: ["./material-radio-button.component.css"]
})
export class MaterialRadioButtonComponent implements OnInit {
  @Input() srvUrl: string;
  @Input() placeholder: string;
  @Input() name: string;

  options$: Observable<{ id: any; name: string }[]>;
  constructor(private abstractedService: AbstractedService) {}
  ngOnInit() {
    this.options$ = this.abstractedService.getRoot(this.srvUrl);
  }
}
