import React, { useState } from 'react'

export default function Hamburger (props) {

  // const [isClosed, setIsClosed] = useState(true);
  function changeState () {
    props.makeOpen();
  }

  return (
    <div className="pl-2 pt-2">
      <button onClick={changeState} className="fixed bg-white rounded-lg bg-opacity-70 hover:bg-gray-400">
        <img src="/icons/hamburger-menu.png"></img>
      </button>
    </div>
  )
}