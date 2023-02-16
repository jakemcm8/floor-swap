import Link from 'next/link
import LogoButton from '../components/LogoButton.jsx''

export default function Lending () {
  return (
    <div className='bg-[url("../public/backgrounds/green_splatter.png")] fixed bg-cover overflow-auto h-full w-full font-mono'>
      <LogoButton />
      <div>
        <Link href="/" className="text-3xl text-indigo-600 font-mono font-extrabold hover:drop-shadow-lg hover:underline hover:underline-offset-4">Home</Link>
      </div>
    </div>
  )
}