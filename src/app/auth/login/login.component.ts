import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from '../auth-service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [ 
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  model = {
    email: '',
    password: ''
  };
constructor(private _authService: UserService){}
  onSubmit() {
    console.log('Login form submitted:', this.model);
    this._authService.loginUser(this.model).subscribe(
      (res) => {console.log(res),localStorage.setItem("CONFIG",res.token)},
    (err)=> console.log(err))
  }

}
