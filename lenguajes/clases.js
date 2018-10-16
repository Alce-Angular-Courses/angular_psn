class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad 
    }

    saludar() {
        console.log(`Hola soy ${this.nombre}`)
    }
}


class Alumno extends Persona {
    constructor(nombre, edad, curso) {
        super(nombre, edad)
        this.curso = curso
    }

    saludar() {
        super.saludar()
        console.log(`Soy del curso ${this.curso} `)
    }
}

let p1 = new Persona('Pepe', 33)
p1.saludar()
p1.profesion = "Programador"
console.log(p1)

let a1 = new Alumno('Juam', 34, 'Angular')
console.log(a1)
