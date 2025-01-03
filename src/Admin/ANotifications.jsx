import React ,{ useEffect} from 'react'
import { useNavigate } from 'react-router-dom';


function ANotifications() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); // Redirect if no token is found
      return;
    }

    // Make an authenticated request to verify the token
    axios.get('http://localhost:3003/protected-route', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      // Handle success response
      console.log('Access granted to protected route:', response.data);
    })
    .catch(error => {
      // If there’s an error, remove token and redirect to login
      console.error('Authentication failed:', error);
      localStorage.removeItem('token');
      navigate('/login');
    });
  }, [navigate]);



  const [data, setData] = React.useState([]);

  useEffect(() => {
    fetch('http://localhost:3002/requests')
  .then(response => response.json())
  .then(data => setData(data))
  .catch(err => console.log(err));
  },[])

  return (
    <main className='md:m-5 m-2 bg-[#182B5C] py-2 md:p-5'>
        
    <section className='border md:m-5 rounded-xl bg-white border-slate-950 h-full p-4'>
        < p className='text-center'>Received Requests</p>
        <hr className='h-1 bg-black w-80% m-auto'/>
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


    
    </section>
    

</main>
  )
}

export default ANotifications