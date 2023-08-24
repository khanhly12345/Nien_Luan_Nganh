import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function FormPhukien({ id }) {
    const [name, setName] = useState('')
    const [branch, setBranch] = useState('')
    const [price, setPrice] = useState('')
    const [img, setImg] = useState()
    const [nsx, setNsx] = useState('')
    const [series, setSeries] = useState('')
    const [led, setLed] = useState('')
    const [ketnoi, setKetnoi] = useState('')
    const [docambien, setDocambien] = useState('')
    const [dophangiai, setDophangiai] = useState('')
    const [tencambien, setTencambien] = useState('')
    const [quantity, setQuantity] = useState('');
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('/api/products/create', {
                name,
                branch,
                price,
                quantity,
                img,
                nsx,
                series,
                led,
                ketnoi,
                docambien,
                dophangiai,
                tencambien,
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

    return (
        <div style={{ marginTop: '10px' }}>
            <form style={{ width: '50%' }} onSubmit={handleSubmit} enctype="multipart/form-data">
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
                    <input type="file" class="form-control" id="exampleInputPassword1" name='img' onChange={(e) => {setImg(e.target.files[0])}}/>
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
                    <label for="exampleInputPassword1" class="form-label">Ngày sản xuất: </label>
                    <input type="text" class="form-control" id="exampleInputPassword1" name='nsx' value={nsx} onChange={(e) => {setNsx(e.target.value)}}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Series</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" name='series' value={series} onChange={(e) => {setSeries(e.target.value)}}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Led</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" name='led' value={led} onChange={(e) => {setLed(e.target.value)}}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Kết nối</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" name='ketnoi' value={ketnoi} onChange={(e) => {setKetnoi(e.target.value)}}/>
                </div> 
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Độ cảm biến: </label>
                    <input type="text" class="form-control" id="exampleInputPassword1" name='docambien' value={docambien} onChange={(e) => {setDocambien(e.target.value)}}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Độ phân giải: </label>
                    <input type="text" class="form-control" id="exampleInputPassword1" name='dophangiai' value={dophangiai} onChange={(e) => {setDophangiai(e.target.value)}}/>
                    <input type="hidden"  value={id} name="categories"/>
                </div>
            
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Tên cảm biến:</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" name='tencambien' value={tencambien  } onChange={(e) => {setTencambien(e.target.value)}}/>
                    
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default FormPhukien;