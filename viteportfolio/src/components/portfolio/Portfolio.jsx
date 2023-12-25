import React from 'react'
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform} from "framer-motion";
import { useRef } from 'react';
const items = [
  {
    id: 1,
    title: "React Food Website",
    img: "https://media.istockphoto.com/id/1478027754/photo/baked-eggplant.webp?b=1&s=170667a&w=0&k=20&c=X68z4kMP0Tc0UFoMrVE54KjtF16TnXB9r9xHNrncg9w=",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 2,
    title: "Next.js Blog",
    img: "https://i.pinimg.com/236x/3c/c2/dc/3cc2dc0f172b3e7bb280c505b2f9c2db.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 3,
    title: "Vanilla JS App",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 4,
    title: "MERN STACK",
    img: "https://i.pinimg.com/236x/b3/43/aa/b343aa5d2797525bb0593e5eed59fc67.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
];


const Single=({item})=>{
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  )

}
const Portfolio = () => {
  const ref=useRef();
  const {scrollYProgress}=useScroll({
    target:ref,
    offset: ["end end", "start start"]
    
  })
  const scaleX=useSpring(scrollYProgress,{
    stiffness:100,
    damping:30,
  }
    
    );
  return (
    <div className='portfolio' ref={ref}>
     <div className="progess">
      <h1>Featured Works</h1>
      <motion.div style={{scaleX}} className="progressBar">

      </motion.div>
      </div>
      {items.map((item)=>(
        <Single item={item} key={item.id}/>
      ))}
    
    </div>
  )
}

export default Portfolio
