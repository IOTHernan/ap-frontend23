import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import Swal from 'sweetalert2';

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
	rutaActiva: any;

	constructor(private router: Router, private autenticacionService: AutenticacionService) { }

	ngOnInit(): void {
		this.rutaActiva = this.router.url;
		console.log(this.rutaActiva);

		console.log("Ruta activa: ", this.router.url);

		switch (this.router.url) {
			case '/portfolio': {
				this.portfolioActive = true;
				this.registerActive = false;
				this.loginActive = false;
				break;
			}
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
		Swal.fire({
			title: '¿Cerrar sesión?',
			text: "",
			icon: 'warning',
			showCancelButton: true,
			cancelButtonColor: '#747174',
			cancelButtonText: 'Cancelar',
			confirmButtonColor: '#00b5ff',
			confirmButtonText: 'Confirmar'
		}).then((result) => {
			if (result.isConfirmed) {
				sessionStorage.removeItem('token');
				this.autenticacionService.removeToken();
				console.log("Token removido, notifico desde navbar ", sessionStorage.getItem('token'));
				this.router.navigate(['/login']);
			}
		}
		)
	}
}