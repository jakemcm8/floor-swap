import Link from 'next/link'

export default function ProfileButton () {
  return (
    <div className="group text-right">
      <Link href="/portfolio" className="bg-slate-400 opacity-80 rounded-full py-1 px-2 mt-4 mr-8 right-0 text-xl z-10 fixed hover:border-2 hover:border-black">0x3ae...8c9</Link>
      <div className="hidden group-hover:block bg-gray-300 p-8 rounded-lg absolute w-64 right-0 top-0 mt-[15px] mr-[30px] z-5">
        <div className="relative mt-4 grid gap-2">
          <div>
            <Link href="/portfolio" className="hover:border-2 hover:border-black rounded-lg p-2">Profile</Link>
          </div>
          <div>
            <Link href="/" className="hover:border-2 hover:border-black rounded-lg p-2">Settings</Link>
          </div>
        </div>
      </div>
    </div>

  )
}