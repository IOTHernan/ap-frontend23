import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
	loginActive: Boolean = true;
	registerActive: Boolean = false;
	portfolioActive: Boolean = false;
	pageNotFoundActive: Boolean = false;

	constructor(private router: Router, private autenticacionService: AutenticacionService) {}
	
	ngOnInit(): void {
		console.log("Ruta activa: ",this.router.url);
		switch(this.router.url) {
			case '/login': {
				this.loginActive = true;
				this.registerActive = false;
				this.portfolioActive = false;
				this.pageNotFoundActive = false;
				break;
			}
			case '/register': {
				this.registerActive = true;
				this.loginActive = false;
				break;
			}
			case '/portfolio': {
				this.portfolioActive = true;
				this.registerActive = false;
				this.loginActive = false;
				this.router.navigate(["/portfolio"]);
				break;
			}
			default: {
				this.pageNotFoundActive = true;
				this.portfolioActive = false;
				this.registerActive = false;
				this.loginActive = false;
				break;
			}
		}
	}
	logout( event: Event ) {
		event.preventDefault;
		sessionStorage.removeItem('token');
		this.autenticacionService.removeToken();
		console.log("Token removido con exito!", sessionStorage.getItem('token'));
		this.router.navigate(['/login']);
	 }
}
