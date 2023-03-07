import {Component, OnInit} from '@angular/core';
import {NavbarService} from './services/navbar.service';
import {Project} from "./models/Project";
import {Languages} from "./enums/Languages";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  public projects: Project[] = [];
  constructor(private navbarService: NavbarService) {}

  ngOnInit() {
    this.navbarService.setMenuWithWidth();
    this.navbarService.setBurgerMenuSettings();
    this.navbarService.setThemeSettings();
    this.navbarService.setSettingsNav();
    this.navbarService.hamburgerToggle();
  }
}
