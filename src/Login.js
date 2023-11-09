import React from 'react'
import classes from './Login.module.css'

const Login = () => {
  return (
    <div className={classes.Form}>
        <div className={classes.FormItem}>
            <h2>Sign Up</h2>
            <form action="" className={classes.Formdetails}>
                <label htmlFor="">Enter Your Email</label>
                <input type="email" 
                required
                />
                <label htmlFor="">Enter Your Email</label>
                <input type="Password" required
                />
                <button type='submit'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login