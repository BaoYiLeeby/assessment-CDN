import React from 'react';
import UserContactCard from './UserContactCard';

const UserList = (props) => {
    console.log(props);

    const deleteContactHandler = (id) => {
        props.getUserId(id);
    };

    const renderUserList = props.users.map((user) => {
        return(
            <UserContactCard user={user} clickHander = {deleteContactHandler} key = {user.id}></UserContactCard>
        );
    })
    return <div className = "ui celled list">{renderUserList}</div>
};

export default UserList;