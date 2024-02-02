/* import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEducacion } from '../interfaces/ieducacion';
import { IExperiencia } from '../interfaces/iexperiencia';
import { HabBlandaDTO } from '../services/hab-blanda-dto';
import { HabTecnicaDTO } from '../services/hab-tecnica-dto';
import { PersoDTO } from '../services/persoDTO';
import { IProyectos } from '../interfaces/iproyectos';
import { RespuestaDTO } from '../services/respuest-dto';

@Injectable({
  providedIn: 'root'
})

export class PortfolioService {

  //DATA JSON
  urlBackend: string = "src/assets/data/data.json";

  //esta url sale del @RequestMapping del Controller del backend "http://localhost:8080/"
//  urlBackend: string = "https://solesasia-portfolio.onrender.com/"

  constructor(private http:HttpClient) { }

  // LM Porfolio //

  public obtenerDatos():Observable<any>{
    return this.http.get<any>(this.urlBackend + 'portfolio');
  }

  public editarPersona(perso: PersoDTO) : Observable<RespuestaDTO>{
    return this.http.put<RespuestaDTO>(this.urlBackend + 'editarPersona', perso);
  }
  
  // ABM Educacion //

  public agregarEdu(edu:IEducacion): Observable<RespuestaDTO> {
    return this.http.post<RespuestaDTO>(this.urlBackend + 'nuevaEdu', edu);    
  }

  public editarEdu(id: number, edu: IEducacion): Observable<RespuestaDTO> {
    return this.http.put<RespuestaDTO>(this.urlBackend + `editarEdu/${id}`, edu);
  }

  public borrarEdu(id: number): Observable<any> {
    return this.http.delete<any>(this.urlBackend + `borrarEdu/${id}`);
  }

  // ABM Experiencia //

  public agregarExpe(expe: IExperiencia): Observable<RespuestaDTO> {
    return this.http.post<RespuestaDTO>(this.urlBackend + 'nuevaExpe', expe);    
  }

  public editarExpe(id: number, expe: IExperiencia): Observable<RespuestaDTO> {
    return this.http.put<RespuestaDTO>(this.urlBackend + `editarExpe/${id}`, expe);
  }

  public borrarExpe(id :number): Observable<any> {
    return this.http.delete<any>(this.urlBackend + `borrarExpe/${id}`);
  }

  // ABM Habilidad Tecnica //

  public agregarHabTecnica(habTec: HabTecnicaDTO): Observable<RespuestaDTO> {
    return this.http.post<RespuestaDTO>(this.urlBackend + 'nuevaHabTecnica', habTec);    
  }

  public editarHabTecnica(id: number, habTec :HabTecnicaDTO): Observable<RespuestaDTO> {
    return this.http.put<RespuestaDTO>(this.urlBackend + `editarHabTecnica/${id}`, habTec);
  }

  public borrarHabTecnica(id: number): Observable<any> {
    return this.http.delete<any>(this.urlBackend + `borrarHabTecnica/${id}`);
  }

  // ABM Habilidad Blanda //

  public agregarHabBlanda(habBlan: HabBlandaDTO): Observable<any> {
    return this.http.post<any>(this.urlBackend + 'nuevaHabBlanda', habBlan);    
  }

  public editarHabBlanda(id: number, habBlan :HabBlandaDTO): Observable<any> {
    return this.http.put<any>(this.urlBackend + `editarHabBlanda/${id}`, habBlan);
  }

  public borrarHabBlanda(id: number): Observable<any> {
    return this.http.delete<any>(this.urlBackend + `borrarHabBlanda/${id}`);
  }
 */
  // ABM Proyecto //
/* 
  public agregarProyecto(proye:IProyectos): Observable<any> {
    return this.http.post<any>(this.urlBackend + 'nuevoProyecto', proye);    
  }

  public editarProyecto(id :number, proye :IProyectos): Observable<any> {
    return this.http.put<any>(this.urlBackend + `editarProyecto/${id}`, proye);
  }

  public borrarProyecto(id :number): Observable<any> {
    return this.http.delete<any>(this.urlBackend + `borrarProyecto/${id}`);
  }

} */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ISkill } from '../interfaces/iskill';
import { IEducacion } from './../interfaces/ieducacion';
import { IExperiencia } from './../interfaces/iexperiencia';
import { IProyectos } from '../interfaces/iproyectos';
import { Iacercade } from '../interfaces/iacercade';
import { IPersonas } from '../interfaces/ipersonas';

@Injectable({
	providedIn: 'root'
})
export class PortfolioService {
//	url="http://localhost:8080";
	url = "./assets/data/data.json";
	// Headers para POST, PUT Y DELETE.
	headers = new HttpHeaders({
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*'
	});

	constructor(private http: HttpClient) { }
	
	obtenerDatos(): Observable<any> {
		// console.log('El servicio portfolio está corriendo');
		console.log(this.http.get<any>(this.url + 'acerca_de'));
		
		return this.http.get<any>("./assets/data/data.json");
	}

	// *********************************************************************
	// **************   |   METHOD'S GET ALL    | **************************
	// *********************************************************************

