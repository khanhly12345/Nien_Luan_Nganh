import axios from "axios";
import { useState, useEffect } from "react";
function User() {
    const [users, setUser] = useState([])
    
    useEffect(() => {
       axios.get('/api/user/show')
            .then((res) => {
                setUser(res.data)
            })
    }, [])
    return (
        <div className='productadmin' style={{ padding: '10px' }}>
            <h1>User</h1>
            <div style={{ padding: '10px' }}>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Username</th>
                            <th scope="col">Password</th>
                            <th scope="col">Phone</th>
                            <th scope="col">City</th>
                            <th scope="col">District</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{user.username}</td>
                                <td>{user.password}</td>
                                <td>{user.phone}</td>
                                <td>{user.city}</td>
                                <td>{user.district}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default User;