import React, { useState } from 'react'

export default function Popout (props) {

  function close () {
    props.makeClosed(true);
  }

  return (
    <div className="bg-white h-screen w-16">
      <img src="/close-icon.png" onClick={close}/>
    </div>
  )
}