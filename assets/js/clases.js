class articulo {
    constructor(id, titulo, tema, autor, intro, body, fecha, imgurl) {
        this.id = id;
        this.titulo = titulo;
        this.tema = tema;
        this.autor = autor;
        this.intro = intro;
        this.body = body;
        this.fecha = fecha;
        this.imgurl = imgurl;
        this.fechaCarga = new Date();
    }
}

export { articulo };
