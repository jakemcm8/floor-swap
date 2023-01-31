import Link from 'next/link'

export default function Navbar () {
  return (
    <div className=" grid place-items-center pb-8">
      <div className='grid grid-cols-3 place-items-center text-3xl text-cyan-700 mt-16'>
        <Link href="/lending" className="hover:drop-shadow-lg hover:underline hover:underline-offset-4 px-8">Borrow/Lend</Link>
        <Link href="/portfolio" className="hover:drop-shadow-lg hover:underline hover:underline-offset-4 px-8">Portfolio</Link>
        <Link href="/staking" className="hover:drop-shadow-lg hover:underline hover:underline-offset-4 px-8">Staking</Link>
      </div>
    </div>

  )
}