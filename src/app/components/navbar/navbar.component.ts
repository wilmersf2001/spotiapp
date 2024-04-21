import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  goBack() {
    console.log('go back');
    window.history.back();
  }

  goForward() {
    window.history.forward();
  }
}
