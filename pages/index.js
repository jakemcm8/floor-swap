import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import HamburgerButton from '../components/HamburgerButton.jsx'
import Image from 'next/image'
import bg from '/public/slowed-spiraling.gif'


function Home() {

  return (
    <div className='bg-[url("https://images.pexels.com/photos/19670/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] h-screen w-screen bg-cover bg-center'>
      {/* <Image
        src={bg}
        alt="trippy spiral background"
        className="w-screen"
      /> */}
      {/* <h1 className="py-16">Hello, there! Welcome to my project!</h1>
      <h1 className="py-16">Hello, there! Welcome to my project!</h1>
      <h1 className="py-16">Hello, there! Welcome to my project!</h1>
      <h1 className="py-16">Hello, there! Welcome to my project!</h1>
      <h1 className="py-16">Hello, there! Welcome to my project!</h1>
      <h1 className="py-16">Hello, there! Welcome to my project!</h1>
      <h1 className="py-16">Hello, there! Welcome to my project!</h1>
      <h1 className="py-16">Hello, there! Welcome to my project!</h1>
      <h1 className="py-16">Hello, there! Welcome to my project!</h1> */}
      <HamburgerButton />
      <Navbar />
    </div>

  );
}

export default Home;