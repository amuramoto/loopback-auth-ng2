import { Component } from 'angular2/core';
import { LoobackAuthService } from '../services/loopback-auth.service';

@Component ({
	selector: 'loopback-login',
	templateUrl: 'directives/loopback-login.html',
	styleUrls: ['directives/loopback-login.css']
})

export class LBLoginComponent {
	
	username: string;
	password: string;

	constructor (private _LBAuth: LoopbackAuthService) {}
	
	
}