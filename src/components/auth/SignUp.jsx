import {React, useRef, useState} from 'react';
import {Link} from 'react-router-dom'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';


function Signup(props) {

    const navigate = useNavigate()
    // const password = useRef({});
    
    const [plan, setPlan] = useState('starter')
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        phone: '',
        password: '',
        confirmPassword: '',
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
            const data = {
                "process": "register",
                "username": formData.username,
                "pass_confirmation": "demo",
                "email": formData.email,
                "first_name": formData.firstName,
                "last_name": formData.lastName,
                "phone": formData.phone,
                "country": "161",
                "plan": plan,
                "home_country_code": "234",
                "ref_id": "54d1f566"
            }
    
            try {
              const response = await axios.post('', data, {
                headers: {'Content-Type' : 'application/json'}
              });
              const result = response.data
               if (result.status === true){
                toast.success("Registration Successful")
                navigate("/login")
               }else{
                toast.error("Registration failed")
               }

               
            } catch (error) {
              // Handle any errors
              console.error(error);
            }}
          
        }
      
    
      const validateFormData = (data) => {
        const errors = {};
        if (!data.firstName) {
          errors.firstName = 'Please enter your first name';
        }
        if (!data.lastName) {
          errors.lastName = 'Please enter your last name';
        }

        if (!data.email) {
          errors.email = 'Please enter your email address';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
          errors.email = 'Please enter a valid email address';
        }
        if (!data.username) {
            errors.username = 'Please enter your username';
          } else if (!/^[a-zA-Z0-9_]{3,16}$/.test(data.username)) {
            errors.username = 'username is invalid';
          }
          if (!data.phone) {
            errors.phone = 'Please enter your phone';
          } else if (data.phone.length < 11 || !/^\d{11}$/.test(data.phone)) {
            errors.phone = 'Phone number cannot be less than 11 and can only contain digits';
          }
        if (!data.password) {
          errors.password = 'Please enter your password';
        } else if (data.password.length < 8) {
          errors.password = 'Password must be at least 8 characters long';
        }
        if (!data.confirmPassword) {
          errors.confirmPassword = 'Please confirm your password';
        } else if (data.password !== data.confirmPassword) {
          errors.confirmPassword = 'Passwords do not match';
        }
        return errors;
      };
    
 
   


        return (
        <div className='lg:grid grid-cols-2'>


            <div className='W-[80%] lg:w-[90%] lg:m-0 h-screen '>
                <div className='w-[80%] md:w-[70%]  lg:w-[90%] m-auto'>
                    <div  className='mt-8'>
                        <p className='xl:w-[65%] lg:w-[70%] text-base sm:text-2xl'>Signup and join other users 
                        in automating their networks </p>
                    </div>
                    
                    <hr className='w-1/2 mb-2'/>

                    <small className='text-base  mt-4 text-[#467BFB]'> 
                        Or fill out your details
                    </small>


                    <form onSubmit={handleSubmit}>

                        <div className='lg:w-[80%] md:w-[60%]'>

                            <div className='mt-4'>
                                <input className='p-2 w-4/5 placeholder:text-lighter rounded-md border-gray-500 border ' type="text" name="firstName" value={formData.firstName}  onChange={handleInputChange} placeholder='First Name'  />
                                {errors.firstName && (<p className="text-[#ff0000]">{errors.firstName}</p> )}
                            </div>

                            <div className='mt-4'>
                                <input className='p-2 w-4/5 placeholder:text-lighter rounded-md border-gray-500 border ' type="text" name="lastName"  value={formData.lastName} onChange={handleInputChange} placeholder='Last Name'  required/>
                                {errors.lastName && (<p className="text-[#ff0000]">{errors.lastName}</p> )}

                            </div>

                            <div className='mt-4'>
                                <input className='p-2 w-4/5 placeholder:text-lighter rounded-md border-gray-500 border ' type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email"  required/>
                                {errors.email && (<p className="text-[#ff0000]">{errors.email}</p> )}
                            </div>

                            <div className='mt-4'>
                                <input className='p-2 w-4/5 placeholder:text-lighter rounded-md border-gray-500 border ' type="text" name="username" value={formData.username} onChange={handleInputChange} placeholder="Desired username"  required/>
                                {errors.username && (<p className="text-[#ff0000]">{errors.username}</p> )}
                            </div>

                            <div className='mt-4'>
                                <input className='p-2 w-4/5 placeholder:text-lighter rounded-md border-gray-500 border ' type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="08123456789" required/>
                                {errors.phone && (<p className="text-[#ff0000]">{errors.phone}</p> )}
                            </div>


                            <div className='mt-4'>
                                <input className='p-2 w-4/5 placeholder:text-lighter rounded-md border-gray-500 border ' type="Password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Enter password" required/>
                                {errors.password && (<p className="text-[#ff0000]">{errors.password}</p> )}
                                
                            </div>
                            <div className='mt-4'>
                                <input className='p-2 w-4/5 placeholder:text-lighter rounded-md border-gray-500 border ' type="password" value={formData.confirmPassword} onChange={handleInputChange} placeholder="Confirm Password" required  name="confirmPassword"/>
                                {errors.confirmPassword && (<p className="">{errors.confirmPassword}</p> )}
                            </div>

                            <div className='mb-4 mt-4 bg-[#467BFB]  text-center w-[50%] rounded-lg p-1 text-[#fff] '>
                                    <input type="submit"/>                
                            </div>

                        </div>

                    </form>
                    


                    <div className='mt-8 mb-4 flex items-center m-auto'>
                        <ChakraProvider>
                        <Checkbox colorScheme='twitter' >
                        </Checkbox>
                        </ChakraProvider>
                        <span  className='text-sm sm:text-4 ml-2'>
                            I accept the  
                            <Link className='ml-1 text-[#467BFB]' to="/termsofuse">
                                Terms of Use
                            </Link> and  
                            <Link className='ml-2 text-[#467BFB]' to="/privacy">
                                Privacy Policy
                            </Link>
                        </span>
                    </div>
                    <div>
                        Already have an account? 
                        <Link  className='ml-2 text-[#467BFB]' to="/login">Sign in</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
