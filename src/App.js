import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Bottombar from './components/Bottombar';
import Addmove from './components/home/Addmove';
import Login from './components/landing/Login';
import SignUp from './components/landing/Signup';
import Logout from './components/Logout';
import Navbar from './components/Navbar';
import NewRecord from './components/NewRecord';
import Home from './containers/Home';
import Landing from './containers/Landing';
import Showpage from './containers/Movement';

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
          <Route exact path="/logout" component={Logout} />
        </Switch>

        {loggedin && <Bottombar />}
      </Router>
    </div>
  );
}

export default App;
