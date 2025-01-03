import React from 'react'
import Item from '../Components/Item'
import projects  from '../assets/projects'

function ProjectPage() {
  return (
    <div className='bg-[#fff] text-[#182B5C] mt-5 h-full'>

      <h1 className='text-center text-xl p-5 '>Projects</h1>
      <hr className='m-auto w-[80%] h-1 bg-black' />


      <div className='h-full md:m-10 m-5 grid md:grid-cols-4 gap-4'>
      {projects.map((project) => {
        return <Item 
        key={project.id} 
        id={project.id}
        image={project.image} 
        name={project.name} 
        description={project.description} 
        type="project" 
        />
      })}
      </div>



    </div>
  )
}

export default ProjectPage