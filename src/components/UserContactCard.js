import React from 'react';
import user from '../images/user.png';

const UserContactCard = (props) => {
    const {id, name, email, phone, skill, hobby} = props.user;
    return (
        <div className = "item">
            <img className = "ui avatar image" src = {user} alt = "user" />
                <div className = "content">
                    <div className = "header">{name}</div>
                    <div>Email: {email}</div>
                    <div>Phone Number: {phone}</div>
                    <div>Skillsets: {skill}</div>
                    <div>Hobby: {hobby}</div>
                    <div>
                    <i className = "trash alternate outline icon"
                    style={{color: "red", marginTop: "7px" }}
                    onClick = {() => props.clickHander(id)}
                    ></i>
                    </div>
                </div>
            </div>
    );
}; 

export default UserContactCard;