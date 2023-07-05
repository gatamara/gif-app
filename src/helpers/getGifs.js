export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=YgsrZHO7LbWziO4qrGKOM4R36NEOtrR9&q=${category}&limit=12 `;
  const resp = await fetch(url); //obtengo la respuesta, y quiero obtener la data, que viene con las imagenes
  const { data } = await resp.json(); // desestructuro la data

  //ahora quiere sacar los datos que me importan de la data, como las imagenes, id y titulo

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
