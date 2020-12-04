import {Fragment, useState, useEffect} from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4000";

const Mensajes = ({token}) =>{
    const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.emit("FromAPI", "Hola Mundito")
  }, []);

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", data => {
        setResponse(data)
      });
  }, []);


  return (
    <p>
      {response}
    </p>
  );

}

export default Mensajes;