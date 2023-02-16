import Link from 'next/link'
import LogoButton from '../components/LogoButton.jsx'

export default function About() {
  return (
    <div className='bg-[url("../public/backgrounds/blue_splatter.png")] fixed bg-cover overflow-auto h-full w-full font-mono'>
      <LogoButton />
      <div>
        <Link href="/" className="text-3xl text-indigo-600 font-mono font-extrabold hover:drop-shadow-lg hover:underline hover:underline-offset-4">Home</Link>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center">
          <h1 className="font-extrabold mb-32 py-16 text-7xl text-white">About Us</h1>
        </div>
        <div className="flex justify-center border-b-2 content-center w-24"></div>
        <div className="flex justify-center">
          <h2 className="p-4 mt-32 text-xl bg-slate-400 rounded-md bg-opacity-50">"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</h2>
        </div>
      </div>
    </div>
  )
}