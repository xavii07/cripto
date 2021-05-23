import React, { Fragment, useState } from 'react';
import { Label, Select} from '../styled'


const useCriptomoneda = (label, stateInitial, opciones) => {

    const [state, actualizarState] = useState(stateInitial)

    
    
    const SelectCriptomoneda = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={e => actualizarState(e.target.value)}
                value={state}
            >
                <option value=''>-- Seleccione --</option>
                {opciones.map(opcion => (
                    <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>{opcion.CoinInfo.FullName}</option>
                ))}
            </Select>
        </Fragment>
    )

    
    return[state, SelectCriptomoneda]

}
 
export default useCriptomoneda;
