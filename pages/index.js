import React, { useState } from 'react';
import Image from 'next/image'

import Navbar from '../components/Navbar.jsx';
import HamburgerButton from '../components/HamburgerButton.jsx'
import Popout from '../components/Popout.jsx'
import Scrollbar from '../components/ImgScrollbar.jsx'
import ProfileButton from '../components/ProfileButton.jsx'
import ImgCarousel from '../components/ImgCarousel.jsx'



function Home() {

  const images = [
    "/nfts/mil_1001.jpeg",
    "/nfts/milady_2050.jpeg",
    "/nfts/radbro_501.jpeg",
    "/nfts/remilio_927.jpeg",
    "/nfts/remilio_1120.jpeg",
    "/nfts/remilio_9228.jpeg",
    "/nfts/milady_4070.jpeg",
    "/nfts/radbro_1255.jpeg",
    "/nfts/milady_3204.jpeg",
    "/nfts/milady_7654.jpeg"
  ]

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

      <div className="container relative mx-auto mt-60">
        <ImgCarousel images={images} className="z-100"/>
      </div>

    </div>


  );
}

export default Home;