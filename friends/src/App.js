import React from 'react';
import './App.css';
import Login from './components/Login';
import FriendsList from './components/FriendsList'
import { Route } from 'react-router-dom';



function App() {
 return (
   <div className="App">
    <Route path="/login" component={Login} />
    <Route path="/friends" component={FriendsList} />
   </div>
 );
}
export default App;
