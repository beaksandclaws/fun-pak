import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import DrumKit from './day01/DrumKit';
import Nav from './global/Nav';
import Home from './global/Home';
import Clock from './day02/Clock.js';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path='/day01' component={DrumKit} />
        <Route path='/day02' component={Clock} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
