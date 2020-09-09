import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BottomNavItems } from '../nav-item';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss']
})
export class BottomNavComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();
  navItems = BottomNavItems;
  constructor() { }

  ngOnInit() {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}
