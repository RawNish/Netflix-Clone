import {React,useState,useEffect} from 'react'
import './Nav.css'


function Nav() {

    const[show,handleShow]=useState(false);
    useEffect(() => {
       window.addEventListener("scroll",()=>{
           if(window.scrollY>100){
               handleShow(true)
           }
           else handleShow(false);
       });
       return()=>{
           window.removeEventListener('scroll');
       };
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/1/15/Logonfx.png"
            alt="logo"
            />



            <img 
            className="nav__avatar"
            alt="Netflix Logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            />
        </div>
    )
}

export default Nav
