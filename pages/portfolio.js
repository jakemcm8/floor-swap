import Link from 'next/link'
import Image from 'next/image'
import ImgScrollbar from '../components/ImgScrollbar.jsx'

export default function Portfolio () {
  return (
    <div className='bg-[url("../public/backgrounds/spink_splatter.png")] fixed bg-cover h-full w-full font-mono overflow-auto'>
      <Link href="/" className="text-3xl text-indigo-600 font-mono font-extrabold hover:drop-shadow-lg hover:underline hover:underline-offset-4">Home</Link>
      {/* <ImgScrollbar /> */}
      <div className="flex flex-col place-items-center">
        <div className="text-4xl py-16 text-white flex-none">
          <h1> (0x223...121)'s Portfolio</h1>
        </div>
        <div className="flex-auto text-white rounded-lg bg-gray-600 w-1/3 h-48 fixed right-0 mr-16 mt-24">
          <h1 className="">Filler</h1>
          <p></p>
        </div>
      </div>
      <div className="">
        <Image
          src="/icons/default-avatar-icon-of-social-media-user-vector.jpg"
          alt="default pfp"
          className="rounded-full fixed right-0 top-0 mr-20 mt-[80px]"
          width={100}
          height={100}
        />
      </div>

    </div>
  )
}