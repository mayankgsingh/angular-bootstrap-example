import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  txtUsername;
  txtPassword;
  constructor() { }
  
  login(txtUsername, txtPassword) {
	console.log("Input data: " + txtPassword + "/" + txtPassword);
	if(txtPassword == "admin" && txtPassword == "admin") {
		return true;
	} else {
		return false;
	}
  }
}
