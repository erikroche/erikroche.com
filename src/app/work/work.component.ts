import {Component, OnInit} from '@angular/core';
import {Project} from "../models/Project";
import {Languages} from "../enums/Languages";
import {Language} from "../models/Language";
import {LanguagesLevel} from "../enums/LanguageLevel";

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html'
})
export class WorkComponent implements OnInit{
  public projects: Project[] = [];
  public languages: Language[] = []

  ngOnInit() {
    this.setProjects();
    this.setLanguages();
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
      [Languages.Angular, Languages.ThreeJS, Languages.TailwindCSS, Languages.TypeScript],
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
    const objectDetection = new Project(
      5,
      'Object Detection',
      'Machine learning project make in an university diploma in computer science. It allows to recognize objects (pedestrians and vehicles) in an urban environment using different technologies.',
      [Languages.Python, Languages.TenserFlow, Languages.Keras],
      'https://github.com/ZIRTR0X/Project-Object-Detection'
    );
    const cinapp = new Project(
      5,
      'CineApp',
      'CineApp is an Android application project dedicated to movie lovers. It allows users to view information about recent and popular movies, add them to their favourites list and rate them.',
      [Languages.AndroidStudio, Languages.Kotlin, Languages.API],
      'https://github.com/ZIRTR0X/Cinapp'
    );
    this.projects.push(mineSweeper, portfolio, cinapp, connect4, objectDetection, fruitClassification);
  }

  public setLanguages() {
    const typescript = new Language(
      1,
      Languages.TypeScript,
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      "I use it in my work-study project, and in my personal projects.",
      LanguagesLevel.Advanced
    );
    const couchDB = new Language(
      2,
      Languages.CouchDB,
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/couchdb/couchdb-original.svg',
      "I use it in my work-study project.",
      LanguagesLevel.Novice
    );
    const ionic = new Language(
      3,
      Languages.Ionic,
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg',
      "I use it in my work-study project.",
      LanguagesLevel.Novice
    );
    const angular = new Language(
      4,
      Languages.Angular,
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      "I use it in my work-study project, and in my personal projects.",
      LanguagesLevel.Intermediate
    );
    const git = new Language(
      5,
      Languages.Git,
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      "I use it in my personal project, school project and my work-study project.",
      LanguagesLevel.Advanced
    );
    const html = new Language(
      6,
      Languages.HTML,
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      "I use js in most of my projects.",
      LanguagesLevel.Advanced,
    );
    const css = new Language(
      7,
      Languages.CSS,
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      "I use js in most of my projects.",
      LanguagesLevel.Intermediate,
    );
    const javascript = new Language(
      8,
      Languages.JavasScript,
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      "I use js in most of my projects.",
      LanguagesLevel.Advanced,
    );
    const java = new Language(
      9,
      Languages.Java,
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      "I use it especially for school projects.",
      LanguagesLevel.Advanced,
    );
    const csharp = new Language(
      10,
      Languages.CSharp,
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
      "I use it especially for school projects.",
      LanguagesLevel.Intermediate,
    );
    const c = new Language(
      11,
      Languages.C,
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
      "I use it especially for school projects.",
      LanguagesLevel.Intermediate,
    );
    this.languages.push(typescript, couchDB, ionic, angular, git, html, css, javascript, java, csharp, c);
  }
}
