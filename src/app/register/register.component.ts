import { Component } from '@angular/core';
import { BuilderProfileService } from '../builder-profile.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  email!: string;
  password!: string;
  confirmPassword!: string;

  constructor(private re: BuilderProfileService) {
  }

  registerNew() {
    this.re.newRegister(this.email, this.password, this.confirmPassword).subscribe(
      r => {
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
        alert('Registration successful');
      },
      e => alert(e.message));
  }

}
