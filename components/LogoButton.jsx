import Image from 'next/image'
import Link from 'next/link'

const LogoButton = () => {
  return (
    <div className="absolute top-0 right-1/2 z-10">
      <Link href="/" legacyBehavior>
        <div className="inline-block">
          <Image
            src="/icons/logo_2.png"
            alt=""
            height="200"
            width="200"
            className=""
          />
        </div>
    </Link>
    </div>

  )
}

export default LogoButton;