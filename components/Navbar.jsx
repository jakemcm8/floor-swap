import Link from 'next/link'

export default function Navbar () {
  return (
    <div className=" mt-16 grid place-items-center">
      <div className='grid grid-cols-3 place-items-center text-3xl text-cyan-700 '>
        <Link href="/lending" className="hover:drop-shadow-lg hover:underline hover:underline-offset-4">Borrow/Lend</Link>
        <Link href="/portfolio" className="hover:drop-shadow-lg hover:underline hover:underline-offset-4">Portfolio</Link>
        <Link href="/staking" className="hover:drop-shadow-lg hover:underline hover:underline-offset-4">Staking</Link>
      </div>
    </div>

  )
}