import React, { useState } from 'react'
import Link from 'next/link'

export default function Popout (props) {

  function close () {
    props.makeClosed(true);
  }

  return (
    <div className="bg-white h-screen w-64">
      <img src="/close-icon.png" onClick={close} className="static right-0"/>
      <div className="grid grid-flow-row font-serif font-bold">
        <Link href="/docs" className="py-4">Docs</Link>
        <Link href="/about" className="py-8">About</Link>
        <Link href="/careers" className="py-8">Careers</Link>
      </div>
    </div>
  )
}