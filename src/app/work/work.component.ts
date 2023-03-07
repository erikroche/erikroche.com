import {Component, OnInit} from '@angular/core';
import {Project} from "../models/Project";
import {Languages} from "../enums/Languages";

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html'
})
export class WorkComponent implements OnInit{
  public projects: Project[] = [];

  constructor() {}
  ngOnInit() {
    this.setProjects();
  }

  public setProjects() {
    const mineSweeper = new Project(
      1,
      'MineSweeper',
      'A small personal project, consisting of the creation of a minesweeper coded exclusively in JavaScript.',
      [Languages.JavasScript, Languages.CSS, Languages.HTML],
      'https://github.com/ZIRTR0X/MinesWeeper_JS',
      'zirtr0x.github.io/MinesWeeper_JS/'
    );
    const bootstrap = new Project(
      2,
      'GOT Website',
      'This project was done in the first year of a two-year university diploma in computer science at UCA.',
      [Languages.Bootstrap, Languages.HTML],
      'https://github.com/ZIRTR0X/Projet-1A-Site-web-en-bootstrap',
      'https://zirtr0x.github.io/Projet-1A-Site-web-en-bootstrap/'
    );
    const connect4 = new Project(
      3,
      'Connect4',
      'This project is a Connect4 game. It is a school project for the professional degree in mobile application, at the University of Clermont Auvergne.',
      [Languages.SWIFT],
      'https://github.com/ZIRTR0X/SWIFT-Connect4'
    );
    const portfolio = new Project(
      4,
      'Portfolio',
      'This is this website.',
      [Languages.Angular, Languages.TailwindCSS, Languages.HTML, Languages.TypeScript],
      'https://github.com/ZIRTR0X/PersonalWebsite',
      'https://julien-theme.dev/'
    );
    this.projects.push(mineSweeper, bootstrap, connect4, portfolio);
  }
}
