import Link from 'next/link'

export default function Navbar () {
  return (
    <div className=" mt-16 grid place-items-center">
      <div className='grid grid-cols-3 place-items-center font-extrabold text-3xl text-gray-300 bg-red-400'>
        <Link href="/lending">Borrow/Lend</Link>
        <Link href="/portfolio" className="hover:drop-shadow-lg">Portfolio</Link>
        <Link href="/staking">Staking</Link>
      </div>
    </div>

  )
}