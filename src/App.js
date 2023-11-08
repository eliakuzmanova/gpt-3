import React from 'react'

import {Footer, Blog, Header, Features, Possibility, WhatGPT3} from './containers'
import {Cta, Brand, Navbar} from './components'

const App = () => {
  return (
    <div>
       <div className="gradient__bg">
        <Navbar/>
        <Header/>
       </div>
       <Brand/>
       <WhatGPT3/>
       <Features/>
       <Possibility/>
       <Cta/>
       <Blog/>
       <Footer/>
    </div>
  )
}

export default App