import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractedService } from 'src/app/shared/core/_services/abstracted/abstracted.service';

@Component({
  selector: 'html-check-box-post',
  templateUrl: './html-check-box-post.component.html',
  styleUrls: ['./html-check-box-post.component.css']
})
export class HtmlCheckBoxPostComponent implements OnInit {
  selectedValues: number[] = [];
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

  onChange(selected: any) {
    if (this.selectedValues.includes(selected)) {
      this.selectedValues = this.selectedValues.filter(
        item => item !== selected
      );
    } else {
      this.selectedValues.push(selected);
    }
  }
}
