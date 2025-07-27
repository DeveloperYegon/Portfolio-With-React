import React from 'react'
import educ1 from '../assets/1.png'; //React Basics by Meta in partnership with Coursera
import educ2 from '../assets/2.png';//Introduction to Artificial Intelligence by Udacity in partnership with AWS
import educ3 from '../assets/3.png'; //data entry and data cleaning course on Ajira Digital Kenya
import educ4 from '../assets/4.png';//Digital Marketing by Ajira Digital Kenya
import educ6 from '../assets/6.png'; //project management with google in partner with coursera
import educ7 from '../assets/7.png'; //Power Leran Project Software Development certification
import educ8 from '../assets/8.png'; //kca university bachelor of science in Sofrtware Engineering


function EduBackround() {
   // Placeholder timeline data based on the 8 education images
   const timelineData = [
    {
      year: '2022 - 2024 (BSc in Software Engineering)',
      description: 'Bachelor of Science in Software Engineering from KCA University. Computer Science and Software Engineering program with a focus on full-stack development.',
      image: educ8,
    },
    {
      year: '2024 (Software Development Certification )',
      description: 'Completed  A Software Development certification from Power Learn Project.February cohort.',
      image: educ7,
    },
    {
      year: '2024 (Foundations in Project Management)',
      description: 'Completed a Foundations in Project Management course by Google on Coursera.',
      image: educ6,
    },
    {
      year: '2024 (Introduction to Artificial Intelligence)',
      description: 'I did Introduction to Artificial Intelligence by Udacity in partnership with AWS.',
      image: educ2,
    },
    {
      year: '2024 (React Basics)',
      description: 'I completed a React Basics course by Meta on Coursera.',
      image: educ1,
    },
    {
      year: '2023 (Data Entry and Data Cleaning)',
      description: 'I did a Dataentry and Data Cleaning course on Ajira Digital  Kenya.',
      image: educ3,
    },
    {
      year: '2023 (Digital Marketing and E-commerce)',
      description: 'Completed a Digital Marketing and E-commerce course on Ajira Digital Kenya.',
      image: educ4,
    },
   
    
   
   
    
  ];

  return (
   <main className=' text-[#fff] h-50vh rounded-xl shadow-lg shadow-[#7a5d4c] p-10  bg-[#46567C]  py-3 md:mx-20 m-3 '>
      
    <h3 className='text-center font-bold md:text-4xl py-4'>Educational Background</h3>
    <hr className='bg-[#ED7D3B] h-1 w-[50%] m-auto'/>
    <div className='h-full p-5'>
      <div className="relative max-w-4xl mx-auto py-10 px-4">
      {/* Vertical Line */}
      <div className="absolute left-6 top-0 h-full w-1 bg-[#ED7D3B]"></div>

      {/* Timeline Entries */}
      {timelineData.map((entry, index) => (
        <div key={index} className="relative flex items-start mb-10">
          {/* Dot */}
          <div className="absolute left-4 w-5 h-5 bg-[#ED7D3B] rounded-full border-4 border-white">
            <img  src={educ1} alt="" />
          </div>

          {/* Content */}
          <div className="ml-16">
            {/* Year Range */}
            <div className="text-[#ED7D3B] font-semibold text-lg">{entry.year}</div>

            {/* Image (Optional) */}
            {entry.image && (
              <div className="mt-2">
                <img
                  src={entry.image}
                  alt={`Timeline entry ${index + 1}`}
                  className="w-16 h-16 object-cover rounded-lg"
                />
              </div>
            )}

            {/* Description */}
            <p className="mt-2 text-white text-base">{entry.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
          
   </main>
  )
}

export default EduBackround  