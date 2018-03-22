import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

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
  constructor(private loginService: LoginService,
				private router: Router) { }

  ngOnInit() {
  }
  
  login() {
	var response = this.loginService.login(this.txtPassword, this.txtPassword);
	if(response) {
		console.log("Login Successful.");
		this.router.navigate(['dashboard'])
	} else {
		console.log("Login Failed.");
	}
  }
}
