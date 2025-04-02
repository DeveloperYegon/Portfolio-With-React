import chatbot from '../assets/chatty.png'
import beautify from '../assets/beautifyai.png'
import rai from '../assets/rai.png'
import tilted from '../assets/tilted.png'

const projects=[
    {
        id:1,
        image:chatbot,
        frontend:"ReactJS and  Redux, Tailwind CSS",
        backend:"Nodejs,Cloud Firestore for data storage, ExpressJS, Langchain,Retrieval Augmented Generation (RAG) pipeline,gemini-flash model API for text generation",
        title:"Text Generation Chatbot",
        webLink:"https://chatbot-five-eosin.vercel.app",
        description:"A chatbot web application build for text generate based on the user's input.It answers questions in all domains ranging from education, health, beauty,technology and technology."
       
    },
    {
        id:2,
        image:beautify,
        title:"Beautify AI",
          frontend:"ReactJS and   Redux",
          backend:"Nodejs, ExpressJS, MongoDB,Langchain,Retrieval Augmented Generation (RAG) pipeline,gemini-flash model API for text generation",
        webLink:"https://beautify-ai.vercel.app",   
        description:"A chatbot web application for text generation.It is tailored for answering beauty questions.It answers questions about beauty products,make up, grooming style, beauty tips, and beauty routines."

     },
     {
        id:3,
        image:rai,
        title:"Rai Alliance",
        backend:"Ruby on Rails",
        frontend:"ReactJS",
        webLink:"https://www.rai-alliance.org",
        description:"RAI Alliance, an Ed-Tech Company web application that I collaborated with company developers. I was responsible for the frontend development. It is a platform for students and teachers to interact and share educational resources. It has a landing page, a blog, and a forum."

     },
     {
        id:4,
        image:tilted,
        title:"Tilt Technologies",
        frontend:"ReactJS and  Redux, Tailwind CSS",
        backend:"Firebase Realtime Database, Firebase Authentication, Nodejs, ExpressJS",
        webLink:"https://tilt-mauve.vercel.app",
        description:" Tilt Technologies, IT consulting company web application with a landing page for showcasing company services, a blog, and a contact form. I was responsible for the fullstack development of the project."
     }
]
export default projects;