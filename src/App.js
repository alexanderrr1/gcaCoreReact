import './App.css';
import { Merge } from './components/Merge.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Merge.js';
import { DetailView } from './components/DetailView';
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={Merge}/>
          <Route exact path={"/detail"} component={DetailView}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
