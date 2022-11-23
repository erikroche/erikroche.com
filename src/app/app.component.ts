import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service'; 
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public age: number = 0;

  constructor(private appService: AppService, private navbarService: NavbarService) {}

  ngOnInit() {
    this.age = this.appService.getAge();
    this.navbarService.setMenuWithWidth();
    this.navbarService.setBurgerMenuSettings();
    this.navbarService.setThemeSettings();
    this.navbarService.setSettingsNav();
  }
}
