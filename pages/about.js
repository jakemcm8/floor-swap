import Link from 'next/link'

export default function About() {
  return (
    <>
      <div>
        <Link href="/" className="text-3xl text-indigo-600 font-mono font-extrabold hover:drop-shadow-lg hover:underline hover:underline-offset-4">Home</Link>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center">
          <h1 className="mb-32 py-16 text-7xl">About Us</h1>
        </div>
        <div className="flex justify-center border-b-4 items-center">Hello?</div>
        <div className="flex justify-center">
          <h2 className="p-4 text-xl bg-slate-400 rounded-md bg-opacity-50">"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</h2>
        </div>
      </div>

    </>
  )
}