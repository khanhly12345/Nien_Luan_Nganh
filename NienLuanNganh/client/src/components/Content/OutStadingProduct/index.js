import style from './outstadingproduct.module.scss'
import clsx from 'clsx'
import Product from '../SlideProduct/Product'

function OutStadingProduct() {
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
                        </div>
                        <div className={clsx(style.col_product, 'col-2')}>
                            <Product />
                        </div>
                        <div className={clsx(style.col_product, 'col-2')}>
                            <Product />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OutStadingProduct;