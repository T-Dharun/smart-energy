import React, { act, useState } from 'react';
import './Login.css';
import person from "../../assets/image.png"
import emaili from '../../assets/email.png';
import passworde from '../../assets/password.png';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastCofigError, ToastCofigSuccess } from '../misc/EnergyData';
import axios from "axios";


function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: ''
  });


  const [action, setAction] = useState('Signup');

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint=(action=="Login")?"login":"signup"
    try {
      const response = await axios.post(`http://localhost:3002/api/${endpoint}`, values)
      toast(response.data.message, ToastCofigSuccess);
      navigate('/setup');
    }
    catch (err) {
      if(err.response?.status==400){
        toast(err.response.data.message,ToastCofigError);
      }
      console.log("Error");
    }

  }

  return (
    <div className='LoginPage w-100'>

      <div className='container w-50 h-100'>
        <div className='Header'>
          <h4 className='fw-bold'>{action}</h4>
          <div className='Underline'></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='inputs'>
            {action === "Signup" && (
              <div className='Name input'>
                <div className='w-100'>
                  <img src={person} alt='person' />
                  <input type='text' name="username" placeholder='Name' required onChange={handleInput} />
                </div>
              </div>
            )}
            <div className='Email input'>
              <div className=' w-100'>
                <img src={emaili} alt='email' />
                <input type='email' placeholder='Email@gmail.com' onChange={handleInput} name='email' required />

              </div>
            </div>
            <div className='Password input'>
              <div className='w-100'>
                <img src={passworde} alt='password' />
                <input type='password' placeholder='Password' onChange={handleInput} name='password' required />
              </div>
            </div>
          </div>

          <div className='forgot' onClick={() => { setAction(action === 'Signup' ? 'Login' : 'Signup') }}>
            <p>{action === 'Login' ? 'Don\'t have an account? ' : 'Already have an account? '}
              <span>{action === 'Login' ? 'Create Account' : 'Login'}</span>
            </p>
          </div>

          <button type="submit" className={action === 'Signup' ? 'Signup  fw-bold bu' : 'Signup bu'} onClick={handleSubmit}>
            {action === 'Signup' ? 'Sign up' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
