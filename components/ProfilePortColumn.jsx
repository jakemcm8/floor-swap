import Image from 'next/image'

export default function ProfilePortColumn () {
  return (
    <div className="grid grid-flow-row text-white rounded-lg bg-slate-300 w-1/3 h-48 fixed right-0 mr-16 mt-28">
      <ul>
        <li className="first:pt-12 odd:bg-slate-300 even:bg-slate-500">Test</li>
        <li className="odd:bg-slate-300 even:bg-slate-500">Test</li>
        <li className="odd:bg-slate-300 even:bg-slate-500">Test</li>
        <li className="odd:bg-slate-300 even:bg-slate-500">Test</li>
        <li className="odd:bg-slate-300 even:bg-slate-500">Test</li>
      </ul>

      <Image
        src="/icons/default-avatar-icon-of-social-media-user-vector.jpg"
        alt="default pfp"
        className="rounded-full fixed right-0 top-0 mr-20 mt-[70px]"
        width={150}
        height={150}
      />
    </div>
  )
}