import React from 'react'

function ProjectDisplay(props) {
    const {blog, project} = props;
    //console.log(blog);
    //console.log('props.id:', props.id);// Debug log

     // Ensure project exists before rendering
  if (!project || !project.image) {
    return <div>Project data not available.</div>;
  }
  return (

    <div className='items-center flex flex-col p-5 border border-slate-950 m-5 h-full text-center'>
        <div className=''>
            <img className="border border-slate-950 h-[300px]" src={project.image} alt="" />
        </div>
        
        <div>
            <h2 className='p-5 text-xl'>Project Title: {project.title}</h2>
            <p className='text-left'>{project.description}</p>

        </div>


    </div>
  )
}

export default ProjectDisplay