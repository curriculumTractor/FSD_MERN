import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import styles from './styles.module.css'


const Signup = () => {
    
	const navigate = useNavigate()

	const [firstName,setFirstName]=useState('');
	const [lastName,setLastName]=useState('');
	const [email,setEmail]=useState('')
	const [phoneNumber,setPhoneNumber]=useState(0)
	const [password,setPassword]=useState('')
	const [confirmpassword,setConfirmPassword]=useState('')

	const userAuthentication =()=>{
		const userData={
			"firstName":firstName,
			"lastName": lastName,
			"email":email,
			"phoneNumber":phoneNumber,
			"password":password,
			"confirmPassword":confirmpassword
		}
		axios.post(`http://localhost:3005/signup`,
		userData
		).then((getData)=>{
			if(getData.data){
				navigate('/home')
			}
			else{
				alert("invalid user");
			}
		})
	}

  return (
    <div>
        <div className={styles.signup_container}>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className={styles.signup_form_container}>
                        <div className={styles.left}>
                            <h1>Welcome Back</h1>
                            <Link to ="/login">
                                <button type='button' className={styles.white_butn}>
                                    Sign In
                                </button>
                            </Link>
                        </div>
                        <div className={styles.right}>
                           <form className={styles.form_container}>
                                <h1>Create Account</h1>
                                <input
							        type="text"
							        placeholder="First Name"
							        name="firstName"
							        onChange={handleChange}
							        value={data.firstName}
							        required
							        className={styles.input}
						        />
						        <input
							        type="text"
							        placeholder="Last Name"
							        name="lastName"
							        onChange={handleChange}
							        value={data.lastName}
							        required
							        className={styles.input}
						        />
						        <input
							        type="email"
							        placeholder="Email"
							        name="email"
							        onChange={handleChange}
							        value={data.email}
							        required
							        className={styles.input}
						        />
								<input
							        type="text"
							        placeholder="Phone Number"
							        name="phoneNumber"
							        onChange={handleChange}
							        value={data.phoneNumber}
							        required
							        className={styles.input}
						        />
						        <input
							        type="password"
							        placeholder="Password"
							        name="password"
							        onChange={handleChange}
							        value={data.password}
							        required
							        className={styles.input}
						        />
								<input
							        type="password"
							        placeholder="Confirm Password"
							        name="password"
							        onChange={handleChange}
							        value={data.confirmPassword}
							        required
							        className={styles.input}
						        />
						        
						        <button type="submit" className={styles.green_btn} onClick={userAuthentication}>
							        Sign Up
						        </button>
					        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup