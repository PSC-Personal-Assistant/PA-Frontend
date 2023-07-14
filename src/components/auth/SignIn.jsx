import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Spinner } from '@chakra-ui/react';
import { AuthContext } from './authContext';

// import { SHA256 } from 'crypto-js';

function Login(props) {

    const { login } = useContext(AuthContext);
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [isButtonDisabled, setButtonDisabled] = useState(false);

    async function hashToken(token) {
      const encoder = new TextEncoder();
      const data = encoder.encode(token);
      const buffer = await crypto.subtle.digest('SHA-256', data);
      const hashArray = Array.from(new Uint8Array(buffer));
      const hashedToken = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
      return hashedToken;
    }

    const handleClick = () => {
      // Perform button click logic here

      // Disable the button
      if (loading){
        setButtonDisabled(true);
      }else{
        setButtonDisabled(false)
      }
      
    };

    const [formData, setFormData] = useState({
        username: '',
        password: '',
      });

      const [errors, setErrors] = useState({});
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
      };


      const handleSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = validateFormData(formData);
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
        } else {
            setLoading(true)
            const data = {
            email: formData.email,
            password: formData.password
          }
    
            try {
              const response = await axios.post('https://pa.cleverapps.io/accounts/login', JSON.stringify(data), {
                headers: {'Content-Type' : 'application/json'}
              });
              console.log(data)
              console.log(response)
              const result = response.data
              console.log(result)
              setLoading(false)
              if (result.status === true){

                const userData = result.data;
                const access_token = result.data.api_key 
                hashToken(access_token)
                  .then(hashedToken => {
                    login(hashedToken, userData);
                    // fetchUserData(userData);
                    toast.success('Login successful');
                      navigate('/dashboard')
              
                    
                  })
                  .catch(error => {
                    console.error('Error hashing token:', error);
                  });
              }else{
                setLoading(false)
                toast.error('Login Unsuccessful')
              }
               
            } catch (error) {
              // Handle any errors
              setLoading(false)
              console.error(error);
            }}
          
        }



      const validateFormData = (data) => {
        const errors = {};
        if (!data.email) {
          errors.email = 'Please enter your email address';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
          errors.email = 'Please enter a valid email address';
        }
        if (!data.password) {
          errors.password = 'Please enter your password';
        } else if (data.password.length < 8) {
          errors.password = 'Password must be at least 8 characters long';
        }
        return errors;
      };



    return (
        <div className='lg:grid grid-cols-2'>
            <div className='md:h-screen lg:block hidden lg:overflow-hidden '>
                <img className='md:h-screen lg:h-auto' src="images/guy2.png" alt="" />
            </div>
            <div className='W-[80%] lg:w-[80%] lg:m-0 h-screen '>
                <div className=' w-[80%] md:w-[70%]  lg:w-[90%] m-auto'>
                    <div className='mb-4 mt-4 '>
                        <img className='' src="images/Group.png" alt="welcome" />
                    </div>
                    <Link className='mt-12 text-base sm:text-xl text-[#467BFB]' to="/privacy">
                        Sign-in with the options below
                    </Link>              
                    <div className='w-24 mt-4 mb-4 flex justify-between'>
                        <img src="images/facebook-color 1.png" alt="facebook logo" />
                        <img src="images/google-color 1.png" alt=" google color" />
                    </div>
                    <hr className='w-[70%]  mb-2'/>
                    <small className='sm:text-xl text-base  mt-4 text-[#467BFB]'> 
                        Or use your registered email
                    </small>
                    <form method='post' onSubmit={handleSubmit}>
                        <div className='lg:w-[80%] md:w-[80%]'>
                            
                            <div className='mt-4'>
                                <input className='p-2 w-4/5 placeholder:text-lighter rounded-md border-gray-500 border ' type="text" name="email" value={formData.email} onChange={handleInputChange} placeholder="email"  required/>
                                    {errors.email && (<p className="text-[#ff0000]">{errors.email}</p> )}
                            </div>


                            <div className='mt-4'>
                                <input className='p-2 w-4/5 placeholder:text-lighter rounded-md border-gray-500 border ' type="Password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Enter password" required/>
                                {errors.password && (<p className="text-[#ff0000]">{errors.password}</p> )}
                            </div>
                        </div>

                        <div className='mb-4 mt-4 bg-[#467BFB]  text-center w-[50%] rounded-lg p-1 text-[#fff]'>
                                {/* <input type="submit"  /> */}
                                <button type='submit' onClick={handleClick} disabled={isButtonDisabled}>
                                  { loading? <div> Loading ... <Spinner height='20px' width="20px"/></div> : 'Submit' }
                                </button>

                                               
                            </div>
                            

                    </form>

                   
            </div>
           </div>
        </div>
    );
}

export default Login;