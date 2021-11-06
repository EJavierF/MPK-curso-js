// Arma las URL a partir de la nueva entrada
const armaUrl = (cadena) => {
    const esp = / /g;
    return cadena.toLowerCase().replace(esp, '-');
};

// Actualizo array de artículos
const crearArticulo = (artNuevo, listaCruda) => {
    listaCruda.push(artNuevo);
    localStorage.setItem('articulosLista', JSON.stringify(listaCruda));
};

//Buscando un artículo por id
const buscaArticulo = (id, articulosLista) => {
    const nota = articulosLista.find((nota) => nota.id === id);

    if (!nota) {
        throw new Error(`No existe el artículo con id ${id}`);
    }
    return nota;
};

//Borrar artículo por id
const borrarArticulo = (id, articulosLista) => {
    const art = buscaArticulo(id, articulosLista);
    const index = articulosLista.indexOf(art);
    articulosLista.splice(index, 1);
    localStorage.setItem('articulosLista', JSON.stringify(articulosLista));
};

//funcion para listar los nombres de articulos
const mostrarArticulos = (articulosLista) => {
    console.log('Lista de articulos en crudo');
    for (const art of articulosLista) {
        console.log(art.titulo);
    }
};
//Ordenando por fecha
const ordenaFecha = (lista) => {
    const artOrdFecha = lista.slice().sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());
    console.log('Se ordenaron los articulos por fecha decreciente');
    console.log(artOrdFecha);

    return artOrdFecha;
};

//Muestra la lista en el DOM
const renderLista = (a, listaCruda, listaOrd, listaArtDOM) => {
    let lista = '';
    if (a == true) {
        lista = listaOrd;
    } else {
        lista = listaCruda;
    }
    for (let art of lista) {
        let itemArticulo = document.createElement('li');
        itemArticulo.innerHTML = `<input type="checkbox" id="${art.id}">    ${art.titulo}`;
        //listaArtDOM.append(` <li><input type="checkbox" id="${art.id}">    ${art.titulo} </li>`);
        listaArtDOM.appendChild(itemArticulo);
    }
};

export { armaUrl, crearArticulo, buscaArticulo, borrarArticulo, mostrarArticulos, ordenaFecha, renderLista };
