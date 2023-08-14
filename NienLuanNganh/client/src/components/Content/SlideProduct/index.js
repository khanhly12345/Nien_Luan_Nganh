import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from './slideproduct.module.scss'
import Product from './Product';
import clsx from 'clsx'
import { useState } from "react";

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

function SlideProduct() {
    const [value, setValue] = useState('laptop');
    const handleCheck = (product) => {
        setValue(product)
    }
    return(
        <div className='container' style={{ 'margin-top': '20px'}}>
            <div className={clsx(style.wrap_slidepProduct)}>
                <img src='http://localhost:3000/img/logo/slide_logo.webp' alt='' style={{ position: 'absolute', width: '100%', height: '100%'}}/>
                <div className={clsx(style.nav_slidepProduct)}>
                    <div className='row'>
                        <div className='col-4' style={{ 'padding-right': 0}}>
                            <div className={clsx(style.title)} style={value === 'dienthoai'? { background: 'transparent', color: 'white'} : {}}  onClick={() => {handleCheck('dienthoai')}}>
                                Laptop Giảm Giá
                            </div>
                        </div>
                        <div className='col-4' style={{ 'padding': 0}}>
                            <div className={clsx(style.title)}  style={value === 'laptop'? { background: 'transparent', color: 'white'} : {}} onClick={() => {handleCheck('laptop')}}>
                                Laptop Giảm Giá
                            </div>
                        </div>
                        <div className='col-4' style={{ 'padding-left': 0}}>
                            <div className={clsx(style.title)} style={value === 'phukien'? { background: 'transparent', color: 'white'} : {}} onClick={() => {handleCheck('phukien')}}>
                                Laptop Giảm Giá
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
                    
                {/* </div> */}

            </div>
        </div>
    )
}

export default SlideProduct;