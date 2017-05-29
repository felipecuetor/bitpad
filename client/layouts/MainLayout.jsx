import React from 'react';
import Navbar from '../../imports/Navbar'
export const MainLayout=({content})=>(
	<div className="main-layout">
  <div>
  <header>
  <br />
  <Navbar />
  <br />
  </header>
  <div className="content">
  <main>
<div id="rpgMenuContainer">
</div>
  {content}
  </main>
  </div>
  </div>
  </div>
  )
