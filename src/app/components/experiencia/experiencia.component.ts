import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
	miPortfolio: any;
	constructor(private portfolioService: PortfolioService) {
    
	}
	ngOnInit(): void {
	  this.portfolioService.obtenerDatos().subscribe(data => {
		console.log(data);
		
		this.miPortfolio=data.experiencia;
		console.log(this.miPortfolio);
		
	  });
	  
	}
}
