import React, { useContext } from 'react'
import styles from "../styles/auth.module.css"
import { IoCloseOutline } from "react-icons/io5";
import { authContext } from '../context/auth-context'
import { useState } from 'react';

const Signup = () => {

    const {authModal, setAuthModal} = useContext(authContext);
    const {users, setUsers} = useContext(authContext);
    const [form, setForm] = useState({name: "", number: "", password: "", confirm_password: ""});
    const [error, setError] = useState("")

    const handleInput = (e) => {
      const eleName = e.target.name;
      const value = e.target.value;

      setForm({...form, [eleName] : value})
      console.log(e.target.value)
    }
    
    const handleSubmit = (e) => {
      e.preventDefault();
      setError("")

      if(!form.name || !form.number || !form.password || !form.confirm_password){
        setError("Please fill all the fields!");
        return; 
      }

      if(form.password !== form.confirm_password){
        setError("Password does not match!")
        return;
      }

     const numberExists = users.find(num => num.number === form.number);

     if(numberExists){
      setError("Mobile number already exists! please login")
      return;
     }

     setUsers([...users, form]);
     setForm({name: "",  number: "", password: "", confirm_password: ""});
     setAuthModal("login");

    }

    

  return (
    <div className={styles.auth_container} style={{opacity: authModal? 1 :0, visibility: authModal? "visible" : "hidden"}} onClick={() => setAuthModal(null)}>
        <div className={styles.auth_form} onClick={(e) => e.stopPropagation()}>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <input value={form.name} onChange={handleInput} name='name' type='text' placeholder='Enter Full Name'/>
              </div>
              <div>
                <input value={form.number} onChange={handleInput} name='number' type='tel' placeholder='Enter Mobile Number' pattern="[0-9]{10}"/>
              </div>
              <div>
                <input value={form.password} onChange={handleInput} name='password' type='password' placeholder='Enter Password'/>
              </div>
              <div>
                <input value={form.confirm_password} onChange={handleInput} name='confirm_password' type='password' placeholder='Confirm Password'/>
              </div>
                <button>Sign Up</button>
            </form>
            <div className={styles.error_msg}>{error}</div>
            <p>Already have an account <span onClick={() => setAuthModal("login")}>Log In</span></p>
            <button className={styles.close_button} onClick={() => setAuthModal(null)}><IoCloseOutline /></button>
        </div>
    </div>
  )
}

export default Signup