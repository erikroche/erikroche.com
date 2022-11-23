import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public age: number = 0;

  constructor(private service: AppService) {}

  ngOnInit() {
    this.age = this.service.getAge();
  }
}
