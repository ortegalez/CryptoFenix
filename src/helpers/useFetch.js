import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setData(data))
      //   Uso un estado Error como alternativa a .catch((err) => console.error(err))
      .catch((error) => setError(error))
      //   Incluyo un finally con un loading false para que desmonte el loading al recibir la respuesta de la API
      .finally(() => setLoading(false));
  }, []);
  //   Retorno un objeto con todos los datos, es mas sencillo desestructurar
  return { data, loading, error };
};

/*
Para importar la funcion useFectch en el componente que lo requiero:
import { useFetch } from "../helpers/useFetch";

Para implementar la funcion, hago:
const {data, loading, error}

https://www.youtube.com/watch?v=6u1RHUoXIPI&t=5s
 */
