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
      6,
      'Object Detection',
      'Machine learning project make in an university diploma in computer science. It allows to recognize objects (pedestrians and vehicles) in an urban environment using different technologies.',
      [Languages.Python, Languages.TenserFlow, Languages.Keras],
      'https://github.com/ZIRTR0X/Project-Object-Detection'
    );
    const cinapp = new Project(
      7,
      'CineApp',
      'CineApp is an Android application project dedicated to movie lovers. It allows users to view information about recent and popular movies, add them to their favourites list and rate them.',
      [Languages.AndroidStudio, Languages.Kotlin, Languages.API],
      'https://github.com/ZIRTR0X/Cinapp'
    );
    const tarotScoreur = new Project(
      8,
      'Tarot Scoreur',
      'The Tarot Scoreur application allows during your tarot games to automatically count the points of all the players in the game. With this application you can play online with your friend or play locally at your home !',
      [Languages.CSharp, Languages.API],
      'https://github.com/ZIRTR0X/TarotScoreur'
    );
    const AverageCalculator = new Project(
      9,
      'Average calculator',
      'This project is an average calculator for students allowing to calculate their average according to the coefficients of each Teaching Units and the marks obtained in each course.',
      [Languages.SWIFT],
      'https://github.com/ZIRTR0X/AverageCalculator'
    );
    const MealGenius = new Project(
      9,
      'MealGenius',
      'MealGenius is a React Native mobile application that allows you to find meals based on the ingredients you have. You can also add recipes to your favorites and view them at any time.',
      [Languages.React, Languages.Expo, Languages.Paper, Languages.API],
      'https://github.com/ZIRTR0X/MealGenius'
    );
    const MealGeniusAPI = new Project(
      9,
      'MealGenius API',
      'This is the MealGenius App API. It is a REST API made with Quarkus and MongoDB.',
      [Languages.Java, Languages.Quarkus, Languages.MangoDB],
      'https://github.com/ZIRTR0X/MealGeniusAPI'
    );
    
    this.projects.push(portfolio, MealGenius, MealGeniusAPI, mineSweeper, AverageCalculator, cinapp);
  }

  public setLanguages() {
    const python = new Language(
      1,
      Languages.Python,
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      "Python is my preferred scripting language. I use it in a variety of projects, including machine learning and web scraping projects.",
      LanguagesLevel.Advanced
    );
    const java = new Language(
      9,
      Languages.Java,
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      "I use Java mainly to create efficient and robust backend apps, leveraging Spring and OOP principles for enhanced development.",
      LanguagesLevel.Advanced,
    );
    const nodejs = new Language(
      10,
      Languages.NodeJS,
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      "I use NodeJS to create fullstack apps, utilising Express and Nginx to create scalable websites just like this one!",
      LanguagesLevel.Intermediate,
    );
    const mySQL = new Language(
      2,
      Languages.MySQL,
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      "Experienced in designing and managing MySQL databases within Docker containers to ensure scalable data storage solutions.",
      LanguagesLevel.Intermediate
    );
    const git = new Language(
      5,
      Languages.Git,
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      "I use Git almost everday for managing my personal projects. I also used it in my internship.",
      LanguagesLevel.Advanced
    );
    const React = new Language(
      13,
      Languages.React,
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      "Skilled in developing responsive web applications using React. Mostly used this during my internship.",
      LanguagesLevel.Intermediate
    );
    const angular = new Language(
      4,
      Languages.Angular,
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      "I picked this up due to it's popularity and ease of use. I use it for this very website.",
      LanguagesLevel.Novice
    );
    const docker = new Language(
      11,
      Languages.Docker,
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      "I have used docker in both personal and professional projects. I use it to containerize and scale my applications.",
      LanguagesLevel.Intermediate
    );
    const javascript = new Language(
      8,
      Languages.JavasScript,
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      "I use JavaScript in most of my projects, both for work and personal.",
      LanguagesLevel.Advanced,
    );
    const MongoDB = new Language(
      6,
      Languages.MongoDB,
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      "I have been experiementing with MongoDB for a while now. I use it in my personal projects.",
      LanguagesLevel.Beginner,
    );
    const html = new Language(
      6,
      Languages.HTML,
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      "I use HTML in most of my projects.",
      LanguagesLevel.Advanced,
    );
    const css = new Language(
      7,
      Languages.CSS,
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      "I use CSS in most of my projects.",
      LanguagesLevel.Intermediate,
    );
    this.languages.push(python, java, nodejs, mySQL, git, React, angular, docker, MongoDB, javascript, html, css);
  }
}
