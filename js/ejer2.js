import Galeria from './Galeria.js'; 

 

// Creo una instancia de Galeria con 7 imágenes
const galeria = new Galeria(7);
//Cargo la pagina
window.addEventListener('load',Inicio);
                                
//Recogo los elementos en variables
var primera = document.getElementById("primera");
var ultima = document.getElementById("ultima");
var siguiente = document.getElementById("siguiente");
var anterior = document.getElementById("anterior");

//Creo los eventos para cada boton
primera.addEventListener('click',Primero);
ultima.addEventListener('click',Ultima);
siguiente.addEventListener('click',Siguiente);
anterior.addEventListener('click',Anterior);


//Hago una funcion para cada boton y llamo a los metodos de la clase galeria

function Inicio(){
   document.querySelector('#imagen').style.backgroundImage = 'url(images/' + galeria.mostrarImgAleatoria() +')';
   actualizarBotones();
}
function Primero(){
   document.querySelector('#imagen').style.backgroundImage = 'url(images/' + galeria.mostrarPrimeraImg() +')';
   actualizarBotones();
}
function Ultima(){
    document.querySelector('#imagen').style.backgroundImage = 'url(images/' + galeria.mostrarUltimaImg() +')';
    actualizarBotones();
}
function Siguiente(){
    document.querySelector('#imagen').style.backgroundImage = 'url(images/' + galeria.mostrarSiguiente() +')';
    actualizarBotones();
}
function Anterior(){
    document.querySelector('#imagen').style.backgroundImage = 'url(images/' + galeria.mostrarAnterior() +')';
    actualizarBotones();
}



// .classList.toggle(clase, expr)	Si expr es true, añade la clase. Si es false, la elimina.
function actualizarBotones() {
     //Al principio los deshabilito
primera.classList.toggle('deshabilitado', galeria.posicion === 0);
anterior.classList.toggle('deshabilitado', galeria.posicion === 0);
 //Al final los deshabilito
ultima.classList.toggle('deshabilitado', galeria.posicion === galeria.imagenes.length - 1);
siguiente.classList.toggle('deshabilitado', galeria.posicion === galeria.imagenes.length - 1);
}

//otra forma 
//function actualizarBotones() {
    //Al principio
 //   if (galeria.posicion === 0) {
 //     primera.classList.add('deshabilitado');
 //     anterior.classList.add('deshabilitado');
 //     ultima.classList.remove('deshabilitado');
 //     siguiente.classList.remove('deshabilitado');
     //Al final
 //   } else if (galeria.posicion === galeria.imagenes.length - 1) {
 //     primera.classList.remove('deshabilitado');
 //     anterior.classList.remove('deshabilitado');
 //     ultima.classList.add('deshabilitado');
 //     siguiente.classList.add('deshabilitado');
 //   } else {
 //     // Si no estamos ni principio ni al final
 //     primera.classList.remove('deshabilitado');
 //     anterior.classList.remove('deshabilitado');
 //     ultima.classList.remove('deshabilitado');
 //     siguiente.classList.remove('deshabilitado');
 //   }
 // }