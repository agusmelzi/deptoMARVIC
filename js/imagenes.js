// "use strict"

const btnCierra = document.querySelector('#btn-cierra');
const btnRetrocede = document.querySelector('#btn-retrocede');
const btnAdelanta = document.querySelector('#btn-adelanta');
const imagenes = document.querySelectorAll('#galeria img');
console.log(imagenes);
const lightBox = document.querySelector('#contenedor-principal');
const imagenActiva = document.querySelector('#imagen-activa');
console.log(imagenActiva.src);
let indiceImagen = 0;

const abreLightBox = (event) => {
    imagenActiva.src = event.target.src;
    lightBox.style.display = 'flex';
    console.log(imagenActiva.src);
    indiceImagen = Array.from(imagenes).indexOf(event.target);
};

imagenes.forEach((imagen) => {
    imagen.addEventListener('click', abreLightBox);
});

btnCierra.addEventListener('click', () => {
    lightBox.style.display = 'none';
});

const adelantaImagen = () => {
    if (indiceImagen === imagenes.length -1) {
        indiceImagen = -1;
    }
    imagenActiva.src = imagenes[indiceImagen + 1].src;
    indiceImagen++;
};

btnAdelanta.addEventListener('click', adelantaImagen);

const retrocedeImagen = () => {
    if (indiceImagen === 0) {
        indiceImagen = imagenes.length;
    }
    imagenActiva.src = imagenes[indiceImagen -1].src;
    indiceImagen--;
};

btnRetrocede.addEventListener('click', retrocedeImagen);