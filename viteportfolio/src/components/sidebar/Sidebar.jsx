import { useState } from 'react'
import Links from './Links/Links'
import './Sidebar.scss'
import { motion } from 'framer-motion'
// import { IoClose } from "react-icons/io5";
// import { GiHamburgerMenu } from "react-icons/gi";
import ToggleButton from './toggleButton/ToggleButton'
const variants={
    open:{
        clipPath:"circle(1220px at 50px 50px)",
        transition:{
            delay:0.5,
            type:"spring",
            stiffness:15,
            

        }
    },
    closed:{
        clipPath:"circle(30px at 50px 50px)",
        transition:{
            delay:0.5,
            type:"spring",
            stiffness:400,
            damping:40,

        }
    }
}
const Sidebar = () => {
    const [open,setOpen]=useState(false)
  return (
    <motion.div className='sideBar' animate={open?"open":"closed"}>
      <motion.div className='bg' variants={variants}>
        <Links/>
      </motion.div>
      <ToggleButton setOpen={setOpen}/>
      {/* {open?<button  onClick={()=>setOpen(prev=>!prev)}><IoClose size={20} /></button>:<button><GiHamburgerMenu onClick={()=>setOpen(prev=>!prev)} size={20} /></button>} */}
    </motion.div>
  )
}

export default Sidebar
