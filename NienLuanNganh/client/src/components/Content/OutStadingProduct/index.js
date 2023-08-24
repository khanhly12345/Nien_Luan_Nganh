import style from './outstadingproduct.module.scss'
import clsx from 'clsx'
import Product from '../SlideProduct/Product'
import axios from 'axios';
import { useEffect, useState } from 'react';

function OutStadingProduct() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('/api/products/show')
            .then(res => {
                setProducts(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    console.log(products)
    return(
        <div className="container" style={{ 'margin-top': '20px'}}>
            <div className={clsx(style.wrap_outStadingProduct)}>
                <div className={clsx(style.nav_outStading)}>
                    <h3 style={{ color: 'black', 'font-weight': '600'}}>Sản Phẩm Nổi Bật</h3>
                    <div>
                        <a href='#'>Xem tất cả &gt;</a>
                    </div>
                </div>
                <div className={clsx(style.wrap_product)}>
                    <div className='row'>
                        {products.map((product) => (
                            <div className={clsx(style.col_product, 'col-2')}>
                                <Product value={product} />
                            </div>
                        ))}
                        {/* <div className={clsx(style.col_product, 'col-2')}>
                            <Product />
                        </div>
                        <div className={clsx(style.col_product, 'col-2')}>
                            <Product />
                        </div>
                        <div className={clsx(style.col_product, 'col-2')}>
                            <Product />
                        </div>
                        <div className={clsx(style.col_product, 'col-2')}>
                            <Product />
                        </div>
                        <div className={clsx(style.col_product, 'col-2')}>
                            <Product />
                        </div>
                        <div className={clsx(style.col_product, 'col-2')}>
                            <Product />
                        </div>
                        <div className={clsx(style.col_product, 'col-2')}>
                            <Product />
                        </div>
                        <div className={clsx(style.col_product, 'col-2')}>
                            <Product />
                        </div>
                        <div className={clsx(style.col_product, 'col-2')}>
                            <Product />
                        </div>
                        <div className={clsx(style.col_product, 'col-2')}>
                            <Product />
                        </div>
                        <div className={clsx(style.col_product, 'col-2')}>
                            <Product />
                        </div>
                        <div className={clsx(style.col_product, 'col-2')}>
                            <Product />
                        </div>
                        <div className={clsx(style.col_product, 'col-2')}>
                            <Product />
                        </div>
                        <div className={clsx(style.col_product, 'col-2')}>
                            <Product />
                        </div>
                        <div className={clsx(style.col_product, 'col-2')}>
                            <Product />
                        </div>
                        <div className={clsx(style.col_product, 'col-2')}>
                            <Product />
                        </div>
                        <div className={clsx(style.col_product, 'col-2')}>
                            <Product />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OutStadingProduct;