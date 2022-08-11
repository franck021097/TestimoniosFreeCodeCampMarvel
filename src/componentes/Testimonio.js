import React from 'react';
import '../hojas-de-estilo/Testimonio.css'

class Testimonio extends React.Component{
  render(){
    return(
      <div className='contenedor-testimonio'>
        <img 
          className='imagen-testimonio'
          src={require(`../imagenes/${this.props.imagen}`)}
          alt={`Foto de ${this.props.nombre}`} />
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'>{this.props.prefijo}{this.props.nombre}</p>
          <p className='cargo-testimonio'>Su puesto es <strong>{this.props.puesto}</strong></p>
          <p className='texto-testimonio'>"{this.props.frase}"</p>
        </div>
      </div>
    );   
  }
}


export default Testimonio;