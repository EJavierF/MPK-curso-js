/*******************************************/
/****SEGUNDA PRE-ENTREGA DE TRABAJO FINAL****/
/*PLANTILLA DE INGRESO DE ARTICULOS DE BLOG*/
/*******************************************/

import { articulos } from "./articulosData.js";

class articulo {
    constructor(id, titulo, tema, autor, fecha) {
        this.id = id;
        this.titulo = titulo;
        this.tema = tema;
        this.autor = autor;
        this.fecha = fecha;
        this.fechaCarga = new Date();
    }

    describir() {
        alert(
            `El título del artículo es: ${this.titulo} \n Clasificado como: ${this.tema} \n Creado por: ${this.autor} \n Escrito el día: ${this.fecha} \n Cargado en el sitio el: ${this.fechaCarga}`
        );
    }
}

// funcion para solicitar al usuario que ingrese los datos de un objeto nuevo
const crearArticulo = (artNuevo) => {
    articulosLista.push(artNuevo);
    localStorage.setItem("articulosLista", JSON.stringify(articulosLista));
};

//Buscando un artículo por id
const buscaArticulo = (id) => {
    const nota = articulosLista.find((nota) => nota.id === id);

    if (!nota) {
        throw new Error(`No existe el artículo con id ${id}`);
    }
    return nota;
};

//Borrando artículo
const borrarArticulo = (id) => {
    const art = buscaArticulo(id);
    const index = articulosLista.indexOf(art);
    articulosLista.splice(index, 1);
    localStorage.setItem("articulosLista", JSON.stringify(articulosLista));
};

//vector con lista completa de articulos
let articulosLista = JSON.parse(localStorage.getItem("articulosLista")) || articulos;

// traigo los elementos del DOM
const formArticulo = document.getElementById("form-articulo");
const ingTitulo = document.getElementById("titulo");
const ingTema = document.getElementById("tema");
const ingAutor = document.getElementById("autor");
const ingFecha = document.getElementById("fecha");
const formSubscribir = document.getElementById("form-subscribir");
const listaUltimasEntradas = document.getElementById("lista-ultimas-entradas");
const listaArtDOM = document.getElementById("lista-articulos");
const btnBorrarArt = document.getElementById("btn-borrar-art");

//funcion para listar los nombres de articulos
const mostrarArticulos = () => {
    console.log("Lista de articulos en crudo");
    for (const art of articulosLista) {
        console.log(art.titulo);
    }
};
//Ordenando por fecha
const ordenaFecha = () => {
    const artOrdFecha = articulosLista.slice().sort((a, b) => b.fecha - a.fecha);
    console.log("Se ordenaron los articulos por fecha decreciente");

    for (const art of artOrdFecha) {
        console.log(art.fecha, " - ", art.titulo);
    }
    return artOrdFecha;
};

// Funcion para crea articulo y lo agrega al array, cuando se pulsa el boton
formArticulo.addEventListener("submit", (event) => {
    const titulo = ingTitulo.value;
    const tema = ingTema.value;
    const autor = ingAutor.value;
    const fecha = ingFecha.value;
    const id = titulo[0] + tema[0] + autor[0] + fecha;

    const art01 = new articulo(id, titulo, tema.toLowerCase(), autor.toLowerCase(), new Date(fecha));
    crearArticulo(art01);
    alert("Se ha creado tu entrada");
});

const articulosOrdenados = ordenaFecha();

// Imprimir en el "aside" los articulos ordenados por fecha
//Para futuras entregas debo crearlos como enlaces y darles el estilo
for (let art of articulosOrdenados) {
    let itemArticulo = document.createElement("li");
    itemArticulo.textContent = `${art.titulo}`;
    listaUltimasEntradas.appendChild(itemArticulo);
}

const renderLista = () => {
    for (let art of articulosLista) {
        let itemArticulo = document.createElement("li");
        itemArticulo.innerHTML = `<input type="checkbox" id="${art.id}">    ${art.titulo}
        `;
        listaArtDOM.appendChild(itemArticulo);
    }
};

btnBorrarArt.addEventListener("click", () => {
    for (let art of articulosLista) {
        const checkbox = document.getElementById(art.id);
        if (checkbox.checked) {
            borrarArticulo(art.id);
        }
    }
    location.reload();
});

//Render de lista en DOM

renderLista();

//Muestro todo el array de objetos
console.log(articulosLista);

//Imprime solo los titulos
mostrarArticulos();
//Subscripción
formSubscribir.addEventListener("submit", (event) => {
    event.preventDefault();

    alert("La subscripción no está lista todavía, paciencia!!");
});
