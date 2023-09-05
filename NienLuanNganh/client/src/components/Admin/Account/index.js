import { Link } from 'react-router-dom';

function Account () {
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
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Account;