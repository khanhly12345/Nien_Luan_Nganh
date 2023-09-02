import style from './filter.module.scss'
import clsx from 'clsx'
import axios from 'axios';
import { Link, useParams  } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Product from '../Content/SlideProduct/Product'
function Filter() {
    const [products, setProducts] = useState([])

    const { id } = useParams()
    let category;
    let titleCate;
    if(id == '64e02570d4123118d9bb8a8c') {
        category = 'phukien'
        titleCate = 'Phụ Kiện'
    }else if(id == '64e025fad4123118d9bb8a8d') {
        category = 'laptop'
        titleCate = 'Laptop - Máy Tính Xách Tay'
    }else{
        category = 'phone'
        titleCate = 'Điện Thoại Di Động'
    }

    useEffect(() => {
        axios.get(`/api/products/showCategory/${category}`)
            .then((res) => {
                setProducts(res.data)
            })
            .catch((error) => {
                console.log('filter', error)
            })
    }, [id])

    console.log(products)

    return (
        <div className='container' style={{ marginTop: '20px' }}>
            <div className='row'>
                <div className='col-2' style={{ backgroundColor: 'white', borderRadius: '5px' }}>
                    <div className={clsx(style.wrap_filter)}>
                        <div className='about_price'>
                            <span>Khoảng giá</span><br></br>
                            <input type='checkbox' id='20000000'/><label for='20000000'> {'<'} 20.000.000đ</label><br></br>
                            <input type='checkbox' id='21000000'/><label for='21000000'> {'>'} 20.000.000đ</label>
                            <hr></hr>
                        </div>
                    </div>
                </div>
                <div className='col-10'>
                    <div style={{ backgroundColor: 'white', padding: '10px 15px 5px 15px', color: 'black', borderRadius: '5px' }}><h5 style={{ fontWeight: '600 !important' }}>{titleCate}</h5></div>
                    <div className='product' style={{ backgroundColor: 'white', marginTop: '5px', padding: '10px', borderRadius: '5px' }}>
                        <div className='row'>
                                {products.map((product , index) => (
                                    <div className={clsx(style.col_product, 'col-3')}>
                                        <Product key={index} value={product} />
                                    </div>
                                ))} 
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default Filter;