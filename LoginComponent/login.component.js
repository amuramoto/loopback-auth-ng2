System.register(['@angular/core', '../AuthService/auth.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, auth_service_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            let LoginComponent = class LoginComponent {
                constructor(_LBAuth) {
                    this._LBAuth = _LBAuth;
                }
            };
            LoginComponent = __decorate([
                core_1.Component({
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
                }), 
                __metadata('design:paramtypes', [auth_service_1.AuthService])
            ], LoginComponent);
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map