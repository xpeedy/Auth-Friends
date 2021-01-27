import {BrowserRouter as Router} from "react-router-dom";
import {Route} from "react-router";
import PrivateRoute from "./components/privateRoute"
import './App.css';
import FriendForm from './components/addFriendForm';
import LoginForm from './components/loginForm';
import FriendList from "./components/friendList";

function App() {
  return (
    <div className="App">
      <Router >
      <Route  exact path="/" component={LoginForm}/>
      <PrivateRoute path="/friendList" component={FriendList}/>
      <PrivateRoute path="/addfriend" component={FriendForm}/>
      </Router>
    </div>
  );
}


export default App;
