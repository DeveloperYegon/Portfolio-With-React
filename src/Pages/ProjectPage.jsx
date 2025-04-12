import React, { useState } from 'react';
import Modal from '../Pages/Modal';
import { Link } from 'react-router-dom';
import projects from '../assets/projects.js';

function ProjectPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <main className="text-white h-full rounded-xl shadow-lg shadow-[#7a5d4c] p-10 bg-[#46567C] py-3 md:mx-20 my-4">
      <h1 className="text-center text-4xl py-4">Projects</h1>
      <hr className="m-auto w-[50%] h-1 bg-[#ED7D3B]" />

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 m-5">
        {projects.map((project) => (
          <div key={project.id} className="border p-3 rounded-xl">
            <img src={project.image}  alt={project.title} className="w-full rounded-lg" />
            <p
              onClick={() => openModal(project)}
              className="text-center rounded-xl cursor-pointer bg-[#ED7D3B] font-bold p-3 m-3"
            >
              {project.title}
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <Modal show={true} onClose={closeModal}>
          <div className="text-center m-5">
            <p className="text-black text-2xl m-5 font-bold">{selectedProject.title}</p>
            <hr className="m-auto w-[50%] h-1 bg-[#ED7D3B]" />
            <img src={selectedProject.image} alt={selectedProject.title} className="w-[200px] h-[200px]  m-auto rounded-lg border border-slate-900" />
            <p className="text-black font-bold italic ">Frontend Technologies: 
            <span className="text-green-500">
            {selectedProject.frontend}
            </span>
            </p>
            
            <p className="text-black font-bold italic ">Backend Technologies: 
            <span className="text-green-500">
            {selectedProject.backend}
            </span>
            </p>

            <p className="text-black ">{selectedProject.description}</p>
            <p className=" border text-black p-3 rounded-xl">
              Browse here:
              <span className="text-green-500">
                <Link to={selectedProject.webLink} target="_blank">
                  {selectedProject.webLink}
                </Link>
              </span>
            </p>
          </div>
        </Modal>
      )}
    </main>
  );
}

export default ProjectPage;
