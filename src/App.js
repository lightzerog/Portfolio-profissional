import './App.css';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path = "/" exact component = {Home}></Route>
       
      </Switch>
    </Router>
  );
}

export default App;