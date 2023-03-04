import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { NavbarService } from './services/navbar.service';
import {HomeService} from "./home/home.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  constructor(private navbarService: NavbarService) {}

  ngOnInit() {
    this.navbarService.setMenuWithWidth();
    this.navbarService.setBurgerMenuSettings();
    this.navbarService.setThemeSettings();
    this.navbarService.setSettingsNav();
    this.navbarService.hamburgerToggle();
  }
}
