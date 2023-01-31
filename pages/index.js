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
    <div>
      <div className='bg-[url("https://images.pexels.com/photos/19670/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] bg-cover h-screen w-screen font-mono'>


        {/* If isClosed is false, render Popout and hidden HamButton. If true, render Button*/}
        {/* If (X) is pressed in the Popout, isClosed changes to true */}
        {/* isClosed is changed in HamburgerButton when the icon is clicked on */}

        <ProfileButton />
        {isClosed ? <HamburgerButton makeOpen={makeOpen}/> : <><Popout makeClosed={setIsClosed} /></>}
        <Navbar />
        <Scrollbar />

      </div>
    </div>


  );
}

export default Home;