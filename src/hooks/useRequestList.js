import axios from "axios";
import { useState, useEffect } from "react";

export function useRequestList(url, initState) {
  const [list, setList] = useState(initState);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setList(response.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return list;
}
