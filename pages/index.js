import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import HamburgerButton from '../components/HamburgerButton.jsx'
import Popout from '../components/Popout.jsx'
import Image from 'next/image'
import bg from '/public/slowed-spiraling.gif'


function Home() {

  const [isClosed, setIsClosed] = useState(true);

  function changeState () {
    setIsClosed(false);
  }

  return (
    <div className='bg-[url("https://images.pexels.com/photos/19670/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] h-screen w-screen bg-cover bg-center font-mono'>
      {/* <Image
        src={bg}
        alt="trippy spiral background"
        className="w-screen"
      /> */}

      {/* If isClosed is false, render Popout. If true, render Hamburger */}
      {/* If (X) is pressed in the Popout, isClosed changes to true */}
      {/* isClosed is changed in HamburgerButton when the icon is clicked on */}

      {isClosed ? <HamburgerButton makeOpen={changeState} /> : <Popout makeClosed={setIsClosed} />}
      <Navbar />

      {/* <HamburgerButton makeOpen={changeState} /> */}

    </div>

  );
}

export default Home;