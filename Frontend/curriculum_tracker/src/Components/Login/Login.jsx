import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import styles from "./styles.module.css"

const Login = () => {

	

	const [credentials, setCredentials] = useState(
        {
         email: "", 
         password: "", 
         role: ""
        })
        let role = ["admin", "user"]
       const navigate =useNavigate();
     

        const handleSubmit = async (e) => {
            e.preventDefault();
            const response = await fetch("http://localhost:3005/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
    
                },
                body: JSON.stringify({ email: credentials.email, password: credentials.password, role: credentials.role })
            });
            const json = await response.json();
            console.log(json);
            console.log(json.status)
            if(json.status == "success"){
                
                if (credentials.role==="admin") {
                    localStorage.setItem('token', json.token);
                    navigate("/admin");
                    toast.success("login Successfully");
                } else {
                    localStorage.setItem('token', json.token);
                    navigate("/user");
                }
            }else{
                toast.error("invalid credentials");
            }
        }
        //  if  (json.success && role === "admin") {
        //     //save the auth token and redirect
        //     localStorage.setItem('token', json.token);
        //     navigate("/admin");
        //     toast.success("login Successfully");
        // }
        // else if  (json.success && role === "user") {
        //      //save the auth token and redirect
        //      localStorage.setItem('token', json.token);
        //      navigate("/user");
        //     //  toast.success("login Successfully")
        // }
         
    //     else{
    //         toast.error("invalid credentials");
    //     }
    // }

    const onChange = (e) => {
        setCredentials(
            { ...credentials,
                 [e.target.name]: e.target.value 
                });
    }
	
  return (
    
	<div className={styles.login_container}>
	<div className={styles.login_form_container}>
		<div className={styles.left}>
			<form className={styles.form_container} onSubmit={handleSubmit}>
				<h1>Login to Your Account</h1>

				<div>
                    <select className="form-select form-select-lg" required={true} id="role" name="role" value={credentials.role}  onChange={onChange} style={{ backgroundColor: "aliceblue", fontWeight: "500" }}>
                        <option defaultValue >Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="employee">User</option>
                       
                    </select>
                  </div>


				<input
					type="email"
					placeholder="Email"
					name="email"
					value={credentials.email} 
					onChange={onChange}
					
					required
					className={styles.input}
				/>
				<input
					type="password"
					placeholder="Password"
					name="password"
					value={credentials.password} 
					onChange={onChange} 
					
					required
					className={styles.input}
				/>
				
				<button type="submit" className={styles.green_btn} >
					Sing In
				</button>
			</form>
		</div>
		<div className={styles.right}>
			<h1>New Here ?</h1>
			<Link to="/signup">
				<button type="button" className={styles.white_btn} >
					Sing Up
				</button>
			</Link>
		</div>
	</div>
</div>
  )
}

export default Login