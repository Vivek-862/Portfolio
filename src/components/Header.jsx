import React from 'react'

const Header = () => {
  return <nav>
    <NavContent/>
  </nav>;
};

const NavContent = ()=>(
    <>
    <div className='bg-gray-500 h-full w-full'>
    <h2 className="font-bold text-3xl text-black ml-10 ">VIVEK.</h2>
    <div className="pt-4 flex justify-center justify-between items-center text-orange-500 text-xl font-semibold ml-24 mr-24" >
        <a href="#home">Home</a>
        <a href="#experience">Experience</a>
        <a href="#services">Services</a>
        <a href="#tel:9004041885">Contact</a>
    </div>
      <a className="flex justify-center pt-8 w-full font-thin border" href='mailto:yadav7738vivek@gmail.com'><button className=''>Email</button></a>
      </div>
    </>
)

export default Header;