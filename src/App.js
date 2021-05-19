import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Bottombar from './components/layout/Bottombar';
import Addmove from './components/home/Addmove';
import Login from './components/landing/Login';
import SignUp from './components/landing/Signup';
import More from './containers/More';
import Navbar from './components/layout/Navbar';
import NewRecord from './components/home/NewRecord';
import Home from './containers/Home';
import Landing from './containers/Landing';
import Showpage from './containers/Movement';
import Profile from './components/more/Profile';

function App() {
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
          <Route exact path="/more" component={More} />
          <Route exact path="/profile" component={Profile} />
        </Switch>

        <Bottombar />
      </Router>
    </div>
  );
}

export default App;
