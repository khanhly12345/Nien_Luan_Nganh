import { Bar } from 'react-chartjs-2'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';

function Overview() {
    const [data, setData] = useState({ labels: [], datasets: [] })
    useEffect(() => {
        axios.get('/api/order/totalorder')
            .then((response) => {
                const orders = response.data;
                const labels = orders.map((order) => `Đơn hàng ${order._id}`);
                const totalAmounts = orders.map((order) => order.totalAmout);
        
                const chartData = {
                labels: labels,
                datasets: [
                    {
                        label: 'Tổng số tiền',
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

    return (
        <div className="productadmin">
            <div>
                <Bar data={data}/>
            </div>
        </div>
    )
}

export default Overview;