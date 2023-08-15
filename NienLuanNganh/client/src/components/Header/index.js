import { Link } from 'react-router-dom';
import style from './header.module.scss'
import clsx from 'clsx'


function Header() {
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
                                <Link to='/'><img style={{ width: '33px', height: '70%' }} src='http://localhost:3000/img/logo/logo.png' alt=''/></Link>
                                <div className={clsx(style.wrap_dmsp)}>
                                    <div>
                                        <i class="fa fa-bars"></i>
                                        <span style={{ 'padding-left': 5}} className={clsx(style.catalog)}>Danh mục sản phẩm </span>
                                    </div>
                                </div>
                            </div>
                            <ul className={clsx(style.drop_menu)}>
                                <li><a href='#'>Sản phẩm Laptop</a></li>
                                <li><a href='#'>Sản phẩm Điện Thoại</a></li>
                                <li><a href='#'>Phụ Kiện </a></li>
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
                                <a href='#' className={clsx('d-flex')}>
                                    <div className={clsx(style.sub_user)}>
                                        <i class="fa fa-user"></i>
                                    </div>  
                                    <div className={clsx(style.user_signin)}>Đăng nhập <br></br> Đăng ký</div>
                                </a>
                                
                            </div>
                            <div className='notification'>
                                <div className={clsx(style.sub_user, style.notifi)}>
                                    <i class="fa fa-bell"></i>
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
                                    <div className={clsx(style.user_signin)}>Giỏ hàng của bạn<br></br> <span>(1) sản phấm</span></div>
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