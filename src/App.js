import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
