import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifItem = ({ title, url }) => {

  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
