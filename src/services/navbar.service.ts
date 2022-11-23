import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor() { }

  //---- burger menu ----
  public setSettingsNav(){
    let menu = document.querySelector('.burger-menu') as HTMLDivElement;
    menu.style.display = "none";
  }

  private setMenuBurger(){
    let body = document.querySelector('.maindiv') as HTMLDivElement;
    let menu = document.querySelector('.burger-menu') as HTMLDivElement;
    let burger = document.querySelector('.hamburger') as HTMLDivElement;
    if (burger.classList.contains('is-active')){
        body.style.display = "none";
        menu.style.display = "block";
    }else{
        body.style.display = "block";
        menu.style.display = "none";
    }
  }

  public hamburgerToggle(){
    let local = this;
    let hamburger = document.querySelector('.hamburger') as HTMLDivElement;
    hamburger.addEventListener('click', function () {
        this.classList.toggle('is-active');
        local.setMenuBurger();
    });
  }
  //---- end burger menu ----

  public setThemeSettings(){
    localStorage.setItem('theme', 'light');
    this.setTheme();
  }

  public setBurgerMenuSettings(){
    let local = this;
    let toggle = document.querySelectorAll('.toggle-checkbox') as NodeListOf<HTMLInputElement>;
    toggle.forEach(e => {
        e.checked = true;
    });
  
    toggle.forEach(e => {
        e.addEventListener('click', function () {
            console.log("click");
            local.setTheme();
            if(e.checked){
              local.checkToggleSwicth(true, toggle);
            }else{
              local.checkToggleSwicth(false, toggle);
            }
        });
    });
  }

  public checkToggleSwicth(isActivate: boolean, toggle: NodeListOf<HTMLInputElement>){
      toggle.forEach(e => {
          e.checked = isActivate;
      });
  }

  public setTheme(){
      if (localStorage.getItem('theme') == "light"){
          localStorage.setItem('theme', 'dark');
          document.documentElement.classList.add("dark");
      } else {
          localStorage.setItem('theme', 'light');
          document.documentElement.classList.remove("dark"); 
      }
      console.log(localStorage.getItem('theme'));
  }

  /**
   * Cette fonction permet d'enlever le menu burger lorsque la taille de la fênetre est supérieur à 970px
   */
  public setMenuWithWidth(){
      addEventListener('resize', function () {
          let body = document.querySelector('.maindiv') as HTMLDivElement;
          let menu = document.querySelector('.burger-menu') as HTMLDivElement;
          let hamburger = document.querySelector('.hamburger') as HTMLDivElement;
          if (window.innerWidth > 970){
              body.style.display = "block";
              menu.style.display = "none";
              hamburger.classList.remove('is-active');
          }
      });
  } 
}
