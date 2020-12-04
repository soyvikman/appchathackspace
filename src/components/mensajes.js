import {Fragment, useState, useEffect} from "react";
import Socket from "./Socket";
import { Comment, Tooltip, Avatar } from 'antd';
import socket from "./Socket";

const Mensajes = ({token}) =>{
   const [mensaje, cambiarMensaje] = useState([]);
   const [mensajes, cambiarMensajes] = useState([])

   useEffect(()=>{
     socket.emit("conexion", "Un usuario a ingresado a la sala")
   },[])

   useEffect(()=>{
    socket.on('mensajes', mensaje =>{
      cambiarMensajes([...mensajes, mensaje])
    })
    return () => {socket.off()}
  }, [mensajes])

  const enviarMensaje = (e) => {
    e.preventDefault();
    socket.emit('mensaje', mensaje)
  }


  return (
    <Fragment>
      <div>
        <div className="cuadro-mensajes">
          {mensajes.map((msg)=>(
            <div className="contenedor-chat">{msg.mensaje}</div>
          ))}
        </div>
        <div className="cuadro-texto">
          <div className="contenedor-cuadro">
            <form onSubmit={enviarMensaje}>
            <textarea value={mensaje} onChange={e=>cambiarMensaje(e.target.value)}>Escribe tu mensaje</textarea>
              <button className="boton-mensaje">Enviar</button> 
            </form>
            
          </div>
        </div>
      </div>
    </Fragment>
  )

}

export default Mensajes;