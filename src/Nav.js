import React,{useState,useEffect} from 'react'
import './Nav.css';

function Nav() {

  const [show,handleShow]=useState(false);

useEffect(()=>{
  window.addEventListener('scroll',()=>{
    if(window.scrollY>100){
      handleShow(true);
    }
    else{
      handleShow(false);
    }
  });
  return ()=>window.removeEventListener('scroll');

},[])

  return (
    <div className={show?'Nav Nav_black':'Nav'}>
    <img className='Nav_logo' src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2014_logo.svg" alt="Netflix Logo"/>
    <img className='Nav-avatar' src="https://upload.wikimedia.org/wikipedia/commons/5/54/Netflix_logo.png" alt="Avatar"/>
    </div>
  )
}

export default Nav