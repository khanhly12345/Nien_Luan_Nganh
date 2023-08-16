import { Link } from 'react-router-dom';
import style from './detail.module.scss';
import clsx from 'clsx' 
import SubDetail from './SubDetailProduct';
import Product from '../Content/SlideProduct/Product';
import Carousel from "react-multi-carousel";
import PhuKienDetail from './PhuKienDetail';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

function Detail () {
    let value = 'phukien'
    return (
        <>
        <div className='container'>
            <div style={{ marginTop: '15px' }}>
                <Link to='/'>Trang chủ </Link> <span style={{ marginLeft: '5px', marginRight:'10px' }}> &gt;</span>
                <span>Laptop Dell Vostro 5620 (70282719) (i5-1240P/RAM 16GB/512GB SSD/ Windows 11 + Office)</span>
            </div>
        </div>
        <div className='container' style={{ left: '10px', position: 'relative'}}>
            <div className={clsx(style.wrap_detail, 'row')}>
                <div className={clsx(style.product, 'col-8')}>
                    <div className={clsx(style.wrap_product, 'row')}>
                        <div className='col-4'>
                            <img src='http://localhost:3000/img/product/product1.webp' style={{ width: '100%' }} alt='' />
                        </div>
                        <div className='col-7'>
                            <h4 style={{ color : 'black' }}>
                                Laptop HP Pavilion 14-dv2070TU (7C0V9PA) (i3-1215U/RAM 8GB/256GB SSD/ Windows 11)
                            </h4>
                            <div>
                                Thương hiệu: <span style={{ color: 'blue' }}>HP</span>
                            </div>
                            <div style={{ color: 'blue', 'font-size': '20px', fontWeight: '600' }}>
                                12.990.000 <span>₫</span>
                            </div>
                            <div style={{ 'text-decoration': 'line-through' }}>
                                15.990.000 <span>₫</span>
                            </div>
                            <hr></hr>
                            <div>
                                <div>
                                    KHUYẾN MÃI ĐÃ NHẬN
                                </div>
                                <div style={{ display: 'flex', marginTop: '5px' }}>
                                    <img src='http://localhost:3000/img/logo/gitf.png' style={{ height: '30px', marginTop: '5px', marginRight: '10px' }} alt=''/>
                                    <div>
                                        1x Mã giảm thêm 5% tối đa 300.000đ cho toàn bộ sản phẩm Điện Máy - Điện Gia Dụng
                                    </div>
                                </div>
                                <div style={{ display: 'flex' , marginTop: '5px'}}>
                                    <img src='http://localhost:3000/img/logo/gitf.png' style={{ height: '30px', marginTop: '5px', marginRight: '10px' }} alt=''/>
                                    <div>
                                        1x Mã giảm thêm 150.000 cho một số chuột Logitech, MSI, Newmen, tai nghe Zidli
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                            <div className={clsx(style.wrap_button)}>
                                <div className={clsx(style.button_buy)}>
                                    Mua Ngay
                                </div>
                                <div className={clsx(style.button_buy)} style={{ marginLeft: '10px', backgroundColor: 'white',  color : 'blue', border: '1px solid blue' }}>
                                    Thêm Vào Giỏ Hàng
                                </div>
                            </div>
                            
                        </div>
                    </div>  
                </div>
                {/* {value === 'phukien'? <PhuKienDetail /> : <SubDetail /> } */}
                <SubDetail />
            </div>
        </div>
        <div className='container' >
            <div className={clsx(style.ralation_product)}>
                <h4 style={{ color: 'black' }}>Sản Phẩm Liên Quan</h4>
                <div style={{ marginTop: '30px' }}>
                    <Carousel responsive={responsive}>
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </Carousel>;
                </div>
            </div>
        </div>
        </>
    )
}

export default Detail;