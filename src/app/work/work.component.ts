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
      'https://zirtr0x.github.io/MinesWeeper_JS/'
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
      'This is this website. It is a personal project, which allows me to put forward my different projects whether they are academic or personal.',
      [Languages.Angular, Languages.ThreeJS, Languages.TailwindCSS, Languages.TypeScript, Languages.Firebase],
      'https://github.com/ZIRTR0X/PersonalWebsite',
      'https://julien-theme.dev/'
    );
    const fruitClassification = new Project(
      5,
      'AI Fruit Classification',
      'An AI made in python, which by giving it an image of a fruit, it will give us the name of this fruit. It\'s a school project made in second year of a two-year university diploma in computer science at UCA.',
      [Languages.Python, Languages.Sklearn, Languages.Pandas, Languages.Numpy, Languages.OpenCV],
      'https://github.com/ZIRTR0X/AI-Fruit-Classification'
    );
    this.projects.push(mineSweeper, portfolio, connect4, fruitClassification, bootstrap);
  }
}
