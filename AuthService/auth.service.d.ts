import { Http } from '@angular/http';
import 'rxjs/Rx';
export declare class AuthService {
    private _http;
    constructor(_http: Http);
    login(username: string, password: string): void;
}
