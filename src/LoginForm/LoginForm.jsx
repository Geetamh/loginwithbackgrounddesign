import './loginform.css';
import { FaUser,FaLock } from "react-icons/fa";

export default function LoginForm(){
    return(
        <div className='body'>
        <h1>Login</h1>
        <form action="">
        <div className='input-box'>
            <label>
            <input type="text" placeholder="Username" required/>
            <FaUser className='icons'/>
            </label>
        </div>
        <div className='input-box'>
            <label>
            <input type="password" placeholder="password" required/>
            < FaLock  className='icons'/>
            </label>
        </div>
        <div className='remember-me'>
            <label><input type='checkbox' />Remember me</label>
            <a href='#'> forgot password? </a>
        </div>
        <div className='login-btn'>
            <button>Login</button>
        </div>
        <div className='register'>
            <label>Dont have an account </label>
            <a href='#'>Register</a>
        </div>

        </form>
        </div>
    )
}