import Image from 'next/image'

export default function ProfilePortColumn () {
  return (
    <div className="grid grid-flow-row text-white rounded-lg bg-gray-600 w-1/3 h-48 fixed right-0 mr-16 mt-28">
      <div className="odd:bg-red-500 even:bg-green-400">
        <h1 className="">Filler</h1>
        <p>test00</p>
        <p>test00</p>
        <p>test00</p>
        <p>test00</p>
        <p>test00</p>
        <p>test00</p>
        <p>test00</p>
        <p>test00</p>
        <p>test00</p>
        <p>test00</p>
        <p>test00</p>
        <p>test00</p>
        <Image
        src="/icons/default-avatar-icon-of-social-media-user-vector.jpg"
        alt="default pfp"
        className="rounded-full fixed right-0 top-0 mr-20 mt-[70px]"
        width={150}
        height={150}
        />
      </div>

    </div>
  )
}