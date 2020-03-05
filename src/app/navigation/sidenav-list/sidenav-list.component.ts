import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
  selector: "app-sidenav-list",
  templateUrl: "./sidenav-list.component.html",
  styleUrls: ["./sidenav-list.component.css"]
})
export class SidenavListComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();
  authSubscription: Subscription;

  constructor() {}

  ngOnInit() {}

  onClose() {
    this.closeSidenav.emit();
  }


}
