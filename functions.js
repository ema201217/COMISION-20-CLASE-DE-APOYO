module.exports = {
  listarPeliculas: () => {
    for (let index = 1; index <= 20; index++) {
      console.log(`pelicula ${index}`);
    }
  },
  actualizarPelicula: (id) => {
    console.log(`La película con el numero ${id} fue actualizada`);
  },
  filtrarPeliculas: (name) => {
    const movies = ['Batman','Harry Potter']
    return movies.filter(m => m === name)
  },
  eliminandoPeliculas: () => {
    console.log("eliminandoPeliculas");
  },
};