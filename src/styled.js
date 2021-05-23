import styled from 'styled-components'





export const Contenedor = styled.div`
  width:100%;
  max-width:900px;
  margin:0 auto;
`;

export const ContFormulario = styled.div`
    width:80%;
    margin: 0 auto;

    @media(min-width: 768px) {
        width:60%;
    }

    @media(min-width: 992px) {
        width:50%;
    }
`

//FORMULARIO
export const Boton = styled.input`
    background-color:springgreen;
    color:#555;
    padding:0.3rem;
    width:100%;
    display:block;
    letter-spacing:0.1rem;
    margin:1.2rem auto 1.8rem;
    border:none;
    outline:none;
    font-size:0.9remrem;
    border-radius:10px;
    font-weight:bold;
    transition: background-color .3s ease;

    @media(min-width: 768px) {
        padding:0.5rem;
        font-size:1rem;
    }

    &:hover {
        cursor: pointer;
        color:#000;
    }
`;

//USEMONEDA  y USECRIPTOMONEDA HOOK
export const Label = styled.label`
    color:#fff;
    display:block;
    font-size:0.8rem;
    font-weight:700;
    margin-top:0.9rem;

    @media(min-width: 768px) {
        font-size:1rem;
    }
`;

export const Select = styled.select`
    --webkit-appearance:none;
    font-family: 'Sansita', sans-serif;
    width:100%;
    padding:0.5rem;
    font-size:0.9rem;
    outline:none;
    border:none;
    border-radius:5px;
    margin-top:10px;

    @media(min-width: 768px) {
        font-size:1rem;
    }
`;

//COMPONENTE ERROR
export const ErrorPa = styled.p`
    background-color:rgb(226, 15, 15);
    color:#fff;
    padding:0.3rem;
    border-radius:3px;
    text-align:center;
    font-size:0.7rem;

    @media(min-width: 768px) {
        padding:0.7rem;
        font-size:0.9rem;
    }
`;

//COMPOONENTE COTIZACION
export const ContResumen = styled.div`
    text-align:center;
    margin-top:-1.2rem;
`;