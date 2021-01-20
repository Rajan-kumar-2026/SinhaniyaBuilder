import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SinghaniyaBuilder';
  isLoggedIn: boolean = !!localStorage.getItem('token');

  logout() {
    localStorage.clear();
    window.location.reload();
  }
}
