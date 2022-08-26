import React from 'react';
import { useNavigate } from "react-router-dom";
import { NavBarContainer} from 'styles/components/Navbar';

const NavBar = ({ setShow, getShow }) => {
  const navigate = useNavigate();
  const signIn=()=>{
     navigate('/login')
  }
  return (
    <>
      <NavBarContainer>
        <div onClick={signIn}>SignIn</div> 
      </NavBarContainer>
    </>
  )
}
//test
export default NavBar
