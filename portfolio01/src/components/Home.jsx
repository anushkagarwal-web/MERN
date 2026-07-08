import React from 'react'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'

const Home = () => {
  return (
    <>
      <div className="home">
        <img src='src/assets/imgmern.png'  width="100%" height="650"/>
        <About />
        <Skills />
        <Projects />
      </div>
    </>
  )
}

export default Home
