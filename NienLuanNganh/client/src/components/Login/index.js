import style from './login.module.scss'
import clsx from 'clsx'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState , useEffect } from 'react';

function Login() {
    const savedState = localStorage.getItem('appState');
    localStorage.removeItem('appState')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/api/user/checklogin', {
            username,
            password
        })
    }

    return (
        <div className='container'>
            <div className={clsx(style.login)} onClick={handleSubmit}>
                <form style={{ width: '40%'}}>
                    <h1 style={{ fontSize: '60px', marginBottom: '30px', display: 'flex', justifyContent:' center', fontWeight: '600' }}>Login</h1>
                    <div>{savedState && savedState}</div>
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form1Example1">Account</label>
                        <input type="email" id="form1Example1" class="form-control" value={username} onChange={(e) => {setUsername(e.target.value)}}/>
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form1Example2">Password</label>
                        <input type="password" id="form1Example2" class="form-control"  value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                    </div>

                    <div class="row mb-4">
                        <div class="col d-flex justify-content-center">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                            <label class="form-check-label" for="form1Example3"> Remember me </label>
                        </div>
                        </div>

                        <div class="col">
                            <Link to='/register'>Register here?</Link>
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary btn-block" style={{ width: '100%' }}>Sign in</button>
                </form>
            </div>
        </div>
    )
}

export default Login;