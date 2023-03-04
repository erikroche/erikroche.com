import {Component, OnInit} from '@angular/core';
import {AppService} from "../app.service";
import {NavbarService} from "../services/navbar.service";
import {HomeService} from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
  public age: number = 0;

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.age = this.homeService.getAge();
  }
}
