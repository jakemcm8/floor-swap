import React, { useState } from 'react'

export default function Hamburger (props) {

  // const [isClosed, setIsClosed] = useState(true);
  function changeState () {
    props.makeOpen();
  }

  return (
    <button onClick={changeState}>
      <img src="/hamburger-menu.png"></img>
    </button>
  )
}