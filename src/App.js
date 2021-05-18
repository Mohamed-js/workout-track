import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Bottombar from './components/Bottombar.jsx';
import Addmove from './components/home/Addmove.jsx';
import Login from './components/landing/Login.jsx';
import SignUp from './components/landing/Signup.jsx';
import Navbar from './components/Navbar.jsx';
import NewRecord from './components/NewRecord.jsx';
import Home from './containers/Home.jsx';
import Landing from './containers/Landing.jsx';
import Showpage from './containers/Movement.jsx';

function App() {
  const loggedin = JSON.parse(sessionStorage.getItem('current_user'));

  return (
    <div className="App">
      <Router>
        <Navbar back="true" />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/new" component={Addmove} />
          <Route exact path="/show/:id" component={Showpage} />
          <Route exact path="/new-record" component={NewRecord} />
        </Switch>

        {loggedin && <Bottombar />}
      </Router>
    </div>
  );
}

export default App;
