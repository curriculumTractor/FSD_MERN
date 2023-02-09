import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import styles from "./styles.module.css"

const Login = () => {
	const navigate=useNavigate();
	const [email,setEmail]=useState('')
	const [password,setPassword]=useState('')

	const userAuthentication =()=>{
		const userData={
			"email":email,
			"password":password
		}
		console.log(userData)
		axios.post(`http://localhost:3005/signin`,
		userData
		).then((response)=>{
			console.log(response);
		},(error)=>{console.log(error);
		})
		navigate('/signup')
	}
  return (
    <div>
      <div className= {styles.login_container}>
        <div className={styles.login_form_container}>
          <div className={styles.left}>
            <form className={styles.form_container}>
              <h1>Login to Your Account</h1>
					<input
						type="email"
						placeholder="Email"
						name="email"
						onChange={(e)=>setEmail(e.target.value)}
						
						className={styles.input}
					/>
					<input
						type="password"
						placeholder="Password"
						name="password"
						onChange={(e)=>setPassword(e.target.value)}
						className={styles.input}
					/>
						  
					<button type="submit" className={styles.green_btn} onClick={userAuthentication}>
						Sign In
					</button>
			</form>
          </div>
          <div className={styles.right}>
            <h1>New Here ?</h1>
            <Link to="/signup">
              <button type="button" className={styles.white_btn}>
					Sign Up
				</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login