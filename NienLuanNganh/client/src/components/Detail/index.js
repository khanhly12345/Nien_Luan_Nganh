import { Link, useParams  } from 'react-router-dom';
import style from './detail.module.scss';
import clsx from 'clsx' 
import SubDetail from './SubDetailProduct';
import Product from '../Content/SlideProduct/Product';
import Carousel from "react-multi-carousel";
import PhuKienDetail from './PhuKienDetail';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { HandlePrice } from '../../handlePrice';

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
    const storedCartItems = JSON.parse(localStorage.getItem('id')) || [];
    const [products, setProducts] = useState([])
    const [detail, setDetails] = useState({})
    const [cartItems, setCartItems] = useState([...storedCartItems]);
    const { id } = useParams()

    useEffect(() => {
        axios.get('/api/products/show')
            .then(res => {
                setProducts(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    useEffect(() => {
        axios.get(`/api/products/detail/${id}`)
            .then(res => {
                setDetails(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [id])

    let price = parseInt(detail.price) - parseInt(detail.price) * 0.1


    const getCart = (id) => {
        if(!cartItems.includes(id)) {
            setCartItems([...cartItems ,id])
        }
    }

    useEffect(() => {
        const arrayJSON = JSON.stringify(cartItems);
        localStorage.setItem('id', arrayJSON);

    }, [cartItems])

    console.log(cartItems)

    return (
        <>
        <div className='container'>
            <div style={{ marginTop: '15px' }}>
                <Link to='/'>Trang chủ </Link> <span style={{ marginLeft: '5px', marginRight:'10px' }}> &gt;</span>
                <span>{detail.name}</span>
            </div>
        </div>
        <div className='container' style={{ left: '10px', position: 'relative'}}>
            <div className={clsx(style.wrap_detail, 'row')}>
                <div className={clsx(style.product, 'col-8')}>
                    <div className={clsx(style.wrap_product, 'row')}>
                        <div className='col-4'>
                            <img src={'/' + detail.img} style={{ width: '100%' }} alt='' />
                        </div>
                        <div className='col-7'>
                            <h4 style={{ color : 'black' }}>
                                {detail.name}
                            </h4>
                            <div>
                                Thương hiệu: <span style={{ color: 'blue' }}>{detail.branch}</span>
                            </div>
                            <div style={{ color: 'blue', 'font-size': '20px', fontWeight: '600' }}>
                                {HandlePrice(detail.price)}
                            </div>
                            <div style={{ 'text-decoration': 'line-through' }}>
                                {
                                    HandlePrice(price)
                                }
                            </div>
                            <div className={clsx(style.ram)}>
                                {/* {detail.attributes && detail.attributes.ram.map((val, index) => (
                                    <button key={index} value={val} className={val === ram ? clsx(style.active) : ''} onClick={(e) => {handleRam(e.target.value)} }>{val}</button>
                                ))} */}
                                <button className={ clsx(style.active) }>{detail.attributes && detail.attributes.ram}</button>
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
                                <div 
                                    className={clsx(style.button_buy)} 
                                    style={{ marginLeft: '10px', backgroundColor: 'white',  color : 'blue', border: '1px solid blue' }}
                                    onClick={() => {getCart(detail._id)}}
                                >
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
                        {products.map((product , index) => (
                            <div className={clsx(style.col_product, 'col-2')}>
                                <Product key={index} value={product} />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
        </>
    )
}

export default Detail;