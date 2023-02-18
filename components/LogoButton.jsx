import Image from 'next/image'
import Link from 'next/link'

const LogoButton = () => {
  return (
    <div className="fixed flex justify-center w-full mt-1">
      <div className="inline-block">
        <Link href="/">
          <div className="">
            <Image
              src="/icons/logo_2.png"
              alt=""
              height="200"
              width="200"
              className="inline-block"
            />
          </div>
        </Link>
      </div>
    </div>

  )
}

export default LogoButton;