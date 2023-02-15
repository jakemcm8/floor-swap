import Link from 'next/link'

export default function ProfileButton () {
  return (
    <div className="group text-right">
      <Link href="/portfolio" className="bg-gray-300 hover:bg-gray-400 opacity-80 rounded-full py-1 px-2 mt-4 mr-8 right-0 text-xl z-10 fixed">0x3ae...8c9</Link>
      <div className="hidden group-hover:block bg-gray-100 p-8 rounded-lg absolute w-64 right-0 top-0 mt-[15px] mr-[30px] z-5">
        <div className="relative mt-4 grid gap-2">
          <Link href="/portfolio" className="">Profile</Link>
          <Link href="/" className="">Settings</Link>
        </div>
      </div>
    </div>

  )
}