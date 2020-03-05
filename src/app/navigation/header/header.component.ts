import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {

  @Output() sidenavToggle = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  onToggleSideNav() {
    this.sidenavToggle.emit();
  }
}
