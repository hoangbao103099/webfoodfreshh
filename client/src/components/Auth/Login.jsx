import '../../styles/Login.scss'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-header">
                <span>Login</span>
                <span>Welcome back! Please login to your account.</span>
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
            </form>
            <div className="login-footer">
                <div className="option-section">
                    <div className="remember">
                        <input type="checkbox" id="check" />
                        <label htmlFor="check">Remember Me</label>
                    </div>
                    <div className="forgot">Forgot Password?</div>
                </div>
                <button>Login</button>
                <div className="redirect-link">
                    <span>New User?</span>
                    <Link to="/register">
                        <span>Signup</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login
