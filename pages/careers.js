import Link from 'next/link'
import LogoButton from '../components/LogoButton.jsx'

export default function Careers () {
  return (
    <div className='bg-[url("../public/backgrounds/blue_splatter.png")] fixed bg-cover overflow-auto h-full w-full font-mono'>
      <LogoButton />
      <Link href="/" className="text-3xl text-indigo-600 font-extrabold hover:drop-shadow-lg hover:underline hover:underline-offset-4">Home</Link>
      <h1>Insert info here</h1>
    </div>

  )
}