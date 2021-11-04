class articulo {
    constructor(id, titulo, tema, autor, fecha, url) {
        this.id = id;
        this.titulo = titulo;
        this.tema = tema;
        this.autor = autor;
        this.fecha = fecha;
        this.url = url;
        this.fechaCarga = new Date();
    }

    describir() {
        alert(
            `El título del artículo es: ${this.titulo} \n Clasificado como: ${this.tema} \n Creado por: ${this.autor} \n Escrito el día: ${this.fecha} \n Cargado en el sitio el: ${this.fechaCarga}`
        );
    }
}

export { articulo };
