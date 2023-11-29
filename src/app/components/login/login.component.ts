import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { Router } from '@angular/router';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	form: FormGroup;
	
	constructor(
		private formBuilder: FormBuilder, 
		private autenticacionService: AutenticacionService, 
		private router: Router) {
		this.form = this.formBuilder.group({
			//email: ['', [Validators.required, Validators.email]],
			nombreUsuario: ['', [Validators.required, Validators.minLength(2)]],
			password: ['', [Validators.required, Validators.minLength(8)]]
			})
		}
	
	ngOnInit() {
		console.log('[ln27] '+'Login');
	}

	//get Email(){
	//  return this.form.get('email');
	//}

	get nombreUsuario() {
		return this.form.get('nombreUsuario')
	}

	get Password() {
		return this.form.get('password');
	}

	onLogin(event: Event) {
		this.autenticacionService.login(this.form.value).subscribe(data => {
			console.log("OnLogin");
			
			console.log("Archivo Login Component , seteo del token: ", data.token);
			sessionStorage.setItem('token', data.token);
			this.autenticacionService.setToken(data.token);
			console.log("Autenticación: ",data.token);
			console.log("This router navigator:", this.router.url);

			this.router.navigate(['/portfolio']);
			console.log("This router navigator:", this.router.url);
			
		});
	}

}
