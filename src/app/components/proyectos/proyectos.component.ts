import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{
  miPortfolio: any;
  constructor(private portfolioService: PortfolioService) {
    
  }
  ngOnInit(): void {
    this.portfolioService.obtenerDatos().subscribe(data => {
      console.log(data);
      
      this.miPortfolio=data.proyectos;
      console.log(this.miPortfolio);
      
    });
    
  }

  selectItem(item:any) {
    console.log(item);
    
  } 
}
