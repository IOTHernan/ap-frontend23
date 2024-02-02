import { IEducacion } from "../interfaces/ieducacion";
import { IExperiencia } from "../interfaces/iexperiencia";
import { ISkill } from "../interfaces/iskill";
import { IHardSkills } from "../interfaces/ihardskills";
import { IPersonas } from "../interfaces/ipersonas";
import { IProyectos } from "../interfaces/iproyectos";

export class IPortfolio {

    persona: IPersonas[];
    educaciones: IEducacion[]; 
    experiencias: IExperiencia[];
    skills: ISkill[];
    hardskills: IHardSkills[];
    proyectos: IProyectos[];

    constructor(
                persona: IPersonas[],
                educaciones: IEducacion[], 
                experiencias: IExperiencia[],
                skills: ISkill[],
            	hardskills: IHardSkills[],
                proyectos: IProyectos[]){
        
        this.persona = persona;
        this.educaciones = educaciones;
        this.experiencias = experiencias;
        this.skills = skills;
        this.hardskills = hardskills;
        this.proyectos = proyectos;
    }
}