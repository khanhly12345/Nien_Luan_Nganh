import style from './nav.module.scss'
import clsx from 'clsx'
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Nav() {

    const navigate = useNavigate()

    const handleDelete = (e) => {
        e.preventDefault()
        localStorage.removeItem('admin')
        navigate('/loginadmin')
    }
    useEffect(() => {
        const getUl = document.querySelectorAll(".ul li a")
        console.log(getUl)
        getUl.forEach((ele) => (
            ele.addEventListener('click', function() {
                for(let i=0; i < getUl.length; i++) {
                    getUl[i].classList.remove('outStading')
                }
                ele.classList.add('outStading')
            })
        ))
    })

    return (
        <div className={clsx(style.nav)}>
            <div className='nav_header' style={{ padding: '20px' , borderBottom:'1px solid rgb(47, 55, 70)'}}>
                <img style={{ width: '15%' }} src='http://localhost:3000/img/logo/logo.png' alt='' />
                <div style={{ height: '70px', width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.04)', display: 'flex', justifyContent: ' center', alignItems:' center', borderRadius: '10px', color: 'white', marginTop:'10px' }}>
                    <h1>Admin</h1>
                </div>
            </div>
            <div className={clsx(style.navigation)}>
                <ul className='ul'>
                    <li><Link to='' className='outStading'><i class="fa fa-chart-line"></i>Overview </Link></li>
                    <li><Link to='user'><i class="fa fa-users"></i>Customer </Link></li>
                    <li><Link to='product'><i class="fa fa-laptop"></i>Products</Link></li>
                    <li><Link to='order'><i class="fa fa-cart-plus"></i>Orders</Link></li>
                    <li><Link to='account'><i class="fa fa-user"></i>Account</Link></li>
                    <li><a><i class="fa fa-wrench"></i>Setting </a></li>
                    <li><a href='' onClick={(e) => handleDelete(e)}><i class="fa fa-lock"></i>Login </a></li>
                    <li><a href='' onClick={(e) => handleDelete(e)}><i class="fa fa-arrow-right"></i>Log out </a></li>
                </ul>
            </div>
            <div>

            </div>

        </div>
    )
}

export default Nav;