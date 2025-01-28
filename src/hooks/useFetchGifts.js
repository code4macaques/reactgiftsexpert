import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifts = (category) => {
    
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const gifs = await getGifs(category);
    setGifs(gifs);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    gifs,
    isLoading,
  };
};
