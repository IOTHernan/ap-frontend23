export class IProyectos {
	id?: number;
	personaId: number;
	titulo: string;
	imagen: string;
	descripcion: string;

	constructor( personaId:number, titulo: string, imagen: string, descripcion: string ) {
		this.personaId= personaId,
		this.titulo= titulo,
		this.imagen= imagen,
		this.descripcion= descripcion
	}
}
