import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function FormLaptop({ id }) {
    const [name, setName] = useState('')
    const [branch, setBranch] = useState('')
    const [price, setPrice] = useState('')
    const [img, setImg] = useState()
    const [theheCPU, setTheheCPU] = useState('')
    const [CPU, setCPU] = useState('')
    const [chip, setChip] = useState('')
    const [hdh, setHdh] = useState('')
    const [manhinh, setManhinh] = useState('')
    const [nsx, setNsx] = useState('')
    const [ram, setRam] = useState('')
    // const [newRam, setNewRam] = useState('');
    const [quantity, setQuantity] = useState('');

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('/api/products/create2', {
                name,
                branch,
                price,
                quantity,
                img,
                nsx,
                theheCPU,
                CPU,
                chip,
                hdh,
                manhinh,
                ram,
                id
            },
            {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
            }) 
            if(response.data.message) {
                navigate('/admin/product')
            }

        }catch(error) {
            console.error('Error creating product:', error);
        }
    }

    // const handleAdd = () => {
    //     setRam([...ram, newRam])
    //     // setRam('')
    //     setNewRam('')
    // }

    // const handleChange = (val) => {
    //     setNewRam(val)
    // }

    // console.log(ram)

    return (
        
        <div style={{ marginTop: '10px' }}>
            <form style={{ width: '50%' }} onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Tên Sản Phẩm:</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" value={name} onChange={(e) => {setName(e.target.value)}}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Thương Hiệu: </label>
                    <input type="text" class="form-control" id="exampleInputPassword1" name='branch' value={branch} onChange={(e) => {setBranch(e.target.value)}}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Hình Ảnh</label>
                    <input type="file" class="form-control" id="exampleInputPassword1" name='img'  onChange={(e) => {setImg(e.target.files[0])}}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Giá</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" name='price' value={price} onChange={(e) => {setPrice(e.target.value)}}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Số lượng</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" name='price' value={quantity} onChange={(e) => {setQuantity(e.target.value)}}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Thế Hệ CPU</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" name='theheCPU' value={theheCPU} onChange={(e) => {setTheheCPU(e.target.value)}}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">CPU</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" name='CPU' value={CPU} onChange={(e) => {setCPU(e.target.value)}}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Chip</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" name='chip' value={chip} onChange={(e) => {setChip(e.target.value)}}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Hệ Điều Hành</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" name='hdh' value={hdh} onChange={(e) => {setHdh(e.target.value)}}/>
                </div> 
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Màn Hình</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" name='manhinh' value={manhinh} onChange={(e) => {setManhinh(e.target.value)}}/>
                </div><div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Ngày sản xuất</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" name='nsx' value={nsx} onChange={(e) => {setNsx(e.target.value)}}/>
                    <input type="hidden"  value={id} name="categories"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Ram</label>
                    <div style={{ display: 'flex' }}>
                        <input type="text" class="form-control" id="exampleInputPassword1" name='ram' value={ram} onChange={(e) => {setRam(e.target.value)}}/>
                    </div>
                    {/* {ram.map((val, index) => (
                        <li key={index}>{val}</li>
                    ))} */}
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default FormLaptop;