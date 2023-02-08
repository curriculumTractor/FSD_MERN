import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import styles from "./styles.module.css"

const LoginComponent = () => {
    const navigate=useNavigate();
	const [username,setUsername]=useState('')
	const [password,setPassword]=useState('')

	const userAuthentication = async()=>{
		const userData={
			"username":username,
			"password":password
		}

		console.log(userData)
        try {
            const res = axios.post(`http://localhost:3005/api/auth/login`,
            userData)

            const data = await res.json()
            if (res.status === 400 || res.status === 401) {
              return display.textContent = `${data.message}. ${data.error ? data.error : ''}`
            }
            data.role === "admin" ? location.assign('/admin') : location.assign('/user')
          } catch (err) {
              console.log(err.message)
            }
		
        
	}
  return (
    <div>
      <div className= {styles.login_container}>
        <div className={styles.login_form_container}>
          <div className={styles.left}>
            <form className={styles.form_container} onSubmit={userAuthentication}>
              <h1>Login to Your Account</h1>
					<input
						type="text"
						placeholder="Username"
						name="username"
						onChange={(e)=>setUsername(e.target.value)}
						
						className={styles.input}
					/>
					<input
						type="password"
						placeholder="Password"
						name="password"
						onChange={(e)=>setPassword(e.target.value)}
						className={styles.input}
					/>
						  
					<button type="submit" className={styles.green_btn}>
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

export default LoginComponent