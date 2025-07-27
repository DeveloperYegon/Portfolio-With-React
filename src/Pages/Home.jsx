import React from 'react'
import Skills from '../Components/Skills';
import Services from '../Components/Services';
import Hero from '../Components/Hero';
import EduBackround from '../Components/EduBackround';
import Contact from './Contact';
import ProjectPage from './ProjectPage';
import Donate from './Donate';

function Home(){

 


  return (

    <main className='bg-[#182B5C] py-10'>

      <Hero/>
      <Skills/>
      <Services/>
      <EduBackround/>
      <ProjectPage/>
      <Donate/>
     <Contact/>
    </main>
  )
}

export default Home