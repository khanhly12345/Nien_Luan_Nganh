
function FormPhukien({ id }) {
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
                    <label for="exampleInputPassword1" class="form-label">Ngày sản xuất: </label>
                    <input type="text" class="form-control" id="exampleInputPassword1" name='nsx'/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Series</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" name='series'/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Led</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" name='led'/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Kết nối</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" name='ketnoi'/>
                </div> 
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Độ cảm biến: </label>
                    <input type="text" class="form-control" id="exampleInputPassword1" name='docambien'/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Độ phân giải: </label>
                    <input type="text" class="form-control" id="exampleInputPassword1" name='dophangiai'/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Tên cảm biến:</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" name='tencambien'/>
                    
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default FormPhukien;