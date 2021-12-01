/*******************************************/
/****SEGUNDA PRE-ENTREGA DE TRABAJO FINAL****/
/*PLANTILLA DE CREACION DE ARTICULOS DE BLOG*/
/*******************************************/

import { articulos } from './articulosData.js';
import { articulo } from './clases.js';
import { armaUrl, crearArticulo, buscaArticulo, borrarArticulo, mostrarArticulos, ordenaFecha, renderLista, imprimeCards } from './funciones.js';

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
    const contenido = $('#contenido');
    const elem = $('#elem');

    let articulosOrdenados = ordenaFecha(articulosLista);

    // Imprimir en el "aside" los articulos ordenados por fecha
    //Para futuras entregas debo darles el estilo
    const imprimeAside = () => {
        articulosOrdenados = ordenaFecha(articulosLista);
        listaUltimasEntradas.empty();
        for (let i = 0; i < articulosOrdenados.length && i < 5; i++) {
            let itemArticulo = document.createElement('li');
            itemArticulo.innerHTML = `<a href="${articulosOrdenados[i].url}">${articulosOrdenados[i].titulo}</a>`;
            listaUltimasEntradas.append(itemArticulo);
        }
    };

    imprimeAside();

    //Subscripción
    formSubscribir.submit((event) => {
        event.preventDefault();

        alert('La subscripción no está lista todavía, paciencia!!');
    });

    //Para esta seccion del código debo asegurarme que estoy parado sobre la página "Nueva entrada", caso contrario provoca errores
    if ($('title')[0].outerText === 'Nueva entrada - Blog') {
        // Funcion para crea articulo y lo agrega al array, cuando se pulsa el boton

        btnCrear.click((event) => {
            const titulo = ingTitulo[0].value;
            const tema = ingTema[0].value;
            const autor = ingAutor[0].value;
            //const intro = ingIntro[0].value;
            //const body = ingBody[0].value;
            const intro = 'Este es el último artículo creado, como prueba, que luego tendrá su input como corresponde';
            const body = 'todo el contenido mucho mas copado que trae la nota recontra copada como ya dije';
            const fecha = ingFecha[0].value;
            const id = titulo[0] + tema[0] + autor[0] + fecha;
            //const imgurl = imagenUrl[0].value;
            const imgurl = '../img/MPK-02.png';

            const art01 = new articulo(id, titulo, tema, autor, intro, body, new Date(fecha), imgurl);
            crearArticulo(art01, articulosLista);
            alert('Se ha creado tu entrada');
            formArticulo[0].reset();

            event.preventDefault();
            refrescaLista();
            imprimeAside();
        });

        console.log(elem.value);
        if (elem.value == 'subtitulo') {
            contenido.html(`
                <input type="text" class="form-control" id="seccion"  placeholder="Subtítulo de sección" />
                `);
        } else if (elem.value == 'parrafo') {
            contenido.html(`
                <input type="textarea" class="form-control" id="seccion"  placeholder="Agregar párrafo" />
                `);
        } else if (elem.value == 'imagen') {
            contenido.html(`<div> boton para cargar imagen</div>`);
        }

        btnBorrarArt.click(() => {
            for (let art of articulosLista) {
                const checkbox = document.getElementById(art.id);
                if (checkbox.checked) {
                    borrarArticulo(art.id, articulosLista);
                }
            }
            refrescaLista();
            imprimeAside();
        });

        //Render de lista en DOM con posibilidad de ordenar por fecha
        const refrescaLista = () => {
            listaArtDOM.empty();
            renderLista(checkOrd[0].checked, articulosLista, articulosOrdenados, listaArtDOM[0]);
        };
        renderLista(checkOrd[0].checked, articulosLista, articulosOrdenados, listaArtDOM[0]);

        checkOrd.change(() => {
            refrescaLista();
        });
    }

    const idBlog = '#cards-articulos';
    imprimeCards(idBlog, articulosOrdenados);
});
