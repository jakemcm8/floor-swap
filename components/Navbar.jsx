import Link from 'next/link'

export default function Navbar () {
  return (
    <div className=" grid place-items-center pb-8">
      <div className='grid grid-cols-3 place-items-center text-3xl font-bold text-cyan-700 mt-16'>
        <Link href="/lending" className="hover:drop-shadow-lg hover:underline hover:underline-offset-4 px-8">Borrow/Lend</Link>
        <Link href="/trade" className="hover:drop-shadow-lg hover:underline hover:underline-offset-4 px-8">Trade</Link>
        <Link href="/stake" className="hover:drop-shadow-lg hover:underline hover:underline-offset-4 px-8">Stake</Link>
      </div>
    </div>

  )
}