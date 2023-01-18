import Link from 'next/link'

export default function Navbar () {
  return (
    <div className="mt-16 grid place-items-center">
      <div className='grid grid-cols-3 place-items-center font-extrabold text-3xl opacity-80 text-gray-300'>
        <Link href="/lending">Borrow/Lend</Link>
        <Link href="/portfolio" className="place-items">Portfolio</Link>
        <Link href="/staking">Staking</Link>
      </div>
    </div>

  )
}