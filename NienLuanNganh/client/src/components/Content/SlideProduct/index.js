import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from './slideproduct.module.scss'
import Product from './Product';
import clsx from 'clsx'
import { useState, useEffect } from "react";
import axios from 'axios';

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

const product = {
    name: 'laptop',
    img: '1692796326562-laptop5.webp',
    branch: 'hp',
    price: '200000'
}

function SlideProduct() {
    const [value, setValue] = useState('laptop');
    const [products, setProducts] = useState([])
    
    const handleCheck = (product) => {
        setValue(product)
    }

    useEffect(() => {
        axios.get(`/api/products/showCategory/${value}`)
            .then(res => {
                setProducts(res.data)
            })
            .catch(error => {
                console.log(Error)
            })
    }, [value])

    return(
        <div className='container' style={{ 'margin-top': '20px'}}>
            <div className={clsx(style.wrap_slidepProduct)}>
                <img src='http://localhost:3000/img/logo/slide_logo.webp' alt='' style={{ position: 'absolute', width: '100%', height: '100%'}}/>
                <div className={clsx(style.nav_slidepProduct)}>
                    <div className='row'>
                        <div className='col-4' style={{ 'padding-right': 0}}>
                            <div className={clsx(style.title)} style={value === 'phone'? { background: 'transparent', color: 'white'} : {}}  onClick={() => {handleCheck('phone')}}>
                                Điện Thoại Giảm Giá
                            </div>
                        </div>
                        <div className='col-4' style={{ 'padding': 0}}>
                            <div className={clsx(style.title)}  style={value === 'laptop'? { background: 'transparent', color: 'white'} : {}} onClick={() => {handleCheck('laptop')}}>
                                Laptop Giảm Giá
                            </div>
                        </div>
                        <div className='col-4' style={{ 'padding-left': 0}}>
                            <div className={clsx(style.title)} style={value === 'phukien'? { background: 'transparent', color: 'white'} : {}} onClick={() => {handleCheck('phukien')}}>
                                Phụ Kiện Giảm Giá
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className={clsx(style.sub_slidepProduct, 'container-fluid', 'd-flex')}> */}
                    {/* <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product /> */}
                <div style={{ 'margin-top' : '20px', width: '1020px', float: 'right', 'margin-right' : '20px' }}>
                    <Carousel responsive={responsive}>
                        {products.map(product => (
                            <Product value={product}/>
                        ))}
                        <Product value={product}/>
                        <Product value={product}/>
                        <Product value={product}/>
                        <Product value={product}/>
                        <Product value={product}/>
                        <Product value={product}/>
                        <Product value={product}/>
                    </Carousel>;
                </div>
                    
                {/* </div> */}

            </div>
        </div>
    )
}

export default SlideProduct;