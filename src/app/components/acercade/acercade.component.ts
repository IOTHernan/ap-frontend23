import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
	selector: 'app-acercade',
	templateUrl: './acercade.component.html',
	styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
	miPortfolio: any;
	constructor(private portfolioService: PortfolioService) {
    
	}

	ngOnInit(): void {
		console.log("Acerdade");
		this.portfolioService.obtenerDatos().subscribe(data => {
			console.log(data);
			
			this.miPortfolio=data.aboutme;
			console.log(this.miPortfolio);
			
		  });
		  
	

	}
}
