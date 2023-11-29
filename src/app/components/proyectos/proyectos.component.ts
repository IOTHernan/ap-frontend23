import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProyecto } from 'src/app/interfaces/iproyecto';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
	selector: 'app-proyectos',
	templateUrl: './proyectos.component.html',
	styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
	miPortfolio: any;
	modoEdicion: boolean= false;
	modoNuevoRegistro: boolean= false;
	deleteItem: boolean = false;
	form: FormGroup;

	constructor(private portfolioService: PortfolioService) {
		this.form = new FormGroup({
			titulo: new FormControl(['', [Validators.required, Validators.maxLength(2)]]),
			descripcion: new FormControl(['', [Validators.required, Validators.maxLength(2)]]),
			imagen: new FormControl(['', [Validators.required, Validators.maxLength(2)]])
		})
	}

	ngOnInit(): void {
		console.log("PROYECTOS");
		this.portfolioService.obtenerDatosProyectos().subscribe(data => {
			console.log("Datos Personales: " + JSON.stringify(data));
			this.miPortfolio = data;
			console.log(this.miPortfolio);
		});

	}

	selectItem(item: any) {
		console.log("------------");
		console.log(item);
		console.log("------------");
	}
	añadirProyecto(): void {
		this.modoNuevoRegistro = true;
		this.modoEdicion = true;
	}
	editarProyecto(item:any) {}
	deleteProyecto(item:any) {
		this.deleteItem=true;
	}
}
