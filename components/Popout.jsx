import React, { useState } from 'react'
import Link from 'next/link'

export default function Popout (props) {

  function close () {
    props.makeClosed(true);
  }

  return (
    <div className="fixed block bg-red-500 h-screen w-64 top-0">
      <img src="/close-icon.png" onClick={close} className='absolute right-0'/>
      <div className="flex flex-col font-bold text-2xl">
        <Link href="/docs" className="pt-4 pb-6">Docs</Link>
        <Link href="/about" className="py-6">About</Link>
        <Link href="/careers" className="py-6">Careers</Link>
        <Link href="https://substack.com/" className="py-6">Blog</Link>
      </div>
    </div>
  )
}