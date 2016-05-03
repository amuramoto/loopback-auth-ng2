import { Component } from '@angular/core';
import { AuthService } from '../services/loopback-auth.service';

@Component ({
	selector: 'loopback-login',
	templateUrl: 'directives/loopback-login.html',
	styleUrls: ['directives/loopback-login.css']
})

export class LoginComponent {
	
	username: string;
	password: string;

	constructor (private _LBAuth: AuthService) {}
	
	
}