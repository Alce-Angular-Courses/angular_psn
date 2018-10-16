
interface PersonaIf {
    nombre: string;
    apellido: string;
}

class Persona implements PersonaIf {

    /* public nombre: string;
    private edad: number;
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    } */

    constructor(
        public nombre: string,
        public apellido: string,
        private edad: number,
        isCasado: boolean,
        aficiones: Array<string>,
        otrosDatos: {}
        ) {}

    public saludar(): void {
        console.log(`Hola soy ${this.nombre}`);
    }
}


class Alumno extends Persona {
    curso: string;
    constructor(nombre, edad, curso) {
        super(nombre, null, edad, false, [], {});
        this.curso = curso;
    }

    saludar() {
        super.saludar();
        console.log(`Soy del curso ${this.curso} `);
    }
}

let p1 = new Persona('Pepe', 'Perez', 33, false, [], {});
p1.saludar();
// p1.profesion = 'Programador';
console.log(p1);

let a1 = new Alumno('Juam', 34, 'Angular');
console.log(a1);
