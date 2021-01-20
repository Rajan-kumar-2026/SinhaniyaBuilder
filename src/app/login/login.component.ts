import { Component } from '@angular/core';
import { BuilderProfileService } from '../builder-profile.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userName!: string;
  password!: string;

  constructor(private bs: BuilderProfileService) { }

  login() {
    this.bs.login(this.userName, this.password)
    .subscribe(t => {
      localStorage.setItem('token', t.access_token);
      window.location.reload();
    })
  }
}
