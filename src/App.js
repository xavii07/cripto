import React, { useEffect, useState } from 'react';
import Cotizacion from './components/Cotizacion';
import Formulario from './components/Formulario';
import Spinner from './components/Spinner';
import { Contenedor, ContFormulario } from './styled';
import axios from 'axios';





function App() {
  

  //states para guardar los values de moneda y criptomoneda
  const [moneda, setMoneda] = useState('')
  const [criptomoneda, setCriptomoneda] = useState('')
  const [resultado, setResultado] = useState({})
  const [cargando, setCargando] = useState(false)


  useEffect(() => {
    //evitamos que se ejecute la primera vez
    if(moneda === '') return

    //llamada a a la API
    const consultarAPI = async () => {
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
      const {data} = await axios.get(url)
      
      //cambio el estado de cargando para mostrar el spinner
      setCargando(true)

      //Despues de 3s oculto el spinner y paso los datos dela API
      setTimeout(() => {
        setCargando(false)

        setResultado(data.DISPLAY[criptomoneda][moneda])

      }, 3000)


    }
    consultarAPI()
    
  }, [moneda, criptomoneda])


  //mostrar el Spinner o el componente Cotizacion
  const componente = cargando ? <Spinner /> :  <Cotizacion resultado={resultado}/>


  return (
   <Contenedor>

     <h1>Cotiza Criptomonedas</h1>

     <ContFormulario>

       <Formulario 
        setMoneda={setMoneda}
        setCriptomoneda={setCriptomoneda}
       />

      { componente }

     </ContFormulario>

   </Contenedor> 
  );
}

export default App;
