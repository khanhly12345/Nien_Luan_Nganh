import { Link } from 'react-router-dom';
import style from './header.module.scss'
import clsx from 'clsx'
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import io from 'socket.io-client'
const socket = io("http://localhost:3001")

function Header() {
    const [storeToken, setStoreToken] = useState('')
    const [items, setItems] = useState([])
    // const [notifications, setNotifications] = useState([])
    const [initNotifications, setInitNotifications] = useState([])
    let getToken
    let getItem 
    useEffect(() => {
        getToken = localStorage.getItem('token')
        getItem = JSON.parse(localStorage.getItem('id'))
        setItems(getItem)
        if(getToken) {
            const jwtToken = getToken;
            const decodedToken = jwtDecode(jwtToken);
            setStoreToken(decodedToken)
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token')
        window.location.href = '/'
    }

    useEffect(() => {
        let getToken2 = localStorage.getItem('token')

        if(getToken2) {        
            const decodedToken = jwtDecode(getToken2);
            socket.emit('getNotifications', (decodedToken.userId))
            socket.on('notifications', getNotification => {
                setInitNotifications(getNotification)
            })
        }
        // socket.on('notifications', (notification) => {
        //     setNotifications([notification]);
        // });
        return () => {
            // Ngừng lắng nghe khi component bị unmounted
            socket.off('notifications'); 
        };
    }, [])
    
    console.log(initNotifications)

    const handleNoti = (id) => {
        let getToken3 = localStorage.getItem('token')
        let getIdToken
        if(getToken3) {        
            const decodedToken2 = jwtDecode(getToken3);
            getIdToken = decodedToken2.userId
            console.log(getIdToken)
            socket.emit('setStatus', ({id, getIdToken}))
            socket.on('status', (getNotification) => {
                console.log(getNotification)
                setInitNotifications(getNotification)
            })
        }

    }

    const getNotiRead = initNotifications.filter(initNotification => initNotification.status === 'unread')

    return(
        <div className={ clsx(style.header) }>
            <div className={style.img_top}>
                <img style={{ width: '100%' }} src='http://localhost:3000/img/logo/logotop.webp' alt=''/>            
            </div>
            <div className="container" style={{ 'padding': 20 }}>
                <div className='sub_header'>
                    <div className='row'>
                        <div className={clsx(style.logo_catalog,'col-3')}>
                            <div className='d-flex'>
                                <a href='/'><img style={{ width: '33px', height: '70%' }} src='http://localhost:3000/img/logo/logo.png' alt=''/></a>
                                <div className={clsx(style.wrap_dmsp)}>
                                    <div>
                                        <i class="fa fa-bars"></i>
                                        <span style={{ 'padding-left': 5}} className={clsx(style.catalog)}>Danh mục sản phẩm </span>
                                    </div>
                                </div>
                            </div>
                            <ul className={clsx(style.drop_menu)}>
                                <li><Link to='/filter/64e025fad4123118d9bb8a8d'>Sản phẩm Laptop</Link></li>
                                <li><Link to='/filter/64e02616d4123118d9bb8a8e'>Sản phẩm Điện Thoại</Link></li>
                                <li><Link to='/filter/64e02570d4123118d9bb8a8c'>Phụ Kiện</Link></li>
                            </ul>
                        </div>
                        <div className='col-5'>
                            <div className={clsx(style.search)}>
                                <input type='text' placeholder="Tìm kiếm" />
                                <i class="fas fa-search"></i>
                            </div>
                        </div>
                        <div className='col-4 d-flex'>
                            <div className={clsx(style.user, 'd-flex')}>
                                {storeToken ?
                                <div style={{ display: 'flex', position: 'relative' }} className={clsx(style.wrap_infor)}>
                                    <div style={{ display: 'flex', width: '100%'}}>
                                        <img src='http://localhost:3000/img/logo/avatar.jpg' style={{ width: '50px', borderRadius: '50px'}} />
                                        <div style={{ paddingLeft: '5px' }}>Xin chào, <br></br><span style={{ color: 'red', fontWeight: 550, paddingTop: '10px' }}>{storeToken.username}</span></div>
                                    </div>
                                    <div className={clsx(style.infor)}>
                                        <div className={clsx(style.sub_infor)}>
                                            <button style={{ width: '100%' }} className='btn btn-primary' onClick={handleLogout}>Đăng Xuất</button>
                                        </div>
                                    </div>
                                </div>
                                
                                    
                                    :
                                    <Link to='/login' className={clsx('d-flex')}>
                                        <div className={clsx(style.sub_user)}>
                                            <i class="fa fa-user"></i>
                                        </div>  
                                        <div className={clsx(style.user_signin)}>Đăng nhập <br></br> Đăng ký</div>
                                    </Link>                             
                                }
                                
                                
                            </div>
                            <div className={clsx(style.notification)}>
                                <div className={clsx(style.sub_user, style.notifi)}>
                                    <i class="fa fa-bell"></i>
                                    <span className={clsx(style.countNoti)}>{getNotiRead.length}</span>
                                </div>
                                <div className={clsx(style.noti2)}>
                                    <div className={clsx(style.sub_noti)}>
                                        <ul>
                                            {initNotifications.map((initNotification, index) => (
                                                <>
                                                    <li 
                                                        key={index}
                                                        style={{ background: initNotification.status === 'unread' ? 'rgb(238, 226, 226)' : 'white'  }}
                                                        onClick={() => {handleNoti(initNotification._id)}}
                                                    >
                                                        {initNotification.message + ' đơn hàng ' + initNotification._id}
                                                        <br></br> <span>{initNotification.createdAt}</span>
                                                    </li>
                                                </>
                                            ))}
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={clsx(style.cart)}>
                                {/* <a href='#' className={clsx('d-flex')}>
                                    <div className={clsx(style.sub_user)}>
                                        <i class="fa fa-cart-plus"></i>
                                    </div>  
                                    <div className={clsx(style.user_signin)}>Giỏ hàng của bạn<br></br> <span>(1) sản phấm</span></div>
                                </a> */}
                                <Link to="/cart" className={clsx('d-flex')}>
                                    <div className={clsx(style.sub_user)}>
                                        <i class="fa fa-cart-plus"></i>
                                    </div>  
                                    <div className={clsx(style.user_signin)}>Giỏ hàng của bạn<br></br> <span>(<span className='count_cart' style={{ color: 'red' }}>{items !== null ? items.length : '0'}</span>) sản phấm</span></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                
    )
}

export default Header;