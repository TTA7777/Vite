import React from 'react'
import './skill.scss'
import ProgressBar from "@ramonak/react-progress-bar";
import { animate, motion } from 'framer-motion';
const variants={
  initial:{
  opacity:0,
  x:0,
  y:100,
  },
  animate:{
   opacity:1,
   x:0,
   y:0,
   transition:{
    duration:1,
    staggerChildren:0.5,
   }

  }
}
const Skill = () => {

  return (
   <>
   <div className='container'>
   <motion.h1 className='title' initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}> SKill</motion.h1>
   <motion.div className='skillItem' variants={variants} initial="initial" whileInView="animate"> 
    <div className="skillItems">
      <p>HTML</p>
      <ProgressBar completed={60} animateOnRender={true} bgColor='rebeccapurple' />
    </div>
    <div className="skillItems" >
      <p>CSSL</p>
      <ProgressBar completed={65} animateOnRender={true} bgColor='rebeccapurple' />
    </div>
    <div className="skillItems" >
      <p>JavaScript</p>
      <ProgressBar completed={50} animateOnRender={true} bgColor='rebeccapurple'  />
    </div>
    <div className="skillItems" >
      <p>React</p>
      <ProgressBar completed={60} animateOnRender={true} bgColor='rebeccapurple' />
    </div>
    <div className="skillItems" >
      <p>Next</p>
      <ProgressBar completed={50} animateOnRender={true}  bgColor='rebeccapurple' />
    </div>
    <div className="skillItems" >
      <p>MERN STACK</p>
      <ProgressBar completed={50} animateOnRender={true} bgColor='rebeccapurple' />
    </div>
  </motion.div>
  </div>
   </>
  )
}
 
export default Skill
