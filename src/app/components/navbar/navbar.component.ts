import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl:'navbar.component.html', 
  styles: []
})
export class NavbarComponent {
  menuOpen = false;
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
