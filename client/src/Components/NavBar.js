import React, { useContext } from 'react';
import LoggedInNavBar from './LoggedInNavBar';
import LoginForm from './LoginForm';
import { UserContext } from '../Context/user';

function NavBar({ setViewPersonalMachines }) {
  const { user } = useContext(UserContext)
  
  return (
    user ?
      <LoggedInNavBar
        setViewPersonalMachines={setViewPersonalMachines}/> :
      <LoginForm />
  )
}

export default NavBar;
