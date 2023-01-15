import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Image from 'next/image'
import bg from '/public/slowed-spiraling.gif'


function Home() {

  return (
    <div className=".backgroundImage-trippy">
      {/* <Image
        src={bg}
        alt="trippy spiral background"
        className="w-screen"
      /> */}
      <h1>Hello, there! Welcome to my project!</h1>
      <Navbar />
    </div>

  );
}

export default Home;