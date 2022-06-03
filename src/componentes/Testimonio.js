import React from 'react';
import '../styles/Testimonio.css'; // importamos la hoja de estilos

function Testimonio (props) {

  return (
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'
        src={ require(`../imagenes/testimonio-${props.imagen}.png`) }
        alt='fotografia' />

      <div className='contendor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className='cargo-testimonio'>
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );

}

export default Testimonio;