import { Component } from '@angular/core';

import { MenuProductsComponent } from '../menu-products/menu-products.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  showMenu = false;
  showNavBarMenu = false;

  onMouseEnter() {
    this.showMenu = true;
    console.log('enter');
  }

  onMouseOut() {
    this.showMenu = false;
    console.log('out');
  }

  showNavBar() {
    if (window.innerWidth <= 768) {
      let navBar = document.querySelector('.navbar');
      if (this.showNavBarMenu) {
        navBar?.setAttribute('style', 'display: none');
        this.showNavBarMenu=false;
      }else{
      navBar?.setAttribute('style', 'display: block');
      this.showNavBarMenu=true;
      }
    }
  }
}
