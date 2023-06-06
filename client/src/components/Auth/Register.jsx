import '../../styles/Register.scss'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className="register-container">
            <div className="register-header">
                <span>Register</span>
                <span>Welcome back! Please register to your account.</span>
            </div>
            <form action="">
                <div className="text-field">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" />
                </div>
                <div className="text-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div className="text-field">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" />
                </div>
            </form>
            <div className="register-footer">
                <button>register</button>
                <div className="redirect-link">
                    <span>Already have an account?</span>
                    <Link to="/login">
                        <span>Login</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Register
