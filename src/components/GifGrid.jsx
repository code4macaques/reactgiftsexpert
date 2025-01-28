import { GifItem } from "./GifItem";
import { useFetchGifts } from "../hooks/useFetchGifts";

export const GifGrid = ({ category }) => {

    const {gifs, isLoading} = useFetchGifts(category);

    console.log({gifs, isLoading});

  return (
    <>
      <h3>{category}</h3>
      {isLoading && (<h2>Cargando...</h2>)}
      <div className="card-grid">
        {gifs.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
