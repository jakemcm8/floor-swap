import React, { useState } from 'react'

export default function Hamburger () {

  const [isClosed, setIsClosed] = useState(true);

  return (
    <button onClick={() => setIsClosed(false)} onClick={() => console.log(isClosed)}>
      <img src="/hamburger-menu.png"></img>
    </button>
  )
}