import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';



export default function Login() {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    try {


      const response = await axios.get('http://localhost:3000/users');

      console.log(response);
      const users = response.data;

      const user = users.find((u) => u.email === email);
      // console.log("nice3");
      if (!user) {
        toast.error('User not found');
      } else {
        if (user.password === password) {
          toast.success('Success');
          navigate('/dashboard');
        } else {
          toast.error('Please Enter valid credentials');
        }
      }
    } catch (err) {
      toast.error('Login Failed due to :' + err.message);
    }
  }



  return (
    <div className="wrapper d-flex align-items-center justify-content-center">

      <div className='login'>
        <h2 className="text-center">Login</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className='form-group mb-2'>
            <label htmlFor='Email' className='form-label'>
              Email
              <span className='required-mark'>*</span>
            </label>
            <input type={"text"}
              className='form-control'
              required
              placeholder='enter your email'

              name="email"
              value={email}
              onChange={(e) => onInputChange(e)} />
          </div>
          <div className='form-group  mb-2'>
            <label htmlFor='Password' className='form-label'>
              Password
              <span className='required-mark'>*</span>
            </label>
            <input type={"text"}
              className='form-control'
              required
              placeholder='enter your password'

              name="password"
              value={password}
              onChange={(e) => onInputChange(e)} />
          </div>

          {/* <div className='form-group form-check mb-2'>
            <input type="checkbox" className="form-check-input" />
            <label htmlFor='check' className='form-check-label'>Remember me</label>
          </div> */}
          <div className='form-group  mb-2' >
            <Link to="/forgot-password">
              Forgot password?
            </Link>
          </div>
          <button type="submit" className='btn btn-success w-100'>Submit</button>
          <span className='mt-2'>Don't have an account yet? <Link to="/">Register here</Link></span>
        </form>

      </div>
    </div>
  );
}
