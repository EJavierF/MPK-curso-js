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

        listaArtDOM.appendChild(itemArticulo);
    }
};

const imprimeCards = (identifier, articulos) => {
    for (const art of articulos) {
        $(identifier).append(`
            <div class="card mb-3 card-blog" style="max-width: 540px">
                                <a href="#">
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img src=${art.imgurl} class="img-fluid rounded-start h-100" alt="..." />
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body d-flex flex-column h-100 justify-content-between">
                                                <h5 class="card-title">${art.titulo}</h5>
                                                <p class="card-text">
                                                    ${art.intro}
                                                </p>
                                                <div class="">
                                                    <ul class="d-flex justify-content-between ps-0 card-text">
                                                        <li><i class="bi bi-calendar-event-fill"> ${new Date(art.fecha).toLocaleDateString()}</i></li>
                                                        <li><i class="bi bi-person-square"> ${art.autor}</i></li>
                                                        <li><i class="bi bi-folder">${art.tema}</i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
        `);
    }
};

export { armaUrl, crearArticulo, buscaArticulo, borrarArticulo, mostrarArticulos, ordenaFecha, renderLista, imprimeCards };
