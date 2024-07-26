import { useEffect, useState } from "react";
import { GifItem } from "./GifItem.jsx";
import { useFetchGifs } from "../hooks/useFetchGifs.js";

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );

  return (
    <>
      <form>
        <h3>{category}</h3>

        <h2>
          { isLoading && ( <p>Cargando...</p> ) }
        </h2>

        <div className="card-grid">
          {images.map((image) => (
            <GifItem 
              key={image.id}
              {...image}
            />
          ))
          }
        </div>
      </form>
    </>
  );
};
