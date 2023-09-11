import style from './productadmin.module.scss'
import clsx from 'clsx'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { HandlePrice } from '../../../handlePrice';

function ProductAdmin() {

    const [products, setPrducts] = useState([])
    const [datas, setDatas] = useState([])
    useEffect(() => {
        axios.get('/api/products/show')
            .then((res) => {
                setPrducts(res.data)
            })
            .catch(error => {
                console.log("error product", error)
            })
    }, [])


    const handleDelete = (id, img) => {
        axios.post('/api/products/delete', {
            id,
            img
        })
        .then((res) => {
            setPrducts(preProduct => preProduct.filter(product => product._id !== id))
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/api/products/searchadmin', {
            datas
        })
        .then(res => {
            setPrducts(res.data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className={clsx(style.productadmin)} style={{ height: '700px', overflow: 'scroll'  }}>
            <div className='d-flex' style={{ 'justify-content': 'space-between', padding: '10px' }}>
                <h1>Product</h1>
                <div style={{ paddingTop: '10px' }}>
                    <form class="form-inline my-2 my-lg-0 d-flex" onSubmit={(e) => handleSubmit(e)}>
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={datas} onChange={(e) => setDatas(e.target.value)}/>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </div>
            <div>
                <Link to='/admin/addProduct' className='btn btn-primary' style={{ marginLeft: '10px' }}>Add Product</Link>
            </div>
            <div style={{ padding: '10px' }}>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Img</th>
                            <th scope="col">NameProduct</th>
                            <th scope="col">Branch</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr  key={index}>
                                <th scope="row">{index + 1}</th>
                                <td width="130px"><img style={{ width: '65%' }} src={'../' + product.img} /></td>
                                <td>{product.name}</td>
                                <td>{product.branch}</td>
                                <td>{HandlePrice(product.price)}</td>
                                <td>{product.quantity}</td>
                                <td><Link to={'/admin/editProduct/' + product._id} class="btn btn-success">Edit</Link> <button  class="btn btn-danger" onClick={() => {handleDelete(product._id, product.img)}}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductAdmin;