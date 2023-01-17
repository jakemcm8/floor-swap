import Link from 'next/link'

export default function Navbar () {
  return (
    <div className='absolute left-1/2 font-extrabold opacity-80 text-gray-700 flex-row mt-96 gap-x-12'>
      <Link href="/lending">Borrow/Lend</Link>
      <Link href="/portfolio">Portfolio</Link>
      <Link href="/staking">Staking</Link>
    </div>
  )
}