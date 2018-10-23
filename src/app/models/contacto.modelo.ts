export interface ContactoIf {
    nombre: string;
    apellidos: string;
    email: string;
    isOk: boolean;
    turno: string;
    curso: {nombre: string, codigo: string};
}

export class Contacto implements ContactoIf {
    constructor (
        public nombre: string = '',
        public apellidos: string = '',
        public email: string = '',
        public isOk: boolean = false,
        public turno: string = '',
        public curso: {nombre: string, codigo: string} = {nombre: '', codigo: ''}
    ) {}
}
