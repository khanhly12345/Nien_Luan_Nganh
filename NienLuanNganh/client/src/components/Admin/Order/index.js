import style from './order.module.scss'
import clsx from 'clsx'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Order() {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        axios.get('/api/order/show')
            .then((res) => {
                setOrders(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const handleDelete = (id) => {
        axios.post('/api/order/delete', {
            id
        })
        .then((res) => {
            if(res.data.message) {
                window.location.href = '/admin/order'
            }
        })
        .catch(error => {
            console.log(error)
        })
    }

    console.log(orders)

    return (
        <div className='productadmin'>
            <div className='' style={{ padding: '10px' }}>
                <h1>Order</h1>
            </div>
            <div style={{ padding: '10px' }}>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Username</th>
                            <th scope="col">Phone</th>
                            <th scope="col">City</th>
                            <th scope="col">District</th>
                            <th scope="col">Time</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {orders.map((order, index) => (
                            <tr>
                                <th scope="col">{index + 1}</th>
                                <td><Link to={'/admin/detailOrder/' + order._id} style={{ color: 'blue' }}>{order.user.username}</Link></td>
                                <td>{order.user.phone}</td>
                                <td>{order.user.city}</td>
                                <td>{order.user.district}</td>
                                <td>{order.createdAt}</td>
                                <td><button className='btn btn-danger' onClick={() => {handleDelete(order._id)}}>Delete</button></td>
                            </tr>
                        ))}
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Order;