import { Component } from '@angular/core';
import { SousMenu } from 'src/app/sous-menu';

@Component({
  selector: 'app-menu-products',
  templateUrl: './menu-products.component.html',
  styleUrls: ['./menu-products.component.scss']
})
export class MenuProductsComponent {

 sousMenuList : SousMenu[] = [
  { icon: '/assets/Spense_Icon.svg', title: 'Spence', content: 'Spence is a landing page for writers. Great for practicing absolute positioning and flex layouts.'},
  { icon: '/assets/Fiber_Icon.svg', title: 'Fiber Landing Page', content: 'An online porfolio generator. Great to practicing flex/grid layouts and absolutepositioning.'},
  { icon: '/assets/Gradie_Icon.svg', title: 'Gradie', content: 'gradie is a simple sign up page. Great for practicing centering layouts.'}
 ]


}
