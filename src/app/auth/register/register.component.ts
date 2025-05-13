import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { UserService } from '../auth-service';
import { Router } from '@angular/router';
import { MatDialogContent } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,
    MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule,CommonModule,MatDialogContent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  // registerForm : FormGroup = new FormGroup({
  //   firstName: new FormControl(null,Validators.required),
  //   lastName: new FormControl(null,Validators.required),
  //   email: new FormControl(null,Validators.required),
  //   passWord: new FormControl(null,[Validators.required,Validators.minLength(6)])


  // });
  registerForm: any;

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      userName: [null, Validators.required],
    //  lastName: ['', Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  constructor(private fb: FormBuilder,private _authService: UserService,
              private _router: Router
  ) { }
  onSubmit(): void {
    if (this.registerForm.valid) {
      alert(JSON.stringify(this.registerForm.value, null, 2));
      this._authService.registerUser(this.registerForm.value).subscribe(
        (res)=> {console.log(res),this._router.navigate([''])},
          (err)=>{console.log(err)
        }
      )
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

}
