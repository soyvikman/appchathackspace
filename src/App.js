import {Fragment} from "react";
import "antd/dist/antd.css";
import "./index.css"
import Inicial from "./components/inicial";
import {Route, Switch} from "react-router-dom";
import Mensajes from "./components/mensajes"
import Bienvenida from "./components/bienvenida";

function App() {
  return (
      <Fragment>
          <Switch>
              <Route path="/" component={Bienvenida} exact/>
              <Route path="/login" component={Inicial} exact/>
              <Route path="/mensajes" component={Mensajes} exact/>
          </Switch>
      </Fragment>
  );
}

export default App;
