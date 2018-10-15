 console.log(this)

 let o = {
    name : 'Pepe',
    direccion: {calle: '', poblacion: ''},
    saludar: function() {console.log(
        `Hola soy ${this.name}`
    )}
 }

 let f = o.saludar
 
 setTimeout( o.saludar.bind(o), 1000)

 let o6 = {
    name : 'Pepe',
    saludar: () => { console.log(
        `Hola soy ${this.name}`
    )}
 }

 setTimeout( o6.saludar, 1000)
 