import {Fragment, useState, useEffect} from "react";

const Mensajes = ({token}) =>{
    if(token !== null){
        return(
            <Fragment>
                Hola desde la vista protegida mensajes
            </Fragment>
        )
    } else {
        return(
            <Fragment>
                No tienes acceso a esta página
            </Fragment>
        )
    }

}

export default Mensajes;