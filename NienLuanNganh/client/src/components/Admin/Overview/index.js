import { Bar, Pie } from 'react-chartjs-2'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';
import style from './overview.module.scss'
import clsx from 'clsx';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { HandlePrice } from '../../../handlePrice';

ChartJS.register(ArcElement, Tooltip, Legend);

function Overview() {
    const [data, setData] = useState({ labels: [], datasets: [] })
    const [dataPie, setDataPie] = useState({ labels: [], datasets: [] })
    const [countProduct, setCountProduct] = useState([])
    const [countUser, setCountUser] = useState([])
    const [countOrder, setCountOrder] = useState([])
    const [revenue, setRevenue] = useState([])

    useEffect(() => {
        axios.get('/api/order/totalorder')
            .then((response) => {
                const orders = response.data;
                const labels = orders.map((order) => `Đơn hàng ${order._id}`);
                const totalAmounts = orders.map((order) => order.totalAmount);
                console.log(totalAmounts)
                const chartData = {
                labels: labels,
                datasets: [
                    {
                        label: 'Tổng 5 đơn hàng có giá trị cao nhất',
                        data: totalAmounts,
                        backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    },
                ],
                };
        
                setData(chartData);
            })
            .catch(error => {
                console.log("chart order", error)
            })
    }, [])  

    useEffect(() => {
        axios.get('/api/order/userbyitems') 
            .then((res) => {
                const users = res.data
                const lables = users.map((user) => `user ${user._id}`)
                const totalUserOrder = users.map((user) => user.totalUsers) 

                const dataChartPie= {
                    labels: lables,
                    datasets: [
                      {
                        label: 'Tổng lượt mua',
                        data: totalUserOrder,
                        backgroundColor: [
                          'rgba(255, 99, 132, 0.2)',
                          'rgba(54, 162, 235, 0.2)',
                          'rgba(255, 206, 86, 0.2)',
                          'rgba(75, 192, 192, 0.2)',
                          'rgba(153, 102, 255, 0.2)',
                        ],
                        borderColor: [
                          'rgba(255, 99, 132, 1)',
                          'rgba(54, 162, 235, 1)',
                          'rgba(255, 206, 86, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(153, 102, 255, 1)',
                        ],
                        borderWidth: 1,
                      },
                    ],
                };
                setDataPie(dataChartPie)
            })
    }, [])

    useEffect(() => {
        axios.get('/api/admin/countproduct')
            .then(res => {
                setCountProduct(res.data)
            })
    }, [])

    useEffect(() => {
        axios.get('/api/admin/countuser')
            .then(res => {
                setCountUser(res.data)
            })
    }, [])

    useEffect(() => {
        axios.get('/api/admin/countorder')
            .then(res => {
                setCountOrder(res.data)
            })
    }, [])

    useEffect(() => {
        axios.get('/api/admin/revenue')
            .then(res => {
                setRevenue(res.data)
            })
    }, [])

    return (
        <div className={clsx(style.wrap_chart)}>
            <div className='row'>
                <h1>Overview</h1>
            </div>
            <div className='row' style={{ marginBottom: '20px' }}>
                <div className={clsx('col', style.statistical)} >
                    <div className='row'>
                        <div className={clsx('col', style.wrap_svg)} style={{ backgroundColor: 'rgba(36, 153, 239, 0.2)' }}>
                            <svg style={{ width: '100%', left: '1px', color: 'rgb(36, 153, 239)' }} className={clsx(style.svg)}>
                                <path d="M30.6312 13.0397H24.0766L18.0834.06301C17.823 3.67986 17.3851 3.48828 16.9472 3.48828C16.5093 3.48828 16.0714 3.67986 15.8114 4.07669L9.81783 13.0397H3.26318C2.51056 
                                13.0397 1.89478 13.6555 1.89478 14.4081C1.89478 14.5313 
                                1.90846 14.6544 1.94951 14.7776L5.42525 27.4627C5.73999 
                                28.6122 6.79366 29.4606 8.05259 29.4606H25.8418C27.1008 
                                29.4606 28.1544 28.6122 28.4828 27.4627L31.9586 14.7776L31.9996 
                                14.4081C31.9996 13.6555 31.3839 13.0397 30.6312 13.0397ZM16.9472 
                                7.29244L20.7787 13.0397H13.1157L16.9472 7.29244ZM25.8418 26.7238L8.06627 
                                26.7374L5.05579 15.7765H28.8523L25.8418 26.7238ZM16.9472 
                                18.5133C15.442 18.5133 14.2104 19.7449 14.2104 21.2501C14.2104 
                                22.7554 15.442 23.987 16.9472 23.987C18.4524 23.987 19.684 22.7554 
                                19.684 21.2501C19.684 19.7449 18.4524 18.5133 16.9472 18.5133Z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <div className={clsx('col', style.content)}>
                                <h5 style={{ color: 'rgb(36, 153, 239)' }}>
                                    Product
                                </h5>
                                <h5 style={{ color: 'rgb(36, 153, 239)' }}>
                                    {countProduct.length}
                                </h5>
                        </div>
                    </div>
                </div>
                <div className={clsx('col', style.statistical)} >
                    <div className='row'>
                        <div className={clsx('col', style.wrap_svg)}>
                            <svg style={{  left: '2px' }} className={clsx(style.svg)}>
                                <path d="M2.28393 6.3137H2.55761C3.61128 6.3137 4.47337 7.17579 4.47337 8.22946V17.8083C4.47337 18.862 3.61128 19.724 2.55761 19.724H2.28393C1.23026 19.724 0.368164 18.862 0.368164 17.8083V8.22946C0.368164 7.17579 1.23026 6.3137 2.28393 6.3137V6.3137ZM9.94698 0.566406C11.0007 0.566406 11.8627 1.4285 11.8627 2.48217V17.8083C11.8627 18.862 11.0007 19.724 9.94698 19.724C8.89331 19.724 8.03122 18.862 8.03122 17.8083V2.48217C8.03122 1.4285 8.89331 0.566406 9.94698 0.566406ZM17.61 11.5136C18.6637 11.5136 19.5258 12.3757 19.5258 13.4294V17.8083C19.5258 18.862 18.6637 19.724 17.61 19.724C16.5564 19.724 15.6943 18.862 15.6943 17.8083V13.4294C15.6943 12.3757 16.5564 11.5136 17.61 11.5136V11.5136Z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <div className={clsx('col ', style.content)}>
                                <h5 style={{ color: 'rgb(167, 152, 255)' }}>
                                    User
                                </h5>
                                <h5 style={{ color: 'rgb(167, 152, 255)' }}>
                                    {countUser.length}
                                </h5>
                        </div>
                    </div>
                </div>
                <div className={clsx('col', style.statistical)} >
                    <div className='row'>
                        <div className={clsx('col', style.wrap_svg)} style={{ backgroundColor: 'rgba(255, 107, 147, 0.2)' }}>
                            <svg style={{ width: '100%', color: 'rgb(255, 107, 147)', left: '6px' }} className={clsx(style.svg)}>
                                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
                            </svg>
                        </div>
                        <div className={clsx('col', style.content)}>
                                <h5 style={{ color: 'rgb(255, 107, 147)' }}>
                                    Order
                                </h5>
                                <div style={{ color: 'rgb(255, 107, 147)' }}>
                                    {countOrder.length}
                                </div>
                        </div>
                    </div>
                </div>
                <div className={clsx('col', style.statistical)}>
                    <div className='row'>
                        <div className={clsx('col', style.wrap_svg)} style={{ backgroundColor: 'rgba(255, 151, 119, 0.2)' }}>
                            <svg style={{ width: '100%', color: 'rgb(255, 151, 119)', left: '6px' }} className={clsx(style.svg)}>
                                <path d="M21,4H15.89a9.08,9.08,0,0,0-4,1l-.62.31A6.93,6.93,0,0,1,8.11,6H3A1,1,0,0,0,2,7V19a1,1,0,0,0,1,1H8.11a9.08,9.08,0,0,0,4-.95l.62-.31A6.93,6.93,0,0,1,15.89,18H21a1,1,0,0,0,1-1V5A1,1,0,0,0,21,4Zm-1,9a3,3,0,0,0-3,3H15.89a9.11,9.11,0,0,0-4,.95l-.62.31A7.06,7.06,0,0,1,8.11,18H7a3,3,0,0,0-3-3V11A3,3,0,0,0,7,8H8.11a9.11,9.11,0,0,0,4-1l.62-.31A7.06,7.06,0,0,1,15.89,6H17a3,3,0,0,0,3,3Zm-5-1a3,3,0,1,1-3-3A3,3,0,0,1,15,12Z"></path>
                            </svg>
                        </div>
                        <div className={clsx('col', style.content)}>
                                <h5 style={{ color: 'rgb(255, 151, 119)' }}>
                                    Revenue
                                </h5>
                                <h5 style={{ color: 'rgb(255, 151, 119)' }}>
                                    {HandlePrice(revenue)}
                                </h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className={clsx('col-6')} style={{ background: 'white' }}>
                    <Bar data={data}/>
                </div>
                <div className={clsx('col-6', style.pie_chart)} style={{ background: 'white', height: '500px', textAlign: 'center'}}>
                    <h5 style={{ color: 'rgb(36, 153, 239)', paddingTop: '5px' }}>Tổng 5 user đặt hàng nhiều nhất</h5>
                    <div style={{ height: '90%' }}>
                        <Pie data={dataPie}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview;