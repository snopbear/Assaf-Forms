import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractedService } from 'src/app/shared/core/_services/abstracted/abstracted.service';

@Component({
  selector: 'material-select',
  templateUrl: './material-select.component.html',
  styleUrls: ['./material-select.component.css']
})
export class MaterialSelectComponent implements OnInit {
  @Input() srvUrl: string;
  @Input() placeholder: string;
  @Input() name: string;
  options$: Observable<{ id: any; name: string }[]>;

  constructor(private abstractedService: AbstractedService) {}
  ngOnInit() {
    debugger
    this.options$ = this.abstractedService.getRoot(this.srvUrl);
  }

}
