import { EduDTO } from "./edu-dto";
import { ExpeDTO } from "./expe-dto";
import { HabBlandaDTO } from "./hab-blanda-dto";
import { HabTecnicaDTO } from "./hab-tecnica-dto";
import { PersoDTO } from "../services/persoDTO";
import { ProyeDTO } from "./proye-dto";

export class PortfolioDTO {

    persona: PersoDTO;
    educaciones: EduDTO[]; 
    experiencias: ExpeDTO[];
    habTecnicas: HabTecnicaDTO[];
    habBlandas: HabBlandaDTO[];
    proyectos: ProyeDTO[];

    constructor(
                persona: PersoDTO,
                educaciones: EduDTO[], 
                experiencias: ExpeDTO[],
                habTecnicas: HabTecnicaDTO[],
                habBlandas: HabBlandaDTO[],
                proyectos: ProyeDTO[]){ 
        
        this.persona = persona;
        this.educaciones = educaciones;
        this.experiencias = experiencias;
        this.habTecnicas = habTecnicas;
        this.habBlandas = habBlandas;
        this.proyectos = proyectos;
    }
}