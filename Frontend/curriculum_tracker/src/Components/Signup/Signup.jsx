import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import styles from './styles.module.css'


const Signup = () => {
    
	const navigate = useNavigate()

	const [data,setData]=useState({
			firstName:"",
			lastName:"",
			email: "",
			phoneNumber:null,
			password:"",
			confirmPassword:""
	})

	const signUpData =()=>{
		console.log(data)
		axios.post(`http://localhost:3005/signup`,data)
		.then((response)=>{
			console.log(response.data)

			if(response.data.status=="success"){
				let token=response.data.token
				let userId=response.data.data[0]._id
				alert("user registered successfully")
				setData(
					{
						firstName:"",
						lastName:"",
						email: "",
						phoneNumber:null,
						password:"",
						confirmPassword:""
					}
				)

				navigate('/login');

			}
			else{
				alert("invalid user");
			}
		})
		.catch((error)=>{
			console.log(error)
		})
	  }
	const inputHandler = (event)=>{
		  const {name,value}=event.target 
		  setData(
			(previousState)=>({
			  ...previousState,
			  [name]:value
			})
		  )
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
                                <button type='button' className={styles.white_btn}>
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
							        onChange={inputHandler}
									value={data.firstName}
							       	className={styles.input}
						        />
						        <input
							        type="text"
							        placeholder="Last Name"
							        name="lastName"
							        onChange={inputHandler}
									value={data.lastName}
							        className={styles.input}
						        />
						        <input
							        type="email"
							        placeholder="Email"
							        name="email"
							        onChange={inputHandler}
									value={data.email}
							        className={styles.input}
						        />
								<input
							        type="text"
							        placeholder="Phone Number"
							        name="phoneNumber"
							        onChange={inputHandler}
									value={data.phoneNumber}
							        className={styles.input}
						        />
						        <input
							        type="password"
							        placeholder="Password"
							        name="password"
							        onChange={inputHandler}
									value={data.password}
							        className={styles.input}
						        />
								<input
							        type="password"
							        placeholder="Confirm Password"
							        name="password"
							        onChange={inputHandler}
									value={data.confirmPassword}
							        className={styles.input}
						        />
						        
						        <button type="submit" className={styles.green_btn} onClick={signUpData}>
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