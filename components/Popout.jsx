import React, { useState } from 'react'
import Link from 'next/link'

export default function Popout (props) {

  function close () {
    props.makeClosed(true);
  }

  return (
    <div className="fixed block bg-white h-screen w-64 top-0 ">
      <img src="/icons/close-icon.png" onClick={close} className='absolute right-4 top-1 hover:bg-gray-200 hover:rounded-lg'/>
      <div className="flex flex-col font-bold text-2xl">
        <div className="pt-12 pb-6 px-4">
          <Link href="/docs" className="py-6 px-8 hover:bg-gray-200 rounded-lg">Docs</Link>
        </div>
        <div className="py-6 px-4">
          <Link href="/about" className="py-6 px-8 hover:bg-gray-200 rounded-lg">About</Link>
        </div>
        <div className="py-6 px-4">
          <Link href="/careers" className="py-6 px-8 hover:bg-gray-200 rounded-lg">Careers</Link>
        </div>
        <div className="py-6 px-4">
          <Link href="https://substack.com/" className="py-6 px-8 hover:bg-gray-200 rounded-lg">Blog</Link>
        </div>
      </div>
    </div>
  )
}