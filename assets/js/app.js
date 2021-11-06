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

//Espero a que carguen los elementos del DOM
$(document).ready(function () {
    // Traigo los elementos del DOM
    const formArticulo = $('#form-articulo');
    const ingTitulo = $('#titulo');
    const ingTema = $('#tema');
    const ingAutor = $('#autor');
    const ingFecha = $('#fecha');
    const formSubscribir = $('#form-subscribir');
    const listaUltimasEntradas = $('#lista-ultimas-entradas');
    const listaArtDOM = $('#lista-articulos');
    const btnCrear = $('#btn-Crear');
    const btnBorrarArt = $('#btn-borrar-art');
    const checkOrd = $('#check-ord');

    //
    // const refrescaLista = () => {
    //     //listaArtDOM.empty();
    //     renderLista(false, articulosLista, articulosOrdenados, listaArtDOM);
    // };

    // Funcion para crea articulo y lo agrega al array, cuando se pulsa el boton
    //   formArticulo.submit((event) => {
    btnCrear.click((event) => {
        const titulo = ingTitulo[0].value;
        const tema = ingTema[0].value;
        const autor = ingAutor[0].value;
        const fecha = ingFecha[0].value;
        const id = titulo[0] + tema[0] + autor[0] + fecha;
        const url = `${ruta}${armaUrl(titulo)}.html`;

        const art01 = new articulo(id, titulo, tema.toLowerCase(), autor.toLowerCase(), new Date(fecha), url);
        crearArticulo(art01, articulosLista);
        alert('Se ha creado tu entrada');
        formArticulo[0].reset();

        event.preventDefault();
        refrescaLista();
    });

    const articulosOrdenados = ordenaFecha(articulosLista);
    console.log(articulosOrdenados);
    console.log(articulosOrdenados[0]);
    console.log(articulosOrdenados[0].fecha);
    console.log(typeof articulosOrdenados[0].fecha);
    let fechanum = new Date(articulosOrdenados[0].fecha).getTime();
    console.log(fechanum);
    console.log(typeof fechanum);

    // refrescaLista();

    // Imprimir en el "aside" los articulos ordenados por fecha
    //Para futuras entregas debo darles el estilo
    for (let i = 0; i < articulosOrdenados.length && i < 5; i++) {
        let itemArticulo = document.createElement('li');
        itemArticulo.innerHTML = `<a href="${articulosOrdenados[i].url}">${articulosOrdenados[i].titulo}</a>`;
        listaUltimasEntradas.append(itemArticulo);
    }

    btnBorrarArt.click(() => {
        for (let art of articulosLista) {
            const checkbox = document.getElementById(art.id);
            if (checkbox.checked) {
                borrarArticulo(art.id, articulosLista);
            }
        }
        refrescaLista();
    });

    //Render de lista en DOM todavía sin opción de mostrar ordenado por lo menos en el cuerpo (sí esta en aside)
    const refrescaLista = () => {
        listaArtDOM.empty();
        renderLista(false, articulosLista, articulosOrdenados, listaArtDOM[0]);
    };
    renderLista(false, articulosLista, articulosOrdenados, listaArtDOM[0]);

    //Subscripción
    formSubscribir.submit((event) => {
        event.preventDefault();

        alert('La subscripción no está lista todavía, paciencia!!');
    });
});
