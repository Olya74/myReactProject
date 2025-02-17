import React from 'react'
import Aside from '../../components/aside/Aside'
import Aside2 from '../../components/aside/Aside2'
import Main from '../../components/Main/Main'
import './home.css'
function Home() {
  return (
    <div className="homeContainer">
      <Aside />
      <Aside2 />
      <Main />
    </div>
  );
}

export default Home
