import style from './loginadmin.module.scss'
import clsx from 'clsx';
import axios from 'axios';
import { useState } from 'react';

function LoginAdmin() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [checklogin, setCheckLogin] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/api/admin/checklogin', {
            username,
            password
        })
        .then((res) => {
            if(res.data.token) {
                localStorage.setItem('admin', res.data.token);
                window.location.href = '/admin';
            }else{
                setCheckLogin(res.data.message)
            }
        })
        .catch(error => {
            console.log('login', error)
        })
    }
    return (
        <div className='container' style={{ position: 'absolute', transform: 'translate(-50%, -50%)', left: '75%', top: '45%' }}>
            <div className={clsx(style.login)} style={{ width: '100%' }}>
                <form style={{ width: '40%'}} onSubmit={(e) => handleSubmit(e)}>
                    <h1 style={{ fontSize: '60px', marginBottom: '30px', display: 'flex', justifyContent:' center', fontWeight: '600' }}>Login</h1>
                    {checklogin && <div style={{ color: 'red' }}>{checklogin}</div>}
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form1Example1">Account</label>
                        <input type="text" id="form1Example1" class="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form1Example2">Password</label>
                        <input type="password" id="form1Example2" class="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <div class="row mb-4">
                        <div class="col d-flex justify-content-center">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                            <label class="form-check-label" for="form1Example3"> Remember me </label>
                        </div>
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary btn-block" style={{ width: '100%' }}>Sign in</button>
                </form>
            </div>
        </div>
    )
}

export default LoginAdmin;