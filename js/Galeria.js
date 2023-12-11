export default class Galeria {
    //creo el contructor de la clase al que le tienes que enviar un numero de img 
     constructor(cantidadImagenes) {
         //Array que contiene las img
         this.imagenes = [];
         //posicion=>Posicion de las img
         this.posicion = 0;
 
         // Genero los nombres de las imágenes (foto1.jpg)
         for (var i = 1; i <= cantidadImagenes; i++) {
            var img= "foto" + i + ".jpg";
            //Y las añado al array
             this.imagenes.push(img);
         }
     }
 
 
 
     mostrarImgAleatoria() {
         //Le doy al posicion un valor aleatorio
         this.posicion = Math.floor(Math.random() * this.imagenes.length);
   
         //devuelvo la img con el numero de posicion aleatorio
         return this.imagenes[this.posicion];
     }
 
     mostrarPrimeraImg() {
         //Le doy al posicion el valor 0 para que saque la primera img del array
         this.posicion = 0;
         //devuelvo la img con el numero de posicion 0
         return this.imagenes[this.posicion];
     }
 
     mostrarUltimaImg() {
         //Le doy al posicion un valor array-1, en este caso es 6 porque el array lo he creado de 7
         this.posicion = this.imagenes.length - 1;
         //devuelvo la img con el numero de posicion 
         return this.imagenes[this.posicion];
     }
 
     mostrarAnterior() {
         //Le doy al posicion un valor de (su valor actual-1) para que saque el anterior
         if (this.posicion > 0) {
             this.posicion--;
         }
         //devuelvo la img con el numero de posicion 
         return this.imagenes[this.posicion];
     }
 
     mostrarSiguiente() {
         //Le doy al posicion un valor de (su valor actual+1) para que saque el siguiente
         if (this.posicion < this.imagenes.length - 1) {
             this.posicion++;
         }
         //devuelvo la img con el numero de posicion 
         return this.imagenes[this.posicion];
     }
 }
