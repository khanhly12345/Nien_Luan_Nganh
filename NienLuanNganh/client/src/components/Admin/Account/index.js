import { Link } from 'react-router-dom';
import axios from "axios";
import { useState, useEffect } from 'react'

function Account () {
    const [admins, setAdmins] = useState([])

    useEffect(() => {
       axios.get('/api/admin/show')
            .then((res) => {
                setAdmins(res.data)
            }) 
            .catch(error => {
                console.log('api show', error)
            })
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
                <Link to='/admin/addAdmin' className='btn btn-primary' style={{ marginLeft: '10px' }}>Add Admin</Link>
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
                                    <td>{admin.role}</td>
                                    <td>{admin.phone}</td>
                                    <td><td><Link to={`/admin/editadmin/`+ admin._id} class="btn btn-success">Edit</Link> <button  class="btn btn-danger" onClick={() => {handleDelete(admin._id)}}>Delete</button></td></td>
                                </tr>
                            ))}
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Account;