import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [LoginService]
})
export class HomeComponent implements OnInit {
  title = 'Angular Bootstrap Example';
  txtUsername;
  txtPassword;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }
  
  login() {
	var response = this.loginService.login(this.txtPassword, this.txtPassword);
	if(response) {
		console.log("Login Successful.");
	} else {
		console.log("Login Failed.");
	}
  }
}
