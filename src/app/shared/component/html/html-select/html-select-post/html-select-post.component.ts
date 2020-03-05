import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractedService } from 'src/app/shared/core/_services/abstracted/abstracted.service';

@Component({
  selector: 'html-select-post',
  templateUrl: './html-select-post.component.html',
  styleUrls: ['./html-select-post.component.css']
})
export class HtmlSelectPostComponent implements OnInit {
  selectedValue;
  @Input() srvUrl: string;
  @Input() name?: string;
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() relatedTo?: string;
  @Input() required?: boolean;
  @Input() visible?: boolean;
  options$: Observable<{ id: any; name: string }[]>;
  constructor(private abstractedService: AbstractedService) {}
  ngOnInit() {
    this.options$ = this.abstractedService.getRoot(this.srvUrl);
  }
}