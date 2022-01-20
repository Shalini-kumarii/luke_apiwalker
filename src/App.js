import logo from './logo.svg';
import './App.css';
import People from './components/People'
import Planets from './components/Planets';
import Home from './components/Home';
// import { useHistory } from "react-router-dom";
import {
  BrowserRouter,
  Switch,
  Route,
  useHistory
} from "react-router-dom";

function App() {
  // const history = useHistory();
  // console.log(history);
  return (
    <div className="App">

      <BrowserRouter>
        <Home />
        <Switch>

          <Route path="/people/:id">
            <People />
          </Route>
          <Route path="/planets/:id">
            <Planets />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
