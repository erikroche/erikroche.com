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
    const erikrocheonline = new Project(
      1,
      'erikroche.online',
      'Taking the backend I built from an earlier project, I implemented a load balanced website built with Nginx and Docker with a simple CI/CD pipeline. Added an Angular and Typescript front-end',
      [Languages.Docker, Languages.TypeScript, Languages.Angular, Languages.HTML],
      'https://github.com/erikroche/erikroche.online',
    );
    const gradlesqlvalidator = new Project(
      2,
      'Gradle SQL Validator',
      'This was a tool I built during my Internship at Travelport. It was a Gradle plugin that would eliminate syntax errors in our team\'s SpringBoot Back-end. It was built using Java and Groovy.',
      [Languages.Groovy, Languages.Java],
      'https://github.com/erikroche/gradle-sql-validator',
    );
    const gpt4less = new Project(
      5,
      'GPT 4 Less',
      'A self-hosted alternative to OpenAI\'s GPT-3.5 and GPT-4. This allows anyone with an Open AI account to use the GPT-3.5/4 API without having to pay $20/month. It is built with Node.js and Express.',
      [Languages.NodeJS, Languages.JavaScript, Languages.HTML],
      'https://github.com/erikroche/gpt-4-less',
    );
    const readmegenerator = new Project(
      6,
      'Readme Generator',
      'A project I build over a weekend to help me generate README.md files for my projects. It is built with Python and uses the OpenAI API to generate the descriptions.',
      [Languages.Python],
      'https://github.com/erikroche/readme-generator',
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
    
    this.projects.push(erikrocheonline, gradlesqlvalidator, gpt4less, readmegenerator, );
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
      Languages.JavaScript,
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
