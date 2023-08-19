import { Link, Outlet } from 'react-router-dom';
import style from './admin.module.scss'
import clsx from 'clsx'
import Nav from './Nav'
import HeadingAdmin from './HeadingAdmin';
function Admin() {
    return (
        <div className="admin">
            <Nav />
            <HeadingAdmin />
            <Outlet />
        </div>
    )
}

export default Admin;