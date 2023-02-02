import Link from 'next/link'

export default function Portfolio () {
  return (
    <div className='bg-[url("../public/backgrounds/spink_splatter.png")] fixed bg-cover bg-repeat-space h-full w-full font-mono overflow-auto'>
      <div>
        <h1 className="text-white">Filler</h1>
      </div>
      <Link href="/" className="text-3xl text-indigo-600 font-mono font-extrabold hover:drop-shadow-lg hover:underline hover:underline-offset-4">Home</Link>

    </div>
  )
}