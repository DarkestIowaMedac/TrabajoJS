const btnfondo = document.querySelector('#cambiarfondo')
const btnagregar = document.querySelector('#agregarelemento')

let listaElementos = document.querySelector('#elementos')
let listaimagenes = ["sonicn", "tailsn", "knucklesn", "DrEggmann"]
const colordefondo = document.querySelector('#colorInput');
let colordefondonuevos = 'transparent'
btnfondo.addEventListener('click', () => {
    const colorSeleccionado = colorInput.value;
    colordefondonuevos = colorSeleccionado
    let elementos = document.querySelectorAll('.elemento img')
    elementos.forEach((elemento) => {
        elemento.style.backgroundColor = colorSeleccionado;
    })
})

btnagregar.addEventListener('click', () => {
    const elementoForm = document.createElement('form');
    elementoForm.innerHTML = `<img src="./imagenes/sonicn.png" style="background-color:${colordefondonuevos};">
        <input type="button" class="botonblock botoncambiar" value="Cambiar">
        <input type="button" class="botonblock botonborrar" value="Borrar"></input>`;
    elementoForm.className = 'elemento'
    const contenedor = document.querySelector('#elementos');
    contenedor.appendChild(elementoForm);
})

listaElementos.addEventListener('click', (event) => {
    if(event.target.classList.contains('botoncambiar')){
        const form = event.target.closest('form'); 
        const img = form.querySelector('img');
        let palabra = 0
        for(let i = 0; i<listaimagenes.length; i++){
            if(img.src.includes(listaimagenes[i])){
                palabra = i
            }
        }
        palabra = palabra + 1
        if(palabra == listaimagenes.length){
            palabra = 0
        }
        img.src = "./imagenes/"+listaimagenes[palabra]+".png"
        
    }
    if(event.target.classList.contains('botonborrar')){
        const elemento = event.target.closest('form');
        elemento.remove();
    }
})