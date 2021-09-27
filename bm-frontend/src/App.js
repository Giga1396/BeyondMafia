import './App.css';
import NotFound from './components/NotFound.js';
import SignUp from './components/SignUp.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { withRouter } from "react-router";


function App() {
  return (
    <div>
    <Router>
    <Switch>

    <Route exact path="/">
    <div className="App">
    <Link to="/signUp"> Sign Up! </Link>
    </div>
    </Route>

    <Route exact path="/signUp">
    <SignUp />
    </Route>


    <Route path='*'>
    <NotFound />
    </Route>


    </Switch>
    </Router>
    </div>
  );
}

export default App;
