const URL_JSON = '/data/articulos.json';
const articulos = [];

$.getJSON(URL_JSON, (response, status) => {
    if (status !== 'success') {
        throw new Error('error');
    }

    for (const article of response) {
        articulos.push(article);
    }
});

export { articulos };
