import React, { useContext, useState } from 'react'
import styles from "../../styles/auth.module.css"
import { IoCloseOutline } from "react-icons/io5";
import { authContext } from '../../context/auth-context';

const Login = () => {

    const { authModal, setAuthModal, users, setCurrentUser } = useContext(authContext);
    const [form, setForm] = useState({ number: "", password: "" });
    const [error, setError] = useState("");

    const handleInput = (e) => {
       const eleName = e.target.name;
       const value = e.target.value;

        setForm({...form, [eleName] : value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(""); 

    const userExitsts = users.find(u => u.number === form.number);

    if(userExitsts && userExitsts.password !== form.password){
        setError("Invalid Password");
        return;
    }

    if(userExitsts){
        setCurrentUser({
            name: userExitsts.name
        });
       setForm({ number: "", password: "" });
       setAuthModal(null);
       return;
    }
    
    setError("Mobile does not link to any account");

    }

  return (
   <div className={styles.auth_container} style={{opacity: authModal? 1 :0, visibility: authModal? "visible" : "hidden"}} onClick={() => setAuthModal(null)}>
        <div className={styles.auth_form} onClick={(e) => e.stopPropagation()}>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
              <div>
               <input value={form.number} name='number' onChange={handleInput} type="tel" placeholder="Enter Mobile Number" pattern="[0-9]{10}" />
              </div>
              <div>
               <input value={form.password} name='password' onChange={handleInput} type='password' placeholder='Enter Password'/>
              </div>
               <button>Log In</button>
            </form>
            <span className={styles.error_msg}>{error}</span>
            <p>Don't have an account <span onClick={() => setAuthModal("signup")}>Sign Up</span></p>
            <button className={styles.close_button} onClick={() => setAuthModal(null)}><IoCloseOutline /></button>
        </div>
    </div>
  )
}

export default Login
