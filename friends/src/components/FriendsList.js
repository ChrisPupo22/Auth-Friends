import React, { useState, useEffect} from 'react';
import axiosWithAuth from '../utils/AxiosWithAuth.js';


const FriendsList = (props) => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
        .then(res => {
            setFriends(res.data);
        })
        .catch(err => console.log(err.response))
    }, []);

    return(
        <div>
            <h2>Friends</h2> 
            {friends.map(friend => {
                return <div key={friend.id}>{friend.name}</div>;
            })}
        </div>
    )
}

export default FriendsList; 