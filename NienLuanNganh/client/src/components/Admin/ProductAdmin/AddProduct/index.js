import style from './addproduct.module.scss'
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import FormLaptop from './FormLaptop';
import FormPhukien from './FormPhukien';
function AddProduct() {
    const [categories, setCategories] = useState([]);
    // choice value
    const [selectedClass, setSelectedClass] = useState('');
    const [value, setValue] = useState('');

    const selectRef = useRef();

    const handleSelectChange = ( value ) => {
        const selectedOption = selectRef.current.options[selectRef.current.selectedIndex];
        setSelectedClass(selectedOption.className);
        setValue(value)
    };  

    useEffect(() => {
        axios.get('/api/categories/show')
            .then(res => {
                setCategories(res.data)
            })
            .catch(error => {
                console.error('Errorr fetching', error)
            })
    },[])
    console.log(value)
    return (
        <div className='productadmin' style={{ padding: '10px' }}>
            <h1>Add Product</h1>

            <select 
                className='select'
                onChange={(e) => {
                    handleSelectChange(e.target.value)
                }}
                ref={selectRef}
            >
                {categories.map((category, index) => (
                    <option 
                        className={category._id}
                        key={index} 
                        value={category.name} 
                    >
                        {category.description}
                    </option>
                ))}
            </select>
            {value === 'phukien' ? <FormPhukien id={selectedClass} /> : <FormLaptop id={selectedClass} /> }
            
        </div>
    )
}

export default AddProduct;