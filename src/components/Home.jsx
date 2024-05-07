import React,{useRef} from 'react'
import {animate,motion} from "framer-motion";
import Typewriter from "typewriter-effect";
import {BsArrowUpRight,BsChevronDown} from "react-icons/bs";
import me from "../assets/Vivekyadavimg.jpg";



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
    <div className='bg-blue-200' id="home">
    <section>
    <div>
        <div>
          <motion.h1 {...animations.h1}>
          
         
           <div className='ml-20 font-semibold text-xl'>Hi, I Am <br/> Vivek Yadav</div>
          </motion.h1>
        </div>
        

         <div className='flex justify-center text-3xl font-thin mb-20 mt-20'>
         <Typewriter
          options={{
          strings:["A Developer","A Designer","A Creator"],
          autoStart:true,
          loop: true,
          cursor:" ",
          wrapperClassName:"typewriterpara",
         }}
         
         
         />
         </div>

         <div className='flex justify-between items-center'>
         <div className='w-auto h-auto h-80 w-full mt-30'>
          <a className='m-10 bg-gray-300 rounded-2xl p-5 font-semibold text-orange-500 text-xl border-2 border-orange-500' href="mailto:yadav7738vivvek@gmail.com">Hire me</a>
          <a className='bg-purple-300 border p-5 text-xl font-semibold text-orange-500 rounded-xl border-2 border-orange-500' href="https://github.com/Vivek-862">
            Projects
            </a>
         </div>
          <div className='mr-24'>
          <img className='h-600 w-80' src={me} alt="Vivek"  />
          </div>
         </div>
         
        

         <div className='m-20 text-3xl text-blue-800 font-bold'>
         <article className=''>
          <p className="mr-40 text-orange-500">
            +<motion.span whileInView={animationClientsCount} ref={clientCount}>100</motion.span>
          </p>

          <span>DSA problems Solved</span>
                  
          </article>

          <article className='mt-10 ml-20'>
            <p className='text-orange-500'>
              +<motion.span whileInView={animationProjectCount} ref={projectCount}>15</motion.span>
            </p>
            <span>Project Done</span>
          </article>


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
      <img className='h-600 w-40' src={me} alt="Vivek"  />
    </section>
    <BsChevronDown/>

    </div>
  )
}

export default Home;