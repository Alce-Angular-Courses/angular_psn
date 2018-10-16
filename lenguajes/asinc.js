pintar = function (x) {
    console.log(`Me ha llegado ${x}`)
}

function asinc (callback) {
    let x = 'saludo'
    setTimeout ( () => {
        callback(x)
    }, 3000)
}

asinc(pintar)