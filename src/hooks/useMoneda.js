import React, { Fragment, useState } from 'react';
import { Label, Select} from '../styled'


const useMoneda = (label, stateInitial, opciones) => {

    const [state, actualizarState] = useState(stateInitial)
    
    const SelectMoneda = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={e => actualizarState(e.target.value)}
                value={state}
            >
                <option value=''>-- Seleccione --</option>
                { opciones.map(opcion => (
                    <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
                ))}
            </Select>
        </Fragment>
    )

    
    return[state, SelectMoneda]

}
 
export default useMoneda;
