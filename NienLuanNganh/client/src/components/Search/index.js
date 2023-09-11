import clsx from 'clsx'
import style from './search.module.scss'
import Product from '../Content/SlideProduct/Product'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Search() {
    const [datas, setData] = useState([])
    const { value } = useParams()
    console.log(value)
    useEffect(() => {
        axios.post('/api/products/search', {
            value
        })
        .then(res => {
            setData(res.data)
        })
        .catch(error => {
            console.log('search', error)
        })
    }, [value])

    return (
        <>
            <div className={clsx(style.wrap_search, 'container')} style={{ marginTop: '10px' }}>
                <h1>Search <span style={{ fontSize: '28px' }}>(Tổng sản phẩm: {datas.length})</span> </h1>
            </div>
            <div className={clsx(style.wrap_search, 'container')} style={{ marginTop: '10px' }}>
                <div className='row'>
                    {datas.map((data, index) => (
                        <div className='col-2'  style={{ marginTop: '10px', marginBottom: '10px' }}>
                            <Product value={data} key={index}/>
                        </div>

                    ))}
                </div>
            </div>
        </>
    )
}

export default Search;