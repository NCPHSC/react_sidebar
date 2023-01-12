import React, { useState } from 'react';
import {motion} from 'framer-motion';
import {FaHome, FaUser,FaSchool, FaBars} from 'react-icons/fa';
import {BiCog} from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

const routes = [
    {
        path:"/",
        name:"Dashboard",
        icon:<FaHome/>,
    },
    {
        path:"/issuer", 
        name:"Issuer",
        icon:<FaSchool/>,
    },
    {
        path:"/users",
        name:"Users",
        icon:<FaUser/>,
    },
    {
        path:"/setting",
        name:"Setting",
        icon:<BiCog/>,
    }
]


const Sidebar = ({children}) => {

    const [isOpen,setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="main-container">
        <motion.div animate={{width: isOpen ? "200px" : "37px"}} className="sidebar">

        <div className="top_section">
           {isOpen &&  <h1 className="logo">CERTY</h1>}
            <div className="bars">
                <FaBars onClick={toggle}/>
            </div>
        </div>

            <section className="routes">
                {routes.map((route) => (
                    <NavLink to={route.path} key={route.name} className="link">
                        <div className="icon">
                            {route.icon}
                        </div>
                        <div className="link_text">
                            {route.name}
                        </div>
                    </NavLink>
                ))}

            </section>
        </motion.div>
        <main>{children}</main>
    </div>
  )
}

export default Sidebar
