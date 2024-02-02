export class IExperiencia {
	id? : number;
	personaId: number;
	ubicacion: string;
	puesto: string;
	periodo: string;
	empresa: string;
	actividades: string;
	imagen: string;

	constructor(personaId: number,
		ubicacion: string,
		puesto: string,
		periodo: string,
		empresa: string,
		actividades: string,
		imagen: string) {
			this.personaId = personaId;
			this.ubicacion = ubicacion;
			this.puesto = puesto;
			this.periodo = periodo;
			this.empresa = empresa;
			this.actividades = actividades;
			this.imagen = imagen;
		}
}
