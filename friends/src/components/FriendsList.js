import React from 'react';
import Axios from 'axios';

export default class FriendsList extends React.Component{
    constructor(){
        super()
        this.state ={
            friends: []
        }
    }

    componentDidMount(){
        Axios.get('http://localhost:5000/api/friends')
        .then(response => {
            this.setState({
                friends: response.data
            })
        })
        .catch(error => {'there was an error'})
    }

    render(){
        return(
            <div>
                {this.state.friends.map((item, index) => {
                    return <FriendsList />
                })}
            </div>
        )
    }
}