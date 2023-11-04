import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{
  miPortfolio: any;
  constructor(private portfolioService: PortfolioService) {
    
  }
  ngOnInit(): void {
    this.portfolioService.obtenerDatos().subscribe(data => {
      console.log(data);
      
      this.miPortfolio=data.educacion;
      console.log(this.miPortfolio);
      
    });
    
  }
}