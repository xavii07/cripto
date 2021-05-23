import React from 'react'
import { ContResumen } from '../styled'
import 'boxicons';
import PropTypes from 'prop-types'

  
  const Cotizacion = ({resultado}) => {

   if(Object.keys(resultado).length === 0) return null

      return (
          <div>
              <h2>{resultado.FROMSYMBOL} <box-icon type="solid" name="right-arrow-alt" color='springgreen' animation='flashing'></box-icon> {resultado.TOSYMBOL}</h2>
              <ContResumen>
                  <h1>{resultado.PRICE}</h1>
                  <p>Precio mas alto del día: {resultado.HIGHDAY}</p>
                  <p>Precio mas bajo del día: {resultado.LOWDAY}</p>
                  <p>Variación 24H: {resultado.CHANGEPCT24HOUR}%</p>
                  <p>Actualización: {resultado.LASTUPDATE}</p>
              </ContResumen>
          </div>
      )
  }


  Cotizacion.propTypes = {
    resultado: PropTypes.object.isRequired
  }
  
  export default Cotizacion
                        