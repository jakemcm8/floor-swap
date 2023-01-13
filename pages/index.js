import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx';

function Home() {

  return (
    <div className='flex-grow bg-[url("https://media2.giphy.com/media/l0MYGeMQjSqhQ3UaI/giphy.gif?cid=ecf05e47i90gorx3ru7npbs5waqxsr1f7qihv6lf6qekdteg&rid=giphy.gif&ct=g")] bg-cover bg-center'>
      <h1>Hello, there! Welcome to my project!</h1>
      <Navbar />
    </div>
  );
}

export default Home;