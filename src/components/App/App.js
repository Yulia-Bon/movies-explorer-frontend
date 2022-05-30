import {
  Route,
} from "react-router-dom";
import './App.css';

import "./App.css";
import Main from "../Main/Maim.js";

function App() {
  return (

        <div className="page__container">
          <Route exact path="/">
            <Main />
          </Route>

          <Route exact path="/signup">

          </Route>

          <Route exact path="/signin">

          </Route>

          <Route path="*">
          </Route>

          <Route>
          </Route>
        </div>

  );
}

export default App;
