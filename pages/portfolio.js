import Link from 'next/link'
import ImgScrollbar from '../components/ImgScrollbar.jsx'

export default function Portfolio () {
  return (
    <div className='bg-[url("../public/backgrounds/spink_splatter.png")] fixed bg-cover h-full w-full font-mono overflow-auto'>
      <Link href="/" className="text-3xl text-indigo-600 font-mono font-extrabold hover:drop-shadow-lg hover:underline hover:underline-offset-4">Home</Link>
      {/* <ImgScrollbar /> */}
      <div className="flex flex-col place-items-center">
        <div className="text-4xl py-16 text-white flex-none">
          <h1>Portfolio</h1>
        </div>
        <div className="flex-auto text-white rounded-md bg-white w-1/3 h-48 relative ">
          <h1 className="">Filler</h1>
        </div>
      </div>

    </div>
  )
}