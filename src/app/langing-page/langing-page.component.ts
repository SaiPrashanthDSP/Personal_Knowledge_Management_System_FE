import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';

@Component({
  selector: 'app-langing-page',
  imports: [MatDialogModule],
  templateUrl: './langing-page.component.html',
  styleUrl: './langing-page.component.css'
})
export class LangingPageComponent {

  constructor(private dialog: MatDialog){}

  openLogin() {this.dialog.open(LoginComponent,{width:"400px"})}
  openRegister() {this.dialog.open(RegisterComponent,{width:"400px",height:"auto",maxHeight:"90vh"})}

}
