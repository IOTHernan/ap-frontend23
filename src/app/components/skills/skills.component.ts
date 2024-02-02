import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent  implements OnInit {
  miPortfolio: any;
  @Input() isLogged!: boolean;
  @Input() idPerso!: number;
  @Input() listaSoftSkills: [] = [];
  constructor(private portfolioService: PortfolioService) {
    
  }
  ngOnInit(): void {
    this.portfolioService.obtenerDatos().subscribe(data => {
      console.log(data);
      
      this.miPortfolio=data.skills;
      console.log(this.miPortfolio);
      
    });
    
  }

  selectItem(item:any) {
    console.log(item);
    
  }
}