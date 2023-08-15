import { Link } from 'react-router-dom';
import style from  './product.module.scss'
import clsx from 'clsx' 

function Product() {
    return(

            <div className={clsx(style.wrap_product)}>
                <div class={clsx( style.card, "card")}>
                    <Link to='/detail'><img src="http://localhost:3000/img/product/product1.webp" class={clsx(style.img_product, "card-img-top")} alt="..."/></Link>
                    <div class="card-body">
                        <p>HP</p>
                        <p class="card-title">Laptop HP 15s-fq2712TU</p>
                        <p className={clsx(style.price)}> 189.000 ₫</p>
                    </div>
                </div>
            </div>
    )
}

export default Product;