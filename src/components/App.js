import React, { useState, useEffect} from 'react';
//import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { uuid } from 'uuidv4';
import './App.css';
import Header from './Header';
import RegisterUser from './RegisterUser';
import UserList from './UserList';

function App() {
  //in React hook
  const LOCAL_STORAGE_KEYS = "users";
  const [users, setUsers] = useState([]);

  const registerContactHandler = (user) => {
    console.log(user);
    setUsers([...users, {id: uuid(), ...user }]);
  }

  const removeContactHandler = (id) => {
    const newContactList = users.filter((user) => {
      return user.id !== id;
    });

    setUsers(newContactList);
  }

  useEffect(() => {
    const retrieveUsers = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS));
    if(retrieveUsers) setUsers(retrieveUsers);
  },[])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS, JSON.stringify(users));
  },[users])

  {/*//render list in React
  const users = [
    {
      id: "1",
      "name":"Alen",
      "email":"alen@gmail.com"
    },
    {
      id: "2",
      "name":"Beckham",
      "email":"beckham@gmail.com"
    }
  ]; */}
  
  return (
    <div className = "ui container">
        <Header />
        {/* <Route path = "/add" Component = {RegisterUser} /> */}
        {/* <Route path = "/home" Component = {UserList} /> */}
        <RegisterUser registerContactHandler = {registerContactHandler} />
        <UserList users={users} getUserId = {removeContactHandler} />
    </div>
  );
}

export default App;
