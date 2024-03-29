import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio';

@Component({
	selector: 'app-softskills',
	templateUrl: './softskills.component.html',
	styleUrls: ['./softskills.component.css']
})
export class SoftskillsComponent implements OnInit {
	miPortfolio: any;
	nivelS: string | undefined;
	constructor(private portfolioService: PortfolioService) {}
	
	ngOnInit(): void {
		this.portfolioService.obtenerDatos().subscribe(data => {
			console.log(data);

			this.miPortfolio = data.softskills;
			console.log(this.miPortfolio);
		});
	}

	selectItem(item: any) {
		console.log("Item SoftSkills");
		
		console.log(item);

	}
}
