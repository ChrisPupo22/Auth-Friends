import React from 'react';
import Axios from 'axios';


export default class Login extends React.Component{
   constructor(){
       super()
       this.state = {
           credentials: {
               username: '',
               password: ''
           }
       }
   }
   changeHandler = event => {
       event.preventDefault();
       this.setState({
           credentials: { 
               ...this.state.credentials, 
               [event.target.name]: event.target.value
           }
       })
   }

   onSubmit = (event) => {
       event.preventDefault()
       Axios.post('http://localhost:5000/api/login', this.state.credentials)
       .then(res => {
           console.log(res)
           localStorage.setItem('token', res.data.payload)
       })
       .catch()
   }

   render(){
       return(
           <div>
               <form onSubmit={this.submitHandler}>
                   <input type='text' name='username' onChange={this.changeHandler} value={this.state.username}/>
                   <input type='password' name='password' onChange={this.changeHandler} value={this.state.password} />
                   <button type='submit'>Click Me</button>
               </form>
           </div>
       )
   }
}