import style from './detailorder.module.scss'
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from 'react';
import { HandlePrice } from '../../../../handlePrice';

function DetailOrder() {
    const [orders, setOrders] = useState([])
    const {id} = useParams();

    useEffect(() => {
        axios.get(`/api/order/showReceipt/${id}`)
            .then(res => {
                setOrders(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])  

    return (
        <div className='productadmin'>
            <div style={{ padding: '10px' }}>
                <h1>Receipt</h1>
                <div style={{ color: 'black', float: 'right', marginRight:'50px'}}>Receipt Voucher: {orders._id}</div>
                <div style={{ padding: '10px' }}>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Img</th>
                            <th scope="col">Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.item &&
                            orders.item.map((order, index) => (
                                <tr>
                                    <th scope="col">{index + 1}</th>
                                    <td width="130px"><img style={{ width: '65%' }} src={'/' + order.product.img} /></td>
                                    <td width="400px">{order.product.name}</td>
                                    <td>{order.quantity}</td>
                                    <td>{HandlePrice(order.product.price)}</td>
                                    
                                </tr>
                            ))
                        }
                        <tr style={{ position: 'relative', left: '850px'}}>
                            <td colSpan='5'><span>Total: </span><span style={{ color: 'red', fontWeight: '600' }}>{HandlePrice(orders.totalAmout)}</span></td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    )
}

export default DetailOrder;