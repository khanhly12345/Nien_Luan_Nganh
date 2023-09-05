import style from './filter.module.scss'
import clsx from 'clsx'
import axios from 'axios';
import { Link, useParams  } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Product from '../Content/SlideProduct/Product'
import { HandlePrice } from '../../handlePrice';

function Filter() {
    const [products, setProducts] = useState([])
    const [ram, setRam] = useState('')
    const [branch, setBranch] = useState('')
    const [price, setPrice] = useState()
    const [loading, setLoading] = useState(false)

    const arrayRam = ['4GB', '8GB', '16GB', '32GB'];
    const arrayPrice = [20000000, 21000000]
    const arrayBranch1 = ['ASUS', 'ACER', 'hp', 'APPLE']
    const arrayBranch2 = ['SAMSUNG', 'XIAOMI', 'APPLE', 'OPPO']
    const arrayBranch3 = ['ANKER', 'LOGITECH', 'APPLE', 'ASUS'] 

    const { id } = useParams()
    let category;
    let titleCate;
    if(id === '64e02570d4123118d9bb8a8c') {
        category = 'phukien'
        titleCate = 'Phụ Kiện'
    }else if(id === '64e025fad4123118d9bb8a8d') {
        category = 'laptop'
        titleCate = 'Laptop - Máy Tính Xách Tay'
    }else{
        category = 'phone'
        titleCate = 'Điện Thoại Di Động'
    }

    useEffect(() => {
        console.log('1')
        setLoading(true)
        async function FetchData() {
            try {
                const res = await axios.get(`/api/products/showCategory/${category}`)
                if(res.data) {
                    setProducts(res.data)
                    setLoading(false)
                        setBranch('')
                        setPrice()
                        setRam('')
                }
            } catch (error) {
                console.log('fetch category error,', error)
            }
            
        }
        FetchData()

    }, [id])

    // call api to filtter products
    useEffect(() => {
        setLoading(true)
        axios.post(`/api/products/filter`, {
            category,
            ram,
            price,
            branch
        })
            .then((res) => {
                    setProducts(res.data)
                    setLoading(false)
            })
            .catch((error) => {
                console.log('filtter' , error)
            })
    }, [ram, price, branch])


    return (
        <div className='container' style={{ marginTop: '20px' }}>
            <div className='row'>
                <div className='col-2' style={{ backgroundColor: 'white', borderRadius: '5px', height: '100%' }}>
                        
                        <div className={clsx(style.wrap_filter)}>
                            <div className='about_price' style={{ color: 'black'}}>
                                <span>Khoảng giá</span><br></br>
                                <div style={{ marginTop: '5px'  }}></div>
                                {arrayPrice.map((value, index) => (
                                    <div key={index}>
                                        <input 
                                            type='checkbox' 
                                            id={value}
                                            value={value}
                                            checked={value == price}
                                            onChange={(e) => {setPrice(e.target.value)}}
                                        />
                                        {' '} <label for={value}> {value === 20000000 ? '<' : '>'} {HandlePrice(value)}</label>
                                    </div>
                                ))}
                                <hr></hr>
                            </div>
                            {category !== 'phukien' ? 
                                <div className='about_ram' style={{ color: 'black' }}>
                                    <span>Dung Lượng Ram</span><br></br>
                                    <div style={{ marginTop: '5px'  }}></div>
                                    {arrayRam.map((value, index) => (
                                        <div key={index}>
                                            <input 
                                                type='checkbox' 
                                                id={value} 
                                                value={value} 
                                                checked={value === ram}
                                                onChange={(e) => {setRam(e.target.value)}}
                                            />
                                            {' '}<label for={value}>{value}</label>
                                        </div>
                                        
                                    ))}
                                    <hr></hr>
                                </div> : ''
                            }
                            {category === 'phone' ? 
                                <div className='about_branch' style={{ color: 'black' }}>
                                    <span>Thương Hiệu</span><br></br>
                                    <div style={{ marginTop: '5px'  }}></div>
                                    {arrayBranch2.map((value, index) => (
                                        <div key={index}>
                                                <input 
                                                type='checkbox' 
                                                id={value}
                                                value={value}
                                                checked={value === branch}
                                                onChange={(e) => {setBranch(e.target.value)}}
                                            />
                                            {' '}<label for={value}>{value}</label>
                                        </div>
                                    ))}
                                </div> : ''
                            }

                            {category === 'laptop' ? 
                                <div className='about_branch' style={{ color: 'black' }}>
                                    <span>Thương Hiệu</span><br></br>
                                    <div style={{ marginTop: '5px'  }}></div>
                                    {arrayBranch1.map((value, index) => (
                                        <div key={index}>
                                                <input 
                                                type='checkbox' 
                                                id={value}
                                                value={value}
                                                checked={value === branch}
                                                onChange={(e) => {setBranch(e.target.value)}}
                                            />
                                            {' '}<label for={value}>{value}</label>
                                        </div>
                                    ))}
                                </div> : ''
                            }

                            {category === 'phukien' ? 
                                <div className='about_branch' style={{ color: 'black' }}>
                                    <span>Thương Hiệu</span><br></br>
                                    <div style={{ marginTop: '5px'  }}></div>
                                    {arrayBranch3.map((value, index) => (
                                        <div key={index}>
                                                <input 
                                                type='checkbox' 
                                                id={value}
                                                value={value}
                                                checked={value === branch}
                                                onChange={(e) => {setBranch(e.target.value)}}
                                            />
                                            {' '}<label for={value}>{value}</label>
                                        </div>
                                    ))}
                                </div> : ''
                            }
                            
                        </div>
                </div>
                <div className='col-10'>
                        <div style={{ backgroundColor: 'white', padding: '10px 15px 5px 15px', color: 'black', borderRadius: '5px' }}><h5 style={{ fontWeight: '600 !important' }}>{titleCate + ` (${products.length} sản phẩm)`}</h5></div>

                        <div className='product' style={{ backgroundColor: 'white', marginTop: '5px', padding: '10px', borderRadius: '5px' }}>
                            <div className='row'>
                            {loading ? 
                                <div style={{ display:'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div class="spinner-border text-success" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </div>
                                
                                :
                                    products.map((product , index) => (
                                        <div className={clsx(style.col_product, 'col-3')} key={index}>
                                            <Product value={product} />
                                        </div>
                                    ))  
                                }
                            </div>
                            
                        </div>
                </div>

                
            </div>
        </div>
       
    )
}

export default Filter;