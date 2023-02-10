import React, { useState } from 'react';
import Image from 'next/image'

import Navbar from '../components/Navbar.jsx';
import HamburgerButton from '../components/HamburgerButton.jsx'
import Popout from '../components/Popout.jsx'
import Scrollbar from '../components/ImgScrollbar.jsx'
import ProfileButton from '../components/ProfileButton.jsx'


function Home() {

  const [isClosed, setIsClosed] = useState(true);

  function makeOpen () {
    setIsClosed(false);
  }

  return (

    <div className='bg-[url("../public/backgrounds/spink_splatter.png")] fixed bg-cover overflow-auto h-full w-full font-mono'>


      {/* If isClosed is false, render Popout and hidden HamButton. If true, render Button*/}
      {/* If (X) is pressed in the Popout, isClosed changes to true */}
      {/* isClosed is changed in HamburgerButton when the icon is clicked on */}
      <div className="bg-black opacity-80 fixed w-full">
        <Navbar />
      </div>
      <ProfileButton />
      {isClosed ? <HamburgerButton makeOpen={makeOpen}/> : <><Popout makeClosed={setIsClosed} /></>}

      <Scrollbar />

    </div>


  );
}

export default Home;