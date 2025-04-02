import React,{useState} from 'react'
import { useNavigate} from 'react-router-dom';
import { auth, signInWithEmailAndPassword,sendPasswordResetEmail} from "../firebase";
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  

function ALogin() {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState('');
  const notifySuccess = () => toast.success("Logged In Successfully!");
  const notifyError = (message) => toast.error(message);



const onSubmit = async (data) => {
  setIsLoading(true);
  const { email, password } = data;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    notifySuccess();
    reset();
    localStorage.setItem('token', 'logged-in');
    setTimeout(() => navigate('/add-blog'), 2000);
  } catch (error) {
    setErrorMessages("Invalid Email/Password");
    notifyError("Invalid Email/Password");
    setIsLoading(false);
  }
};

 // Function to handle password reset
 const handlePasswordReset = async () => {
  if (!email) {
      toast.error("Please enter your email");
      return;
  }
  try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent!");
  } catch (error) {
      console.error(error);
      toast.error("Failed to send password reset email. Please try again.");
  }
};
 

  return (

    <main className=' bg-[#182B5C] p-5 h-screen '>
        
    <section className=' border-slate-950  shadow-lg shadow-[#7a5d4c] md:w-2/3 m-auto  bg-[#46567C] rounded-lg h-full p-4 border'>
    
    <p className='text-center text-black p-2' id='authmessage'></p>

        < p className='text-center text-white text-4xl p-4'>Login</p>
        <hr className='h-1 bg-[#ED7D3B] w-[50%] m-auto'/>

            {/*Admin login from */}
        <form className=' m-4 p-4 rounded flex flex-col' onSubmit={handleSubmit(onSubmit)} >
              <label className='py-4 text-white font-bold' htmlFor="email">Email:</label>
              <input 
              className='p-3 border border-slate-600 rounded-xl' 
              placeholder='Enter your email'
              {...register("email", {
                required: "Email is required",
                pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address"
                }
            })}
              type="email"
              id="email" 
              onChange={(e)=>setEmail(e.target.value)}
              />
              
              <label className='py-4 text-white font-bold' htmlFor="password">Password:</label>

              <input className='p-3 border border-slate-600 rounded-xl 'type="password"
               {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters long" }
            })}
              id="password"
              placeholder='Enter Password'
              />

              <input className='bg-[#ED7D3B] p-3 rounded-xl my-4' 
               value={isLoading ? 'Submitting...' : 'Submit'}
               disabled={isLoading}
               type="submit" />
          </form>
            <p className='text-center mt-3'>
              <span onClick={handlePasswordReset} className='text-[#fff] p-2 font-bold cursor-pointer rounded-lg border'>Reset Password</span>
            </p>
    
    </section>
    <ToastContainer
        autoClose={3000}
        position="top-center"
        hideProgressBar={false}
        closeOnClick
        draggable
        pauseOnHover
    />
    </main>
  )
}

export default ALogin