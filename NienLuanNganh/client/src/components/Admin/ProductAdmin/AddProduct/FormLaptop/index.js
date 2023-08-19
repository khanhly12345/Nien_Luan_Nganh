
function FormLaptop({ id }) {
    console.log(id)
    return (
        <div style={{ marginTop: '10px' }}>
            <form style={{ width: '50%' }}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Tên Sản Phẩm:</label>
                    <input type="text" class="form-control" id="exampleInputEmail1"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Thương Hiệu: </label>
                    <input type="text" class="form-control" id="exampleInputPassword1" name='branch'/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Hình Ảnh</label>
                    <input type="file" class="form-control" id="exampleInputPassword1" name='img'/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Giá</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" name='price'/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Thế Hệ CPU</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" name='theheCPU'/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">CPU</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" name='CPU'/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Chip</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" name='chip'/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Hệ Điều Hành</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" name='hdh'/>
                </div> 
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Màn Hình</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" name='manhinh'/>
                </div><div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Ngày sản xuất</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" name='nsx'/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Ram</label>
                    <div style={{ display: 'flex' }}>
                        <input type="text" class="form-control" id="exampleInputPassword1" name='ram'/><div className='btn btn-primary'>Add</div>
                    </div>
                    
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default FormLaptop;