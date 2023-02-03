import Image from 'next/image'

export default function Scrollbar () {
  return (

    // Eventually add function for choosing images to display e.g. from a json file

    <div className="grid grid-cols-3">
      <Image src="/nfts/mil_1001.jpeg"
        className="p-2"
        height="500"
        width="500"
        alt="milady twin"
      />
      <Image src="/nfts/milady_2050.jpeg"
        className="p-2"
        height="500"
        width="500"
        alt="milady twin"
      />
      <Image src="/nfts/radbro_501.jpeg"
        className="p-2"
        height="500"
        width="500"
        alt="milady twin"
      />
      <Image src="/nfts/remilio_927.jpeg"
        className="p-2"
        height="500"
        width="500"
        alt="milady twin"
      />
      <Image src="/nfts/remilio_1120.jpeg"
        className="p-2"
        height="500"
        width="500"
        alt="milady twin"
      />
      <Image src="/nfts/remilio_9228.jpeg"
        className="p-2"
        height="500"
        width="500"
        alt="remi sss rank"
      />
      <Image src="/nfts/milady_4070.jpeg"
        className="p-2"
        height="500"
        width="500"
        alt="remi sss rank"
      />
      <Image src="/nfts/radbro_1255.jpeg"
        className="p-2"
        height="500"
        width="500"
        alt="panda radbro with shades"
      />
      <Image src="/nfts/milady_3204.jpeg"
        className="p-2"
        height="500"
        width="500"
        alt="remi sss rank"
      />
      <Image src="/nfts/milady_7654.jpeg"
        className="p-2"
        height="500"
        width="500"
        alt="remi sss rank"
      />
    </div>



  )

}