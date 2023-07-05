import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3 className="title">{category} </h3>

      {isLoading && <h2>Cargando...</h2>}

      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

//useEffect( ()=>{}, [] ) useEffect primero resive un calback y segundo resive un arreglo con las dependencias
//las dependencias son las condiciones por las cuales quieres que se vuelv a ejecutar el callback,
// si dejo las dependencias vacias [] significa que este hook solo se va  disparar la primera vez que se crea y se construye el componente
//  {images.map((image) => (<li key={image.id}>{image.title} </li>)

/*   const [images, setImages] = useState([]);
  useEffect(() => {
    getGifs(category).then((newImages) => setImages(newImages));
  }, []); */

// linea 11) {isLoading ? <h2>Cargando...</h2> : null}
// otra forma de hacerlo, es con un if corto=>> si isLopaading esta en true, entonces va a ejecutar la segunda parte
// isLoading && (<h2>Cargando...</h2> )
