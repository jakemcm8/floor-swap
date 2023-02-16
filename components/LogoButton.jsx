import Image from 'next/image'
import Link from 'next/link'

const LogoButton = () => {
  return (
    <div className="fixed flex justify-center w-full z-10 mt-1">
      <Link href="/">
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