import React, { useState } from 'react'
import Link from 'next/link'

export default function Popout (props) {

  function close () {
    props.makeClosed(true);
  }

  return (
    <div className="fixed block bg-white h-screen w-64 top-0">
      <img src="/close-icon.png" onClick={close} className='absolute right-4 top-1'/>
      <div className="flex flex-col font-bold text-2xl">
        <Link href="/docs" className="pt-12 pb-6 px-4">Docs</Link>
        <Link href="/about" className="py-6 px-4">About</Link>
        <Link href="/careers" className="py-6 px-4">Careers</Link>
        <Link href="https://substack.com/" className="py-6 px-4">Blog</Link>
      </div>
    </div>
  )
}