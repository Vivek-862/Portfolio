import React,{useRef} from 'react'
import {animate,motion} from "framer-motion";
import Typewriter from "typewriter-effect";
import {BsArrowUpRight,BsChevronDown} from "react-icons/bs";
import me from "../assets/vivekimg.jpg";



const Home = () => {

  const clientCount= useRef(null);
  const projectCount= useRef(null);

  const animationClientsCount= ()=>{
    animate(0, 100, {
      duration: 1,
      onUpdate: (v) => (clientCount.current.textContent=v.toFixed()),
    })
  }

  
  const animationProjectCount= ()=>{
    animate(0, 15, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent=v.toFixed()),
    })
  }
  const animations ={
    h1: {
        initial: {
          x: "-100%",
          opacity: 0,
        },
        whileInView: {
          x: 0,
          opacity: 1,
        },
      },

      button: {
        initial: {
          x: "-100%",
          opacity: 0,
        },
        whileInView: {
          y: 0,
          opacity: 1,
        },
      }, 
     }

  return (
    <div id="home">
    <section>
        <div>
         <motion.h1 {...animations.h1}>
          
         
            Hi, I Am <br/> Vivek Yadav
         </motion.h1>

         <Typewriter
          options={{
          strings:["A Developer","A Designer","A Creator"],
          autoStart:true,
          loop: true,
          cursor:" ",
          wrapperClassName:"typewriterpara",
         }}
         
         />
         <div>
          <a href="mailto:yadav7738vivvek@gmail.com">Hire me</a>
          <a href="https://github.com/Vivek-862">
            Projects<BsArrowUpRight/>
            </a>
         </div>

         <article>
          <p>
            +<motion.span whileInView={animationClientsCount} ref={clientCount}>100</motion.span>
          </p>

          <span>DSA problems Solved</span>
                  
          </article>

         <aside>
          <article>
            <p>
              +<motion.span whileInView={animationProjectCount} ref={projectCount}>15</motion.span>
            </p>
            <span>Project Done</span>
          </article>
          <article data-special>
            <p>Contact</p>
            <span>+91-9004041885</span>
          </article>

         </aside>



        </div>
    </section>
    <section>
      <img src={me} alt="Vivek"  />
    </section>
    <BsChevronDown/>

    </div>
  )
}

export default Home;