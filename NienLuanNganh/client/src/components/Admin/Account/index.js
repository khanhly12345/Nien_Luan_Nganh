import { Link } from 'react-router-dom';
import axios from "axios";
import { useState, useEffect } from 'react'
import jwtDecode from 'jwt-decode';
function Account () {
    const [admins, setAdmins] = useState([])
    const [storeToken, setStoreToken] = useState('')

    useEffect(() => {
       axios.get('/api/admin/show')
            .then((res) => {
                setAdmins(res.data)
            }) 
            .catch(error => {
                console.log('api show', error)
            })
        let getToken = localStorage.getItem('admin')
        let jwtToken = getToken;
        let decodedToken = jwtDecode(jwtToken);
        setStoreToken(decodedToken)
    }, [])

        

    const handleDelete = (id) => {
        axios.post('/api/admin/delete', {
            id
        })
        .then(res => {
            setAdmins(preAdmin => preAdmin.filter(admin => admin._id !== id))
        })
        .catch(error => {
            console.log(error)
        })
    }

    console.log(admins)

    return (
        <div className='productadmin' style={{ padding: '10px' }}>
            <div className='' style={{ padding: '10px' }}>
                <h1>Account</h1>
            </div>
            <div>
                {
                storeToken.role === 1
                
                ? 
                    <Link to='/admin/addAdmin' className='btn btn-primary' style={{ marginLeft: '10px' }}>Add Admin</Link> 
                :  
                    <button disabled className='btn btn-primary'>Add Admin</button>
                }    
                    
            </div>
            <div style={{ padding: '10px' }}>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Fullname</th>
                            <th scope="col">Username</th>
                            <th scope="col">Role</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            {admins.map((admin, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{admin.fullname}</td>
                                    <td>{admin.username}</td>
                                    <td>{admin.role === 1 ? 'Quản Lí' : 'Nhân Viên'}</td>
                                    <td>{admin.phone}</td>
                                    <td>
                                        <td>
                                            <Link to={`/admin/editadmin/`+ admin._id} class="btn btn-success">Edit</Link> 
                                            {storeToken.role === 1 ? <button  class="btn btn-danger" onClick={() => {handleDelete(admin._id)}}>Delete</button> : <button disabled class="btn btn-danger">Delete</button>}
                                            
                                        </td>
                                    </td>
                                </tr>
                            ))}
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Account;