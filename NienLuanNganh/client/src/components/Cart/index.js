import { useState, useEffect, useCallback } from 'react';
import style from './cart.module.scss'
import clsx from 'clsx'
import axios from 'axios';
import { HandlePrice } from '../../handlePrice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import io from 'socket.io-client'
import jwtDecode from 'jwt-decode';

const socket = io("http://localhost:3001")

function Cart() {
    const storedCartItems = JSON.parse(localStorage.getItem('id')) || [];
    const [carts, setCarts] = useState([])
    const [quantities, setQuantities] = useState([])
    const [count, setCount] = useState()
    let getCount = document.getElementsByClassName('count_cart')[0]
    useEffect(() => {
            axios.post('/api/products/carts', storedCartItems)
                .then((res) => {
                    setCarts(res.data);
                    setQuantities(new Array(res.data.length).fill(1));
                })
                .catch(error => {
                    console.log(error)
                })  
    }, [count])

    const inCreaseQuantity = (index) => {
        const newQuantities = [...quantities]
        newQuantities[index] = newQuantities[index]  + 1
        setQuantities(newQuantities)
    }

    const deCreaseQuantity = useCallback((index) => {
        const newQuantities = [...quantities]
        if(newQuantities[index] > 1) {
             newQuantities[index] = newQuantities[index]  - 1
            setQuantities(newQuantities)
        }
    }, [quantities])

    let totalPrice;
    const arrayPrice = carts.map(cart => parseInt(cart.price));   
    totalPrice =  arrayPrice.reduce((initPirce, currentPirce, index) => (
        initPirce + currentPirce * quantities[index]
    ), 0);


    const handleBuy = () => {
        let getToken = localStorage.getItem('token')
        
        if(carts.length === 0) {
            window.location.href = '/'
        }else{
            if(!getToken){
                window.location.href = '/login'
            }else{
                const jwtToken = getToken;
                const decodedToken = jwtDecode(jwtToken);
                socket.emit('purchase', ({userId: decodedToken.userId, message: 'Bạn đã đặt hàng thành công'}))
                axios.post('/api/order/create', {   
                    getToken,
                    carts,
                    quantities,
                    totalPrice
                })
                .then(res => {
                    console.log(res.data.message)
                    if(res.data.message) {
                        localStorage.removeItem('id')
                        setCarts([])
                        getCount.innerHTML = 0
                        toast.success('Đặt hàng thành công', {
                            position: "top-right",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            });
                    }
                })
                .catch(errr => {
                    console.log(errr)
                })
            }
        }
    }
    
    let countCart = parseInt([...storedCartItems].length)

    const delelteCart = (e, index) => {
        e.preventDefault()
        storedCartItems.splice(index, 1)
        localStorage.setItem('id', JSON.stringify(storedCartItems));
        getCount.innerHTML =  countCart - 1
        setCount(storedCartItems.length)
    }

    return (
        <div className="container" style={{ marginTop: '50px' }}>   
            <div className='row'>
                <div className={clsx(style.wrap_cart, 'col-8')}>
                    <div className='row' style={{ padding: '10px 5px', textAlign: 'center', borderBottom: '1px solid rgb(211 214 227)'}}>
                        <div className='col-6'>
                            <span style={{ color: 'black' }}>CÔNG TY CỔ PHẦN THƯƠNG MẠI DỊCH VỤ PHONG VŨ</span>
                        </div>
                        <div className='col-2'>
                            <span style={{ color: 'black' }}>Đơn giá</span>
                        </div>
                        <div className='col-2'>
                            <span style={{ color: 'black' }}>Số lượng</span>
                        </div>
                        <div className='col-2'>
                            <span style={{ color: 'black' }}>Thành tiền</span>
                        </div>
                    </div>
                    { count === 0
                    ? 
                        <div className='empty_cart' style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src='http://localhost:3000/img/logo/empty_cart.webp' />
                        </div>
                    :
                        carts.map((cart, index) => (
                            <div className='row' style={{ padding: '10px 5px', textAlign: 'center'}}>
                                <div className='col-6'>
                                    <div className='row'>
                                        <div className='col-4'>
                                            <img src={'/' + cart.img} style={{ width: '100%'}} />
                                        </div>
                                        <div className='col-8' style={{ paddingTop: '15px'  }}>
                                            <span>{cart.name}</span>< br></br><br></br>
                                            <span>{cart.attributes && cart.attributes.ram}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-2' style={{ paddingTop: '15px'  }}>
                                    <span style={{ color: 'black', fontWeight: '600' }}>{HandlePrice(cart.price)}</span>
                                    <div style={{ 'text-decoration': 'line-through' }}>{HandlePrice(parseInt(cart.price) - parseInt(cart.price) * 0.1)}</div>
                                </div>
                                <div className='col-2' style={{ paddingTop: '15px'  }}>
                                        <div style={{ display: 'flex', 'justify-content': 'space-around', backgroundColor: 'rgb(211 214 227)', height: '40px', borderRadius: '5px'}}>
                                            <button 
                                                style={{ border: 'none' , backgroundColor: 'rgb(211 214 227)'}}
                                                onClick={() => {
                                                    deCreaseQuantity(index)
                                                }}
                                            >-</button>

                                            <div 
                                                className='quantity'
                                                style={{ paddingTop: '10px', color: 'black' }}
                                                // value={quantities}
                                                key={index}
                                            >{quantities[index]}</div>

                                            <button 
                                                style={{ border: 'none' , backgroundColor: 'rgb(211 214 227)'}}
                                                onClick={() => {
                                                    inCreaseQuantity(index)
                                                }}
                                            >+</button>
                                        </div>
                                </div>
                                <div className='col-2' style={{ paddingTop: '15px'  }}>
                                    <span style={{ color: 'black', fontWeight: '600' }}>{HandlePrice(parseInt(cart.price * quantities[index]))}</span>
                                    <div style={{ paddingTop: '10px' }}>
                                        <a href='' onClick={(e) => {delelteCart(e, index)}}>Xóa</a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    
                    <div className='row'>
                        <div className='col-12' style={{ backgroundColor: 'rgb(243, 243, 247)', padding: '20px 20px', borderRadius: '5px' }}>
                            <div style={{ display: 'flex', marginTop: '5px' }}>
                                    <img src='http://localhost:3000/img/logo/gitf.png' style={{ height: '20px', marginTop: '2px', marginRight: '10px' }} alt=''/>
                                    <div>
                                        1x Mã giảm thêm 5% tối đa 300.000đ cho toàn bộ sản phẩm Điện Máy - Điện Gia Dụng
                                    </div>
                            </div>
                            <div style={{ display: 'flex', marginTop: '5px' }}>
                                    <img src='http://localhost:3000/img/logo/gitf.png' style={{ height: '20px', marginTop: '2px', marginRight: '10px' }} alt=''/>
                                    <div>
                                        1x Mã giảm thêm 150.000 cho một số chuột Logitech, MSI, Newmen, tai nghe Zidli
                                    </div>
                                </div>
                                <div style={{ display: 'flex', marginTop: '5px' }}>
                                    <img src='http://localhost:3000/img/logo/gitf.png' style={{ height: '20px', marginTop: '2px', marginRight: '10px' }} alt=''/>
                                    <div>
                                        1x Balo laptop Targus 15.6 TSB883 Black (Safire) (Quà tặng - logo Phong Vũ)
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                <div className={clsx(style.payment, 'col-4')}>
                    <div className='wrap_payment'>
                        <div style={{ paddingTop: '10px' }}>
                            <span style={{ fontSize: '20px', color: 'black', fontWeight: '600' }}>Thanh Toán</span>
                        </div>
                        <div className='row' style={{ padding: '10px' }}>
                            <div className='col-12' style={{ backgroundColor: 'rgb(243, 243, 247)', padding: '20px 20px', borderRadius: '5px' }}>
                                <div style={{ display: 'flex', marginTop: '5px' }}>
                                        <img src='http://localhost:3000/img/logo/gitf.png' style={{ height: '60px', marginTop: '2px', marginRight: '10px', padding: '5px' }} alt=''/>
                                        <div>
                                            1x Bộ Voucher Sinh Nhật Phong Vũ (Quà tặng)
                                            <div>
                                                Đơn tối thiểu 10.000.000₫
                                            </div>
                                            <div>
                                                HSD: 31/08/2023
                                            </div>
                                        </div>

                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', 'justify-content': 'space-between', paddingTop: '10px' }}>
                            <span style={{ color: 'black' }}>Thành Tiền</span><span style={{ color: 'red' , fontWeight: '600' }}>{HandlePrice(totalPrice)}</span>
                        </div>
                        <div className={clsx(style.button_buy)} style={{ marginTop: '10px', cursor: 'pointer' }} onClick={handleBuy}>
                                    <div>Mua Ngay</div>
                                    <div style={{ fontSize: '12px' }}>Bạn cần đăng nhập để tiếp tục</div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Cart;