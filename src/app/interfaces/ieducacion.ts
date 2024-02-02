//export interface IEducacion {
export class IEducacion {
	id? : number;
	personaId: number;
	escuela: string;
	titulo: string;
	detalles: string;
	puntaje: number;
	inicio:string;
	fin: string;
	imagen: string;

	constructor( personaId : number,
		escuela: string, titulo : string,
		detalles : string,
		puntaje : number,
		inicio : string,
		fin : string,
		imagen : string ) {
			this.personaId = personaId;
			this.escuela = escuela;
			this.titulo = titulo;
			this.detalles = detalles;
			this.puntaje = puntaje;
			this.inicio = inicio;
			this.fin = fin;
			this.imagen = imagen;
		}
}