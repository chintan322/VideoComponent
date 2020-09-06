import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-bookmark-model',
  templateUrl: './bookmark-model.component.html',
  styleUrls: ['./bookmark-model.component.scss'],
})
export class BookmarkModelComponent implements OnInit {
  @Input() time;
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}
