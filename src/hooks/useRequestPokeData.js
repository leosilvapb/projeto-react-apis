import axios from "axios";
import { useState, useEffect } from "react";
import { setColor } from "../functions/function";

export function useRequestPokeData(url, initState) {
  const [properties, setProperties] = useState(initState);
  let request = {};
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        request = {...properties,
          id: response.data.id,
          types: response.data.types,
          pictureUrl: response.data.sprites.other["official-artwork"].front_default,
          color: "",
          name: response.data.species.name,
          pictureFront: response.data.sprites.front_default,
          pictureBack: response.data.sprites.back_default,
          moves: response.data.moves,
          stats:response.data.stats
        };

        request.color = (()=>setColor(request.types[0].type.name))
        setProperties(request)
      })
      .catch((err) => console.log(err));
  }, []);

  return properties;
}
