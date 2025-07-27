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

  // Assigning years to projects for the timeline (you can adjust these as needed)
  const timelineProjects = projects.map((project, index) => ({
    ...project,
    year: '', // Example: 2024 - Present, 2023 - 2024, etc.
    // `202${4 - index} - ${index === 0 ? 'Present' : `202${5 - index}`}`
  }));

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#182B5C] to-[#46567C] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full mx-auto bg-[#46567C]/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-10">
        {/* Title */}
        <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
          Projects
        </h1>
        <hr className="w-1/2 mx-auto h-1 bg-[#ED7D3B] rounded mb-8" />

        {/* Right-Aligned Timeline */}
        <div className="relative max-w-4xl mx-auto py-10">
          {/* Vertical Line (Right Side) */}
          <div className="absolute right-6 top-0 h-full w-1 bg-[#ED7D3B]"></div>

          {/* Timeline Entries */}
          {timelineProjects.map((project, index) => (
            <div key={project.id} className="relative flex items-start mb-10 justify-end">
              {/* Dot (Right Side) */}
              <div className="absolute right-4 w-5 h-5 bg-[#ED7D3B] rounded-full border-4 border-white"></div>

              {/* Content (Left of the Line) */}
              <div className="mr-16 text-right max-w-md">
                {/* Year Range */}
                <div className="text-[#ED7D3B] font-semibold text-lg">{project.year}</div>

                {/* Image and Title (Clickable) */}
                <div className="mt-2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-16 h-16 object-cover rounded-lg ml-auto"
                  />
                  <p
                    onClick={() => openModal(project)}
                    className="mt-2 text-[#ED7D3B] font-bold text-base cursor-pointer hover:underline"
                  >
                    {project.title}
                  </p>
                </div>

                {/* Description */}
                <p className="mt-2 text-white ">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <Modal show={true} onClose={closeModal}>
            <div className="text-center m-5">
              <p className="text-black text-xl sm:text-2xl m-5 font-bold">{selectedProject.title}</p>
              <hr className="m-auto w-1/2 h-1 bg-[#ED7D3B] rounded mb-6" />
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-32 h-32 sm:w-40 sm:h-40 m-auto rounded-lg border border-slate-900"
              />
              <p className="text-black font-bold italic mt-4">
                Frontend Technologies:{' '}
                <span className="text-green-500">{selectedProject.frontend}</span>
              </p>
              <p className="text-black font-bold italic mt-2">
                Backend Technologies:{' '}
                <span className="text-green-500">{selectedProject.backend}</span>
              </p>
              <p className="text-black mt-4">{selectedProject.description}</p>
              <p className="text-black mt-4">
                Browse here:{' '}
                <span className="text-green-500">
                  <Link to={selectedProject.webLink} target="_blank" className="underline hover:text-green-600">
                    {selectedProject.webLink}
                  </Link>
                </span>
              </p>
            </div>
          </Modal>
        )}
      </div>
    </main>
  );
}

export default ProjectPage;