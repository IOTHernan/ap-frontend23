import { Component, OnInit } from '@angular/core';
import { IPersonas } from '../../interfaces/ipersonas';
import { IPortfolio } from 'src/app/interfaces/iportfolio';
import { AutenticacionService } from '../../services/autenticacion.service';
import { PortfolioService } from '../../services/portfolio';

@Component({
	selector: 'app-portfolio',
	templateUrl: './portfolio.component.html',
	styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent implements OnInit {

	miPortfolio: IPortfolio | undefined;

	isLogged: boolean = false;

	constructor(private portfolioServ: PortfolioService, private autenticacion: AutenticacionService) { }

	ngOnInit(): void {
		this.cargarVista();
		this.isLogged = !!this.autenticacion.getToken();
	}

	cargarVista() {
		this.portfolioServ.obtenerDatos().subscribe(data => { this.miPortfolio = data });
	}
}
