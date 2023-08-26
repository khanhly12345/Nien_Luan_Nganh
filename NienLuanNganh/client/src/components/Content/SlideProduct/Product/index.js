import { Link } from 'react-router-dom';
import style from  './product.module.scss'
import clsx from 'clsx' 
import { HandlePrice } from '../../../../handlePrice';
function Product({value}) {

    return(

            <div className={clsx(style.wrap_product)}>
                <div class={clsx( style.card, "card")}>
                    <Link to={'/detail/' + value._id}><img src={"/" + value.img} class={clsx(style.img_product, "card-img-top")} alt="..."/></Link>
                    <div class="card-body">
                        <p>{value.branch}</p>
                        <p class="card-title" style={{ height: '50px' }}>{value.name}</p>
                        <p className={clsx(style.price)}> {HandlePrice(value.price)}</p>
                    </div>
                </div>
            </div>
    )
}

export default Product;