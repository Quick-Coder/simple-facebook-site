import React from 'react';
import style from './Friends.css'

const Friends = (props) => {
    console.log(props)
    const {img,name,sellary,}=props.friends;
    const addFriend=props.addFriend;
    return (
        <div className='border friend p-2 d-flex justify-content-between align-items-center'>
            <div className="user-img">
                <img src={img} alt="person" width="200px" height='200px'/>
            </div>
            <div className="user-content">
                <h1 className='text-dark'>{name}</h1>
                <h4><b>Stipend: ${sellary}</b></h4>
            </div>
            <div className="user-btn">
                <button onClick={()=>addFriend(props.friends)} className='btn btn-primary w-2 '>add friend</button>
                <button className="btn btn-outline-secondary ml-1">Remove</button>
            </div>
        </div>
    );
};

export default Friends;