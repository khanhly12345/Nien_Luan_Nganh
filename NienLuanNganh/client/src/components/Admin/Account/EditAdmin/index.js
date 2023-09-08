import style from'./editadmin.module.scss'
import axios from "axios";
import clsx from 'clsx';
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import jwtDecode from 'jwt-decode';
function EditAdmin () {
    const [fullname, setFullname] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [newpassword, setNewpassword] = useState('')
    const [role, setRole] = useState('')
    const [phone, setPhone] = useState('')
    const [storeToken, setStoreToken] = useState('')

    const {id} = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`/api/admin/showEdit/${id}`)
            .then(res => {
                setFullname(res.data.fullname)
                setUsername(res.data.username)
                setRole(res.data.role)
                setPhone(res.data.phone)
            })
            .catch(error => {
                console.log(error)
            })
        let getToken = localStorage.getItem('admin')
        let jwtToken = getToken;
        let decodedToken = jwtDecode(jwtToken);
        setStoreToken(decodedToken)
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`/api/admin/edit/${id}`, {
                fullname,
                username,
                password,
                newpassword,
                role,
                phone,
            })
                .then(res => {
                    if(res.data.message) {
                        navigate('/admin/account')
                    }
                })
                .catch(error => {
                    console.log(error)
                })
    }
        
        

    return (
        <div className="productadmin">  
            <div className={clsx(style.login)} style={{ width: '100%', display: 'flex', justifyContent: 'center', paddingBottom: '50px' }}>
                <form style={{ width: '40%'}} onSubmit={(e) => {handleSubmit(e)}}>
                    <h1 style={{ fontSize: '60px', marginBottom: '30px', display: 'flex', justifyContent:' center', fontWeight: '600' }}>Edit Admin</h1>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form1Example1">Fullname</label>
                        <input type="text" id="form1Example1" class="form-control" value={fullname} onChange={(e) => setFullname(e.target.value)} />
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form1Example2">Account</label>
                        <input type="text" id="form1Example12" class="form-control" value={username } onChange={(e) => setUsername(e.target.value)}/>
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form1Example3">Password</label>
                        <input type="password" id="form1Example3" class="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div> 

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form1Example3">New Password</label>
                        <input type="password" id="form1Example3" class="form-control" value={newpassword} onChange={(e) => setNewpassword(e.target.value)}/>
                    </div> 
                    {storeToken.role === 1 ?
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form1Example4">Role</label>
                        <input type="text" id="form1Example4" class="form-control" value={role} onChange={(e) => setRole(e.target.value)}/>
                    </div> : ' '}
                    

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

export default EditAdmin;