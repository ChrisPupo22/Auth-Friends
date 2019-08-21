import React from 'react';
import './App.css';
import Login from './components/Login';
import { Route, Link } from 'react-router-dom';
import FriendsList from './components/FriendsList'
import { PrivateRoute } from './components/PrivateRoute'


function App() {
 return (
   <div className="App">
   <Link to = '/'>Login</Link>
   <Link to = '/friends'>Friends</Link>
     <header className="App-header">
     <Route exact path ='/' component={Login}  /> 
     <PrivateRoute exact path ='/friends' component={FriendsList} />
     </header>
   </div>
 );
}
export default App;
