import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './components/Login/Login';


const App = (props) => {

  
  return (
    <BrowserRouter>
      <div className = "app-wrapper">
        <HeaderContainer/>
        <Navbar store={props.store}/>
        
        <div className = "app-content">
          {/* <Route path = '/profile' component = {Profile}/>
          <Route path = '/dialogs' component = {Dialogs}/> */}

          <Route path = '/profile/:userId?' 
              render={ () => <ProfileContainer store={props.store}/>}/>
          
          <Route path = '/dialogs' 
              render={ () => <DialogsContainer store={props.store}/>}/>

          <Route path = '/users' 
              render={ () => <UsersContainer/>}/>

          <Route path = '/login' 
              render={ () => <Login/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
} 

export default App;
