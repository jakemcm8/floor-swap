import Link from 'next/link'

export default function ProfileButton () {
  return (
    <div className="text-right">
      <Link href="/portfolio" className="bg-gray-400 rounded-full mr-8 mt-4 px-2">**AddressHere**</Link>
    </div>

  )
}