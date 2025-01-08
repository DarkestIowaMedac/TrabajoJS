const pantalla = document.querySelector('#pantalla')
let estado = 0;
const imagen = pantalla.querySelector('img')
const h1 = pantalla.querySelector('h1')
const h21 = pantalla.querySelector('#h21')
const h22 = pantalla.querySelector('#h22')

let tiempo = 0
let tiempoInicio = 0
let clickado = false
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
pantalla.addEventListener('mousedown',async () => {

    if(estado == 0){
        pantalla.style.backgroundColor = '#EF0F31'
        imagen.src="./imagenes/puntosn.png"
        h1.innerText = 'Wait for green'
        h21.innerText = ''
        h22.innerText = ''
        estado = 1
        clickado = false
        let espera = Math.random() * 5000 + 2000;
        await sleep(espera)
        if(clickado == false){
            pantalla.style.backgroundColor = '#1ab558'
            imagen.src="./imagenes/puntosn.png"
            h1.innerText = 'Click!'
            h21.innerText = ''
            h22.innerText = ''
            tiempoInicio = Date.now()
            estado = 2
        }
    }  
    else if(estado == 1){
        clickado = true
        pantalla.style.backgroundColor = '#1A6FB5'
        imagen.src="./imagenes/admiracionn.png"
        h1.innerText = 'Too soon!'
        h21.innerText = 'Click to try again.'
        h22.innerText = ''
        estado = 0
    }
    else if(estado == 2){
        clickado = true
        let tiempo = Date.now() - tiempoInicio
        pantalla.style.backgroundColor = '#1A6FB5'
        imagen.src="./imagenes/relojn.png" 
        tiempo = Math.round(tiempo)
        h1.innerText = ""+tiempo+" ms"
        h21.innerText = 'Click to keep going'
        h22.innerText = ''
        estado = 0

    }
})

