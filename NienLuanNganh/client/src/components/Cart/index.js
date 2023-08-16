import style from './cart.module.scss'
import clsx from 'clsx'

function Cart() {
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
                    <div className='row' style={{ padding: '10px 5px', textAlign: 'center'}}>
                        <div className='col-6'>
                            <div className='row'>
                                <div className='col-4'>
                                    <img src='http://localhost:3000/img/product/product1.webp' style={{ width: '100%'}} />
                                </div>
                                <div className='col-8' style={{ paddingTop: '15px'  }}>
                                    <span>Máy tính xách tay/ Laptop HP Pavilion 14-dv2074TU (7C0P3PA) (i5-1235U) (Vàng)</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-2' style={{ paddingTop: '15px'  }}>
                            <span style={{ color: 'black', fontWeight: '600' }}>15.990.000đ</span>
                            <div style={{ 'text-decoration': 'line-through' }}>18.990.000đ</div>
                        </div>
                        <div className='col-2' style={{ paddingTop: '15px'  }}>
                                <div style={{ display: 'flex', 'justify-content': 'space-around', backgroundColor: 'rgb(211 214 227)', height: '40px', borderRadius: '5px'}}>
                                    <button style={{ border: 'none' , backgroundColor: 'rgb(211 214 227)'}}>-</button>
                                    <div style={{ paddingTop: '10px', color: 'black' }}>3</div>
                                    <button style={{ border: 'none' , backgroundColor: 'rgb(211 214 227)'}}>+</button>
                                </div>
                        </div>
                        <div className='col-2' style={{ paddingTop: '15px'  }}>
                            <span style={{ color: 'black', fontWeight: '600' }}>15.990.000đ</span>
                            <div style={{ paddingTop: '10px' }}>
                                <a href=''>Xóa</a>
                            </div>
                        </div>
                    </div>
                    <div className='row' style={{ padding: '10px 5px', textAlign: 'center'}}>
                        <div className='col-6'>
                            <div className='row'>
                                <div className='col-4'>
                                    <img src='http://localhost:3000/img/product/product1.webp' style={{ width: '100%'}} />
                                </div>
                                <div className='col-8' style={{ paddingTop: '15px'  }}>
                                    <span>Máy tính xách tay/ Laptop HP Pavilion 14-dv2074TU (7C0P3PA) (i5-1235U) (Vàng)</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-2' style={{ paddingTop: '15px'  }}>
                            <span style={{ color: 'black', fontWeight: '600' }}>15.990.000đ</span>
                            <div style={{ 'text-decoration': 'line-through' }}>18.990.000đ</div>
                        </div>
                        <div className='col-2' style={{ paddingTop: '15px'  }}>
                                <div style={{ display: 'flex', 'justify-content': 'space-around', backgroundColor: 'rgb(211 214 227)', height: '40px', borderRadius: '5px'}}>
                                    <button style={{ border: 'none' , backgroundColor: 'rgb(211 214 227)'}}>-</button>
                                    <div style={{ paddingTop: '10px', color: 'black' }}>3</div>
                                    <button style={{ border: 'none' , backgroundColor: 'rgb(211 214 227)'}}>+</button>
                                </div>
                        </div>
                        <div className='col-2' style={{ paddingTop: '15px'  }}>
                            <span style={{ color: 'black', fontWeight: '600' }}>15.990.000đ</span>
                            <div style={{ paddingTop: '10px' }}>
                                <a href=''>Xóa</a>
                            </div>
                        </div>
                    </div>
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
                            <span style={{ color: 'black' }}>Thành Tiền</span><span style={{ color: 'red' , fontWeight: '600' }}>15.990.000đ</span>
                        </div>
                        <div className={clsx(style.button_buy)} style={{ marginTop: '10px' }}>
                                    <div>Mua Ngay</div>
                                    <div style={{ fontSize: '12px' }}>Bạn cần đăng nhập để tiếp tục</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;