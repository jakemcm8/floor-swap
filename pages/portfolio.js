import Link from 'next/link'
import Image from 'next/image'
import LogoButton from '../components/LogoButton.jsx'

import ImgScrollbar from '../components/ImgScrollbar.jsx'
import ProfilePortColumn from '../components/ProfilePortColumn.jsx'
import Navbar from '../components/Navbar.jsx'

export default function Portfolio () {
  return (
    <div className='bg-[url("../public/backgrounds/spink_splatter.png")] fixed bg-cover h-full w-full font-mono overflow-auto'>
      <LogoButton />
      <div className="bg-black opacity-80 fixed w-full">
        <Navbar />
      </div>
      <Link href="/" className="text-3xl text-indigo-600 font-mono font-extrabold hover:drop-shadow-lg hover:underline hover:underline-offset-4 absolute">Home</Link>
      {/* <ImgScrollbar /> */}
      <div className="flex flex-col place-items-center mt-32">
        <div className="text-4xl py-16 text-white flex-none">
          <h1> (0x223...121)'s Portfolio</h1>
        </div>
        <ProfilePortColumn />
      </div>
    </div>
  )
}