/*******************************************/
/****SEGUNDA PRE-ENTREGA DE TRABAJO FINAL****/
/*PLANTILLA DE CREACION DE ARTICULOS DE BLOG*/
/*******************************************/

import { articulos } from './articulosData.js';
import { articulo } from './clases.js';
import { armaUrl, crearArticulo, buscaArticulo, borrarArticulo, mostrarArticulos, ordenaFecha, renderLista } from './funciones.js';

//vector con lista completa de articulos
let articulosLista = JSON.parse(localStorage.getItem('articulosLista')) || articulos;

// Indico la ruta que voy a usar para guardar los html
const ruta = './articles/';

// Traigo los elementos del DOM
const formArticulo = document.getElementById('form-articulo');
const ingTitulo = document.getElementById('titulo');
const ingTema = document.getElementById('tema');
const ingAutor = document.getElementById('autor');
const ingFecha = document.getElementById('fecha');
const formSubscribir = document.getElementById('form-subscribir');
const listaUltimasEntradas = document.getElementById('lista-ultimas-entradas');
const listaArtDOM = document.getElementById('lista-articulos');
const btnBorrarArt = document.getElementById('btn-borrar-art');
const checkOrd = document.getElementById('check-ord');

// Funcion para crea articulo y lo agrega al array, cuando se pulsa el boton
formArticulo.addEventListener('submit', (event) => {
    const titulo = ingTitulo.value;
    const tema = ingTema.value;
    const autor = ingAutor.value;
    const fecha = ingFecha.value;
    const id = titulo[0] + tema[0] + autor[0] + fecha;
    const url = `${ruta}${armaUrl(titulo)}.html`;

    const art01 = new articulo(id, titulo, tema.toLowerCase(), autor.toLowerCase(), new Date(fecha), url);
    crearArticulo(art01, articulosLista);
    alert('Se ha creado tu entrada');
});

const articulosOrdenados = ordenaFecha(articulosLista);
console.log(articulosOrdenados);

// Imprimir en el "aside" los articulos ordenados por fecha
//Para futuras entregas debo crearlos como enlaces y darles el estilo
for (let i = 0; i < articulosOrdenados.length && i < 5; i++) {
    let itemArticulo = document.createElement('li');
    itemArticulo.innerHTML = `<a href="${articulosOrdenados[i].url}">${articulosOrdenados[i].titulo}</a>`;
    listaUltimasEntradas.appendChild(itemArticulo);
}

btnBorrarArt.addEventListener('click', () => {
    for (let art of articulosLista) {
        const checkbox = document.getElementById(art.id);
        if (checkbox.checked) {
            borrarArticulo(art.id, articulosLista);
        }
    }
    location.reload();
});

//Render de lista en DOM todavía sin opción de mostrar ordenado por lo menos en el cuerpo (sí esta en aside)

renderLista(false, articulosLista, articulosOrdenados, listaArtDOM);

//Subscripción
formSubscribir.addEventListener('submit', (event) => {
    event.preventDefault();

    alert('La subscripción no está lista todavía, paciencia!!');
});
