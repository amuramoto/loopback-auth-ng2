import { Component } from '@angular/core';
import { AuthService } from '../AuthService/auth.service';

@Component ({
	selector: 'loopback-login',
	template: `
		<div class="login-box">
		  <div class="logo"><img src="/img/lb-logo.png" /></div>
		  <div class="form-container">
			  <div class="field-label">Username/Email</div> 
			  <input [(ngModel)]="username" />
			  <div class="field-label" type="password">Password</div>
			  <input [(ngModel)]="password" />
			  <button (click)="login()">Login</button>	  
			</div>
		</div>
	`,
	styles: [`
		.login-box {
			background: #F3FFF3;
			border: #A2A2A2 1px solid;
			border-radius: 2px;
			width: 250px;
			height: 250px;
			margin: 100px auto;
			padding: 40px;	
		}

		.logo {
			margin: 0 auto 25 auto;
			width: 50px;
		}

		.form-container {
			margin: 0 auto;
			width: 175px;
		}

		.field-label {
			margin-bottom: 5px;
		}

		input	{
			margin-bottom: 15px;
			width: 100%;
			height: 25px;	
		}

		button {
			width: 75px;
		  padding: 7px;
		  background-color: #009800;
		  border: #005200 1px solid;
		  color: #FFFFFF;
		  font-size: 14px;
		  margin-top: 10px;
		  margin-left: 50px;
		  border-radius: 3px;
		}
	`]
})

export class LoginComponent {
	
	username: string;
	password: string;

	constructor (private _LBAuth: AuthService) {}
	
	
}