	obtenerDatosAcercaDe(): Observable<any> {
		return this.http.get<any>(this.url + 'acerca_de');
	}

	obtenerDatosEducacion(): Observable<IEducacion> {
		return this.http.get<IEducacion>(this.url + 'educacion');
	}

	obtenerDatosExperiencias(): Observable<IExperiencia> {
		return this.http.get<IExperiencia>(this.url + 'experiencias');
	}

	obtenerDatosProyectos(): Observable<IProyectos> {
		return this.http.get<IProyectos>(this.url + 'proyectos');
	}

	obtenerDatosSkills(): Observable<ISkill> {
		return this.http.get<ISkill>(this.url + 'skills');
	}

	// *********************************************************************
	// **************   |   METHOD'S GET ONE    | **************************
	// *********************************************************************

	obtenerOneDatosAcercaDe(id: number): Observable<any> {
		return this.http.get<any>(this.url + 'acerca_de/' + id);
	}

	obtenerOneDatosEducacion(id: number): Observable<IEducacion> {
		return this.http.get<IEducacion>(this.url + 'educacion/' + id);
	}

	obtenerOneDatosExperiencia(id: number): Observable<IExperiencia> {
		return this.http.get<IExperiencia>(this.url + 'experiencias/' + id);
	}

	obtenerOneDatosProyecto(id: number): Observable<IProyectos> {
		return this.http.get<IProyectos>(this.url + 'proyectos/' + id);
	}

	obtenerOneDatosSkill(id: number): Observable<ISkill> {
		return this.http.get<ISkill>(this.url + 'skills/' + id);
	}



	// *********************************************************************
	// **************   |   METHOD'S POST    | ******************************
	// *********************************************************************

	/* postAcercaDe(AcercaDe: any): Observable<any> {
		let AcercaDeJSON = JSON.stringify(AcercaDe);
		return this.http.post<any>(this.url + 'acerca_de', AcercaDeJSON, { headers: this.headers });
	}*/

	postEducacion(Educacion: IEducacion): Observable<IEducacion> {
		return this.http.post<IEducacion>(this.url + 'educacion', Educacion, { headers: this.headers });
	}
/*
	postExperiencia(Experiencia: IExperiencia): Observable<IExperiencia> {
		return this.http.post<IExperiencia>(this.url + 'experiencias', Experiencia, { headers: this.headers });
	}
*/
	postProyecto(Proyecto: IProyectos): Observable<IProyectos> {
		return this.http.post<IProyectos>(this.url + 'proyectos', Proyecto, { headers: this.headers });
	}
/*
	postSkill(Skill: ISkill): Observable<ISkill> {
		return this.http.post<ISkill>(this.url + 'skills', Skill, { headers: this.headers });
	}
 */
	// *********************************************************************
	// **************   |   METHOD'S PUT    | ******************************
	// *********************************************************************

/* 	putAcercaDe(AcercaDe: any, id: Number): Observable<any> {
		return this.http.put<any>(this.url + 'acerca_de/' + id, AcercaDe, { headers: this.headers });
	}

	putExperiencia(Experiencia: IExperiencia, i: Number): Observable<IExperiencia> {
		return this.http.put<IExperiencia>(this.url + 'experiencias/' + i, Experiencia, { headers: this.headers });
	}
*/
	putEducacion(Educacion: IEducacion, id: Number): Observable<IEducacion> {
		return this.http.put<IEducacion>(this.url + 'educacion/' + id, Educacion, { headers: this.headers });
	}

	putProyecto(Proyecto: IProyectos, id: Number): Observable<IProyectos> {
		return this.http.put<IProyectos>(this.url + 'proyectos/' + id, Proyecto, { headers: this.headers });
	}
/*
	putSkill(Skill: ISkill, id: Number): Observable<ISkill> {
		return this.http.put<ISkill>(this.url + 'skills/' + id, Skill, { headers: this.headers });
	}

 */
	// *********************************************************************
	// **************   |   METHOD'S DELETE    | ***************************
	// *********************************************************************

/* 	deleteAcercaDe(id: Number): Observable<any> {
		return this.http.delete<any>(this.url + 'acerca_de/' + id, { headers: this.headers });
	}
*/
	deleteEducacion(id: Number): Observable<IEducacion> {
		console.log(this.http.delete<IEducacion>(this.url + 'educacion/' + id, { headers: this.headers }));
		
		return this.http.delete<IEducacion>(this.url + 'educacion/' + id, { headers: this.headers });
	}

	
	deleteExperiencia(id: Number): Observable<IExperiencia> {
		return this.http.delete<IExperiencia>(this.url + 'experiencias/' + id, { headers: this.headers });
	}

	deleteProyecto(id: Number): Observable<IProyectos> {
		return this.http.delete<IProyectos>(this.url + 'proyectos/' + id, { headers: this.headers });
	}
/*
	deleteSkill(id: Number): Observable<ISkill> {
		return this.http.delete<ISkill>(this.url + 'skills/' + id, { headers: this.headers });
	}
 */

}