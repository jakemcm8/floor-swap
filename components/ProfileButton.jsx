import Link from 'next/link'

export default function ProfileButton () {
  return (
    <div className="text-right fixed mt-4 mr-8 right-0">
      <Link href="/portfolio" className="bg-gray-400 rounded-full py-1 px-2 text-xl">**AddressHere**</Link>
    </div>

  )
}