import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class AuthService {
	constructor(private _http: Http) {

	}

	login(username: string, password: string) {
		var credentials = {
			"username": username,
			"password": password
		};
		this._http.post('', JSON.stringify(credentials))
			.map(
				(res: Response) => res,
				(err: string) => 'login failed'
			);
	}
}