import chatbot from '../assets/chatty.png'
import beautify from '../assets/beautifyai.png'
import rai from '../assets/rai.png'
import tilted from '../assets/tilted.png'

const projects=[
    {
        id:1,
        image:chatbot,
        title:"Text Generation Chatbot",
        webLink:"https://chatbot-five-eosin.vercel.app",
        description:"This is a web application build with React for frontend. Redux for state management. Nodejs, ExpressJS for backend. Cloud Firestore for data storage. Langchain for building RAG pipeline with gemini-flash model API to generate text based on the user's input."
       
    },
    {
        id:2,
        image:beautify,
        title:"Beautify AI",
        webLink:"https://beautify-ai.vercel.app",   
        description:"A web application build with React and Redux for frontend Nodejs, ExpressJS, and MongoDB for backend. Langchain for building RAG pipiline with gemini-flash model to generate text based on the user's input."

     },
     {
        id:3,
        image:rai,
        title:"Rai Alliance",
        webLink:"https://www.rai-alliance.org",
        description:"This is a company web application that I collaborated with company developers.React for frontend and Ruby on Rails for backend."

     },
     {
        id:4,
        image:tilted,
        title:"Tilt Technologies",
        webLink:"https://tilt-mauve.vercel.app",
        description:" This is a web application build with React for frontend and firebase for backend. Firestore Realtime Database for storing user data."
     }
]
export default projects;