import React from 'react';
import '../hojas-de-estilo/Testimonio.css'

function Testimonio(props){
  return(
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'
        src={require(`../imagenes/${props.imagen}`)}
        alt='imagen de Iron Man'
      />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>{props.prefijo}{props.nombre}</p>
        <p className='cargo-testimonio'>Su puesto es <strong>{props.puesto}</strong></p>
        <p className='texto-testimonio'>"{props.frase}"</p>
      </div>
    </div>
  );
}

export default Testimonio;