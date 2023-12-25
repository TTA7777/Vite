import './contact.scss'
import {motion} from "framer-motion"
import emailjs from "@emailjs/browser";
import { useRef,useState } from 'react';
const variants={
    initial:{
        opacity:0,
        y:500,
    },
    animate:{
        opacity:1,
        y:0,
        transition:{
            duration:0.5,
            staggerChildren:0.1
        }
    }
}
const Contact = () => {
  const formRef=useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hy4np7j', 'template_t99zmfi', formRef.current, 'pVtPIDpkxeYCH8uVr')
    .then(
      (result) => {
        setSuccess(true)
      },
      (error) => {
        setError(true);
      }
    );
};
  return (
    <motion.div className='contact' variants={variants} initial="initial" whileInView="animate">
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's work together</motion.h1>
        <motion.div className="item" variants={variants}>
            <h2>Mail</h2>
            <span>toetoe7774@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
            <h2>Address</h2>
            <span>31*32/76*77 Mandalay</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
            <h2>Phone</h2>
            <span>+959-797315285</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <form ref={formRef} onSubmit={sendEmail} >
            <input type="text" required placeholder='Name' name="name"/>
            <input type="email" required placeholder='Email' name="email"/>
            <textarea rows={8} placeholder="Message" name="message" />
           <button>Submit</button>
           {error && "Error"}
          {success && "Success"}
        </form>   
      </div>
    </motion.div>
  )
}

export default Contact
