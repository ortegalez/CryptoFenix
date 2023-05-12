/*
____________________ VITE ______________________

 1. Instala en la consola:

    $ npm create vite@latest <nombre-de-mi-proyecto>

2. Entre los diferentes frameworks que te sugiere, elige el que necesites, en nuestro caso react. 
Después te pregunta si quieres utilizar TypeScript o no. Elige lo que prefieras.

    ✔ Project name: … vite-project
    ? Select a framework: › - Use arrow-keys. Return to submit.
        Vanilla
        Vue
    ❯   React
        Preact
        Lit
        Svelte

3. ? Select a variant: › - Use arrow-keys. Return to submit.
    ❯   JavaScript
        TypeScript

        cd vite-project
        npm install
        npm run dev

4. Una vez creado, dirígete al directorio creado y ejecuta el comando de instalación:

    $ cd <nombre-de-mi-proyecto>
    $ npm install

5. Una vez instaladas las dependencias, ejecuta el comando de desarrollo y ya puedes empezar a trabajar.

    $ npm run dev


_____________________ BOOTSTRAPS ________________________________

Para instalar Bootstrap y los iconos de Bootstraps:

1. Instala en la consola, npm de Bootstraps

    npm i bootstrap@5.3.0-alpha3

    npm i bootstrap-icons

2. Importar el archivo de estilos ccs que esta en modules Bootstrap, en el main.jsx

    import "bootstrap/dist/css/bootstrap.min.css";

3. Copiar el scrpts del CDN en el archivo index.html

<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js" integrity="sha384-zYPOMqeu1DAVkHiLqWBUTcbYfZ8osu1Nd6Z89ify25QV9guujx43ITvfi12/QExE" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js" integrity="sha384-Y4oOpwW3duJdCWv5ly8SCFYWqFDsfob/3GkgExXKV4idmbt98QcxXYs9UoXAB7BZ" crossorigin="anonymous"></script>


_________________________ REACT ICON ____________________________

1. Instala en la consola:

    npm install react-icons

2. Uso, ejemplo

        import { FaBeer } from 'react-icons/fa';
      
        render() {
            return <h3> Lets go for a <FaBeer />? </h3>
        }
___________________ RROUTER_____________________________

1. Instala el paquete react-router-dom

2. En el componente App.jsx, importa los hooks:

import { BrowserRouter, Route, Routes } from "react-router-dom";

// El componente <BrowserRouter>...<BrowserRouter/> envuelve todo el contenido para
// definir el ámbito donde estarán los componenentes a los que se pueden desplazar.
// Dentro de <Routes>...<Routes/> van todos los elementos <Route> componentes y establecemos cuales seran las rutas (path="/../") de los url.

function App() {
  return (
    <>
      <BrowserRouter>
        <CoinContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<CoinListContainer />} />
            <Route path="/coin/:idCoin" element={<CoinContainer />} />
            <Route path="/us" element={<AboutUs />} />
            <Route path="/dollarQuotes" element={<DollarQuotes />} />
          </Routes>
          <Footer />
        </CoinContextProvider>
      </BrowserRouter>
    </>

3. Dentro de los componentes usamos los elementos <Link><Link/> que reemplazan por ejemplo
a las etiquetas <a><a/>. Para los la navbar usamos <NavLink><NavLink/>

import { Link, NavLink } from "react-router-dom"; 

// En estos definimos la rura con to={./../}. Las rutas tienen que coincidir con las definidas en App.
// Quiere decir que a hacer click en el elemento Link no vas a enviar al componente que coincida.
// Hay casos comoo como en los que se necesita una ruta dinamica, podemos usar codigo interpretado
// y usar una variable que recibira el valor que se le pase desde la url.

Ejemplo:

        <Link to={`/coin/${coin.id}`}>
          <img src={coin.image} alt={coin.id} />
          <div>
            <span>{coin.name}</span>
            <span>{coin.symbol.toUpperCase()}</span>
          </div>
        </Link>

4. Para capturar un valor desde la url, definido de forma dinamica en la App.jsx.
Usamos el hook useParams. Ejemplo

const { idData } = useParamns()

// Ya teniendo el valor capturado en el useParamns lo podemos para a una url dinamica escrita
// con codigo interpretado

  const url = `https://api.coingecko.com/api/v3/coins/${idCoin}`;

// Esto se puede usar para acceder a una API externa a traves de un fetch




_______________________ USE CONTEXT_____________________

1. Crear una carpeta llamada "context",  donde irá un un archivo jsx que tendrá todos los datos 
y funciones que queremos que sean goblables, por ejemplo "dataContext.jsx"

2. Dentro del archivo dataContext usamos el hook:

import { createContext, useContext } from "react";

// Crea una variable de estado con createContext: 
export const DataContext = createContext([]);

// Crea una funcion
export const useDataContext = () => useContext(DataContext);

// Crea una funcion donde iran todos los estados, variables y datos globales
// que se le van a pasar a los "hijos":

export const DataContextProvider = ({ children }) => {
    //* funciones, datos,es 

    return (
        <DataContext.Provider value={{dato, funciones, estados}}>
            {children}
        <DataContext.Provider/>
    )
}

3. Llama el componente DataContext en el componente principal App.jsx y 
encapsula el resto de elementos que seran los hijos del contexto y podran
a la informacion global. Ejemplo:

import { DataContextProvider } from "./context/DataContext";

function App() {
  return (
    <>
        <CoinContextProvider>
          <Navbar />
          <Main>
          ...
         </Main>
          <Footer />
        </CoinContextProvider>
    </>
  );
}

4. Para acceder desde los componentes a las informacion globlal, tenemos
que hacerlo mediante use

const ComponenteHijo = () => {

// Se puede desestructurar los props que queremos traer desde el DataContext. Ejemplo:

const {dato1, funcionA, Array} = useDataContext()

// De esta forma ya tenemos los datos disponibles


}



*/
