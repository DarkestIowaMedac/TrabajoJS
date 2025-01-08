const btnfondo = $('#cambiarfondo')
const btnagregar = $('#agregarelemento')

let listaElementos = $('#elementos')
let listaimagenes = ["sonicn", "tailsn", "knucklesn", "DrEggmann"]
const colordefondo = $('#colorInput');
let colordefondonuevos = '#ffffff'

btnfondo.on('click', () => {
    const colorSeleccionado = colordefondo.val();
    colordefondonuevos = colorSeleccionado
    $('.elemento img').each(function() {
        $(this).css('background-color', colorSeleccionado);
    })
})

btnagregar.on('click', () => {
    const elementoForm = $(`
        <form class="elemento">
            <img src="./imagenes/sonicn.png" style="background-color:${colordefondonuevos};">
            <input type="button" class="botonblock botoncambiar" value="Cambiar">
            <input type="button" class="botonblock botonborrar" value="Borrar">
        </form>
    `);
    elementoForm.addClass('elemento');
    $('#elementos').append(elementoForm);

})


listaElementos.on('click', '.botoncambiar', function() {
    const form = $(this).closest('form'); 
    const img = form.find('img');
    let palabra = 0
    for(let i = 0; i<listaimagenes.length; i++){
        if(img.attr('src').includes(listaimagenes[i])){
            palabra = i
        }
    }
    palabra = palabra + 1
    if(palabra == listaimagenes.length){
        palabra = 0
    }
    img.attr('src', "./imagenes/"+listaimagenes[palabra]+".png")
})

listaElementos.on('click', '.botonborrar', function() {
    const elemento = $(this).closest('form');
    elemento.remove();
})
