 console.log(this)

 let o = {
    name : 'Pepe',
    direccion: {calle: '', poblacion: ''},
    saludarLuego: function () {
      setTimeout(function() {console.log(
        `Hola soy ${this.name}`
    )}, 1000)  
    },
    saludarLuegoA:  function () {
        setTimeout( () => { console.log(
        `Hola soy ${this.name}`
    )}, 1000)  
      },
 }

let f = o.saludar
 
o.saludarLuego()
o.saludarLuegoA() 