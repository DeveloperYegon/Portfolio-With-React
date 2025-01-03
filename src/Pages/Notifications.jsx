
import { useEffect,useState } from "react"
import React from 'react'
import Modal from "./Modal"
import axios from 'axios';


function Notifications() {


  const [logins, setLogins] = React.useState({
    email: '',
    password: ''
  });
 

const handleChange = (e) => {
  setLogins({ ...logins, [e.target.name]: [e.target.value] });


}
const handleSubmit = (e) => {
  axios.post('http://localhost:3001/login', logins)
  .then((response) =>console.log(response))
  .catch((err) => console.log(err));

}

  const [data, setData] = React.useState([]);

  useEffect(() => {
    fetch('http://localhost:3002/requests')
  .then(response => response.json())
  .then(data => setData(data))
  .catch(err => console.log(err));
  },[])


  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };


  return (
    
    <div className='bg-[#fff]] w-full mt-20 h-full p-2 md:p-10 '>
      <div className="border mb-4 rounded-xl p-5">
        <p className="text-red-400 text-center">Hey!! You don't have administrator previlages to access content in this page !! 
          Kindly login!!
        </p>

        <div className="bg-slate-400 my-5 p-5 flex justify-center">
        <button onClick={openModal} className="bg-[#182B5C] p-3 rounded-xl text-white">Admin Login</button>
      <Modal show={showModal} onClose={closeModal}>
        <div className="border my-10">
        <h2 className="text-center text-xl p-5">Login</h2>
        <hr className="bg-[#000] w-[80%] h-1 m-auto"/>

      <form className="p-10" onSubmit={handleSubmit}>

              <label htmlFor="name">Email:</label>

              <input type="text" onChange={handleChange} id="name" name="name" className="border p-2 rounded-xl" placeholder=" Enter Your User Name" required autoFocus /><br /><br />

              <label htmlFor="email">Password:</label>

              <input type="password" onChange={handleChange}  className="p-2 rounded-xl border" id="email" name="email" placeholder=" Enter Your Password" required /><br /><br />

              <input type="submit" className="bg-[#182B5C] p-3 rounded-xl text-white " value="Submit" />
            </form>


        </div>
       
      </Modal>
    </div>


     
      </div>
     <div className="p-3 border w-[100%]">
     <h1 className="text-center text-lg">Inquiries</h1>
      <hr className="bg-[#000] w-[80%] h-1 m-auto"/>

      <table  className=" bg-white border my-10 md:w-full overflow-hidden border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="border  border-slate-950 text-left ">Id</th>
            <th className="border  border-slate-950 text-left ">Name</th>
            <th className="border  border-slate-950 text-left ">Email</th>
            <th className="border border-slate-950 text-left ">Message</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {data.map((item) => (
            <tr className="" key={item.id}>
              <td className=" border text-left ">{item.id}</td>
              <td className="border text-left ">{item.Name}</td>
              <td className="border text-left  ">{item.Email}</td>
              <td className="border text-left  ">{item.Message}</td>
            </tr>
          ))}
        </tbody>
      </table>


     </div>
      

    </div>
  )
}

export default Notifications