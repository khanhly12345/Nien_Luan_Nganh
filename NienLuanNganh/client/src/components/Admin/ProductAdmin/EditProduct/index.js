import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from "axios";

function EditProduct() {
    const [name, setName] = useState("")
    const [branch, setBranch] = useState('')
    const [price, setPrice] = useState('')
    const [imgOld, setImgOld] = useState()
    const [imgNew, setImgNew] = useState()
    const [quantity, setQuantity] = useState('')
    const {id} = useParams();

    const navigate = useNavigate()    

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response =  await axios.post(`/api/products/edit/${id}`, {
                name,
                branch,
                price,
                imgOld,
                imgNew,
                quantity
            },
            {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
            })
            console.log("product created: ", response.data.message)
            if(response.data.message) {
                navigate("/admin/product")
            }
        } catch (error) {
            console.log(error)
        }
    }

    console.log(imgNew)


    useEffect(() => {
        axios.get(`/api/products/show/${id}`)
            .then(res => {
                setName(res.data.name)
                setBranch(res.data.branch)
                setPrice(res.data.price)
                setImgOld(res.data.img)
                setQuantity(res.data.quantity)
            })
            .catch(error => {
                console.log(error)
            })
    },[])



    return (
        <div className="productadmin" style={{ padding: '10px' }}>
            <h1>Edit Product</h1>
            <div>
                <form style={{ width: '50%' }} onSubmit={handleSubmit} enctype="multipart/form-data">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Tên Sản Phẩm:</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" value={name} onChange={(e) => {setName(e.target.value)}} required/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Thương Hiệu: </label>
                        <input type="text" class="form-control" id="exampleInputPassword1" name='branch' value={branch} onChange={(e) => {setBranch(e.target.value)}} required/>
                    </div>
                    <div class="mb-3">
                        <img src={"/"+imgOld} style={{ width: '30%' }} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Chọn Hình Ảnh Mới</label>
                        <input type="file" class="form-control" id="exampleInputPassword1" name='imgNew' onChange={(e) => {setImgNew(e.target.files[0])}}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Giá</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" name='price' value={price} onChange={(e) => {setPrice(e.target.value)}} required/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Số lượng</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" name='price' value={quantity} onChange={(e) => {setQuantity(e.target.value)}} required/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default EditProduct;