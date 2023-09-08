import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react'
import axios from 'axios';
import './Register.css';
import { v4 as uuidv4 } from 'uuid';
export default function Register() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    contactNumber: '',
    email: '',
    gender: '',
    accountType: '',
    password: '',
    confirmPassword: '',
    address: '',
    accountNumber:'',
    balance:0


  });
  const navigate = useNavigate();

  const { firstName, lastName, dob, contactNumber, email, password, confirmPassword, accountType, gender, address } = formData;
  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }


  const validatePassword = (password) => {
    // Password must be at least 8 characters long
    if (password.length < 8) {
      return false;
    }

    if (!/[A-Z]/.test(password)) {
      return false;
    }

    // Password must contain at least one lowercase letter
    if (!/[a-z]/.test(password)) {
      return false;
    }

    // Password must contain at least one digit
    if (!/\d/.test(password)) {
      return false;
    }

    if (!/[!@#$%^&*()_+[\]{};':"\\|,.<>?/~`]/.test(password)) {
      return false;
    }

    return true;
  };



  const onSubmit = async (e) => {
    e.preventDefault();

    

    if (
      !firstName ||
      !lastName ||
      !dob ||
      !contactNumber ||
      !email ||
      !password ||
      !confirmPassword ||
      !accountType ||
      !gender ||
      !address
    ) {
      alert('Please fill in all required fields.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // Validate the password
    if (!validatePassword(password)) {
      alert('Password must meet the criteria: at least 8 characters, one uppercase letter, one lowercase letter, one digit, and one special character.');
      return;
    }


    try {
      const newAccountNumber = uuidv4();
        const updatedFormData = { ...formData, accountNumber: newAccountNumber };
      await axios.post('http://localhost:3000/users', updatedFormData);
      navigate('/login');
    } catch (error) {
      console.error('Error:', error);
    }
  };




  return (
    
   
     <div className="d-flex align-items-center justify-content-center">
      <div className="register">
          <h2 className="text-center"> RegisterUsers</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className='mb-3'>
              <label htmlFor='Firstname' className='form-label'>First Name
                <span className='required-mark'>*</span></label>
              <input type={"text"}
                className='form-control'
                required
                placeholder='Enter your First Name'
                name="firstName"
                value={firstName}
                onChange={(e) => onInputChange(e)} />

            </div>
            <div className='mb-3'>
              <label htmlFor='Lastname' className='form-label'>Last Name
                <span className='required-mark'>*</span></label>
              <input type={"text"}
                className='form-control'
                required
                placeholder='Enter your Last Name'
                name="lastName"
                value={lastName}
                onChange={(e) => onInputChange(e)} />

            </div>
            <div className='mb-3'>
              <label htmlFor='Dob' className='form-label'>Date of birth
                <span className='required-mark'>*</span></label>
              <input type={"date"}
                className='form-control'
                required
                placeholder='DD/MM/YYYY'
                name="dob"
                value={dob}
                onChange={(e) => onInputChange(e)} />

            </div>

            <div className='mb-3'>
              <label htmlFor='Contactnumber' className='form-label'>Contact Number
                <span className='required-mark'>*</span></label>
              <input type={"tell"}
                className='form-control'
                pattern="[0-9]{10}"
                maxLength="10"
                minLength="10"
                required={true}
                inputMode="numeric"
                placeholder='Enter your Contact Number'
                name="contactNumber"
                value={contactNumber}
                onChange={(e) => onInputChange(e)} />

            </div>

            <div className='mb-3'>
              <label htmlFor='Email' className='form-label'>Email
                <span className='required-mark'>*</span></label>
              <input type={"mail"}
                required={true}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Please enter a valid email"
                inputMode="email"
                maxLength="50"
                minLength="10"
                className='form-control'
                placeholder='Enter your Email'
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)} />


            </div>
            <div className='mb-3'>
              <label htmlFor='Password' className='form-label'>Password
                <span className='required-mark'>*</span></label>
              <input type={"text"}
                className='form-control'
                required
                placeholder='Enter your Password'
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)} />

            </div>
            <div className='mb-3'>
              <label htmlFor='Confirmpassword' className='form-label'>Confirm Password
                <span className='required-mark'>*</span></label>
              <input type={"text"}
                className='form-control'
                required
                placeholder='Re-enter your Password'
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => onInputChange(e)} />

            </div>

            <div className='form-group mb-3'>
              <label className='form-label'>Gender
                <span className='required-mark'>*</span></label>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="male"
                  name="gender"
                  value="male"
                  onChange={(e) => onInputChange(e)}
                  checked={gender === 'male'}
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="female"
                  name="gender"
                  value="female"
                  onChange={(e) => onInputChange(e)}
                  checked={gender === 'female'}
                />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>
            </div>

            <div className='mb-3'>
              <label htmlFor='Address' className='form-label'>Address
                <span className='required-mark'>*</span></label>
              <input type={"text"}
                className='form-control'
                required
                placeholder='Enter your Address'
                name="address"
                value={address}
                onChange={(e) => onInputChange(e)} />

            </div>

            <div className='form-group mb-3'>
              <label className='form-label'>Account Type
                <span className='required-mark'>*</span></label>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="savings"
                  name="accountType"
                  value="savings"
                  onChange={(e) => onInputChange(e)}
                  checked={accountType === 'savings'}
                />
                <label className="form-check-label" htmlFor="savings">
                  Savings
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="current"
                  name="accountType"
                  value="current"
                  onChange={(e) => onInputChange(e)}
                  checked={accountType === 'current'}
                />
                <label className="form-check-label" htmlFor="current">
                  Current
                </label>
              </div>
            </div>
            <button type="submit" className='btn btn-outline-primary'>Submit</button>
            <Link className='btn btn-danger mx-2' to="/login">Back to Login</Link>
          </form>
        </div>
        </div>

     
      


   
  )
}