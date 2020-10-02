import { Component, OnInit } from '@angular/core';
import {
  faHome,
  faFilter,
  faHistory,
  faBookmark,
  faHeart,
  faList,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar-left',
  templateUrl: './sidebar-left.component.html',
  styleUrls: ['./sidebar-left.component.scss'],
})
export class SidebarLeftComponent implements OnInit {
  faHome = faHome;
  faFilter = faFilter;
  faHistory = faHistory;
  faBookmark = faBookmark;
  faHeart = faHeart;
  faList = faList;
  faSearch = faSearch;
  constructor() {}

  ngOnInit(): void {}
}
