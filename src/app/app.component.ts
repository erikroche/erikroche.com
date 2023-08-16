import {Component, AfterViewInit } from '@angular/core';
import {NavbarService} from './services/navbar.service';
import {ThemeService} from "./services/theme.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {

  constructor(private navbarService: NavbarService, private themeService: ThemeService) {}

  ngAfterViewInit(): void {
    this.navbarService.setMenuWithWidth();
    this.navbarService.setBurgerMenuSettings(true);
    this.themeService.setThemeSettings();
    this.navbarService.setSettingsNav();
    this.navbarService.clickMenuEvent();
  }

  /** This method is called when the user click on the toggle switch and change the theme.
   * @param event The event of the click.
   */
  clickToggleSwicth(event: Event) {
    this.navbarService.clickToggleSwicth(event);
  }

  /** This method is called when the user click on the hamburger menu, it show or hide the menu. */
  clickHamburger() {
    this.navbarService.clickHamburger();
  }
}

