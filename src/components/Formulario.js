import React, { memo, useEffect, useState } from 'react'
import useCriptomoneda from '../hooks/useCriptomoneda'
import useMoneda from '../hooks/useMoneda'
import Error from './Error'
import { Boton } from '../styled'
import axios from 'axios'
import PropTypes from 'prop-types'





const Formulario = memo(({setMoneda, setCriptomoneda}) => {
    

    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dólar Estadounidense'},
        { codigo: 'ARS', nombre: 'Peso Argentino'},
        { codigo: 'CLP', nombre: 'Peso Chileno'},
        { codigo: 'COP', nombre: 'Peso Colombiano'},
        { codigo: 'EUR', nombre: 'Euro'},
        { codigo: 'MXN', nombre: 'Peso Mexicano'},
        { codigo: 'PEN', nombre: 'Sol Peruano'},
        { codigo: 'GBP', nombre: 'Libra Esterlina'}
    ]

    //state para guardar los tipos de criptomonedas de la API
    const [listadocripto, setListadoCripto] = useState([])
    const [error, setError] = useState(false)


    //custom hook useMoneda
    const [moneda, SelectMoneda] = useMoneda('Elige tu Moneda', '', MONEDAS)

    //custom hook useCriptomoneda
    const [criptomoneda, SelectCriptomoneda] = useCriptomoneda('Elige tu Criptomoneda', '', listadocripto)

    //llamar a la API
    useEffect(() => {
        const llamadaAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
            const {data} = await axios.get(url)
            setListadoCripto(data.Data)
        }

        llamadaAPI()

    },[])



    //funcion cuando el usuario hace click
    const handleSubmit = e => {
        e.preventDefault()

        //validar los inputs
        if(moneda === '' || criptomoneda === '') {
            setError(true)
            return
        }

        //si pasa la validacion
        setError(false)

        //pasar al componente principal
        setMoneda(moneda)
        setCriptomoneda(criptomoneda)
    }





    return (
        <form
            onSubmit={handleSubmit}
        >

            {error && <Error mensaje='Todos los campos son Obligatorios'/>}


            <SelectCriptomoneda />

            <SelectMoneda />

            <Boton 
                type='submit'
                value='Calcular'
            />
            
        </form>
    )
})


Formulario.propTypes = {
    setMoneda: PropTypes.func.isRequired,
    setCriptomoneda: PropTypes.func.isRequired,

}

export default Formulario
