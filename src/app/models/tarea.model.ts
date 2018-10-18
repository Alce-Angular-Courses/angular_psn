export interface TareaIf {
    nombre: string;
    isCompleted: boolean;
}

export class Tarea implements TareaIf {

    constructor(
        public nombre: string = '',
        public isCompleted: boolean = false,
        public id?: number | string,
    ) {}
}


