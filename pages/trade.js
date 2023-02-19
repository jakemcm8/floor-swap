import Link from 'next/link'
import LogoButton from '../components/LogoButton.jsx'
import ProfileButton from '../components/ProfileButton.jsx'

export default function Portfolio () {
  return (
    <div className='bg-[url("../public/backgrounds/green_splatter.png")] fixed bg-cover overflow-auto h-full w-full font-mono'>
      <ProfileButton />
      <LogoButton />
    </div>
  )
}