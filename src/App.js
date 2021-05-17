import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Bottombar from './components/Bottombar.jsx';
import Login from './components/landing/Login.jsx';
import SignUp from './components/landing/Signup.jsx';
import Home from './containers/Home.jsx';
import Landing from './containers/Landing.jsx';

function App() {
  const loggedin = JSON.parse(sessionStorage.getItem('current_user'));

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
        </Switch>

        {loggedin && <Bottombar />}
      </Router>
    </div>
  );
}

export default App;
