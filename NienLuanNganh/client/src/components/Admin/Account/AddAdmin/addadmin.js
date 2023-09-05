import style from './addadmin.module.scss'
import clsx from 'clsx';
import { useState, useEffect } from 'react';
import axios from 'axios'

function AddAdmin() {
    const [fullname, setFullname] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    const [phone, setPhone] = useState('')

    useEffect(() => {
        
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/api/admin/create', {
            fullname,
            username,
            password,
            role,
            phone
        })
        .then(res => {

        })
        .catch(error => {
            console.log('regiser,', error)
        })
    }

    return (
        <div className="productadmin" onSubmit={(e) => {handleSubmit(e)}}>
            <div className={clsx(style.login)} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <form style={{ width: '40%'}}>
                    <h1 style={{ fontSize: '60px', marginBottom: '30px', display: 'flex', justifyContent:' center', fontWeight: '600' }}>Register</h1>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form1Example1">Fullname</label>
                        <input type="text" id="form1Example1" class="form-control" value={fullname} onChange={(e) => setFullname(e.target.value)} />
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form1Example2">Account</label>
                        <input type="text" id="form1Example12" class="form-control" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form1Example3">Password</label>
                        <input type="password" id="form1Example3" class="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div> 
                    
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form1Example4">Role</label>
                        <input type="text" id="form1Example4" class="form-control" value={role} onChange={(e) => setRole(e.target.value)}/>
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form1Example5">Phone</label>
                        <input type="text" id="form1Example5" class="form-control" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    </div>

                    <button type="submit" class="btn btn-primary btn-block" style={{ width: '100%' }}>Sign in</button>
                </form>
            </div>
        </div>
    )
}

export default AddAdmin;