import Link from 'next/link'

export default function Navbar () {
  return (
    <div className='font-extrabold opacity-80 text-gray-700 flex flex-col'>
      <Link href="/lending">Borrow/Lend</Link>
      <Link href="/portfolio">Portfolio</Link>
      <Link href="/staking">Staking</Link>
    </div>
  )
}