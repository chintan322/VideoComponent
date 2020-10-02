import { Component, OnInit, OnDestroy } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  faUserCircle = faUserCircle;
  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {}
}
