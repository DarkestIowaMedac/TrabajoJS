const pantalla = $('#pantalla');
let estado = 0;
const imagen = pantalla.find('img');
const h1 = pantalla.find('h1');
const h21 = pantalla.find('#h21');
const h22 = pantalla.find('#h22');

let tiempo = 0
let tiempoInicio = 0
let clickado = false
let timeoutid

pantalla.on('mousedown',() => {
    if(estado == 0){
        pantalla.css('background-color', '#EF0F31')
        imagen.attr('src', "./imagenes/puntosn.png")
        h1.text('Wait for green')
        h21.text('')
        h22.text('')
        estado = 1
        clickado = false
        let espera = Math.random() * 5000 + 2000;
        
        timeoutid = setTimeout(() => {
            if(clickado == false){
                pantalla.css('background-color', '#1ab558') 
                imagen.attr('src', './imagenes/puntosn.png')
                h1.text('Click!')
                h21.text('')
                h22.text('')
                tiempoInicio = Date.now()
                estado = 2
            }
        },espera)
    }  
    else if(estado == 1){
        clearTimeout(timeoutid);
        clickado = true
        pantalla.css('background-color', '#1A6FB5')
        imagen.attr('src','./imagenes/admiracionn.png')
        h1.text('Too soon!')
        h21.text('Click to try again.')
        h22.text('')
        estado = 0
    }
    else if(estado == 2){
        clearTimeout(timeoutid);
        clickado = true
        let tiempo = Date.now() - tiempoInicio
        pantalla.css('background-color', '#1A6FB5')
        imagen.attr('src', './imagenes/relojn.png') 
        tiempo = Math.round(tiempo)
        h1.text(''+tiempo+' ms')
        h21.text('Click to keep going')
        h22.text('')
        estado = 0
    }
})

