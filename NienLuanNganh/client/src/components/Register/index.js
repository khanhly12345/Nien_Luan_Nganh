import style from './register.module.scss'
import clsx from 'clsx'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [comfirmPw, setComfirmPw] = useState('')
    const [city, setCity] = useState('')
    const [district, setDistrict] = useState('')
    const [phone, setPhone] = useState('')
    const [checkLogin, setCheckLogin] = useState(true)

    const navigate = useNavigate()

    const handleSubmit = (e) => {

        e.preventDefault()

        axios.post('/api/user/create', {
            username,
            password, 
            comfirmPw, 
            city,
            district,
            phone,
        })
        .then(res => {
            setCheckLogin(res.data.checkComfirm)
            if(res.data.checkComfirm) {
                localStorage.setItem('appState', 'Đăng nhập thành công');
                navigate('/login')
            }
            console.log(res.data.checkComfirm)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className='container'>
            <div className={clsx(style.register)} >
                <form style={{ width: '40%'}} onSubmit={handleSubmit}>
                    <h1 style={{ fontSize: '60px', marginBottom: '30px', display: 'flex', justifyContent:' center', fontWeight: '600' }}>Register</h1>
                    {checkLogin ? '' : <span>Xác nhận Mật Khẩu không khớp</span>}
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form1Example1">Tài Khoản</label>
                        <input type="text" id="form1Example1" class="form-control" value={username} onChange={(e) => {setUsername(e.target.value)}} required/>
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form1Example2">Mật Khẩu</label>
                        <input type="password" id="form1Example2" class="form-control" value={password} onChange={(e) => {setPassword(e.target.value)}} required/>
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form1Example3">Nhập lại mật khẩu</label>
                        <input type="password" id="form1Example3" class="form-control" value={comfirmPw} onChange={(e) => {setComfirmPw(e.target.value)}} required/>
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form1Example4">Số Điện Thoại</label>
                        <input type="text" id="form1Example4" class="form-control" value={phone} onChange={(e) => {setPhone(e.target.value)}} required/>
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form1Example5">Thành Phố</label>
                        <input type="text" id="form1Example5" class="form-control" value={city} onChange={(e) => {setCity(e.target.value)}} required/>
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form1Example6">Huyện</label>
                        <input type="text" id="form1Example6" class="form-control" value={district} onChange={(e) => {setDistrict(e.target.value)}} required/>
                    </div>

                    <div class="row mb-4">
                        <div class="col d-flex justify-content-center">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="form1Example7" checked />
                            <label class="form-check-label" for="form1Example7"> Remember me </label>
                        </div>
                        </div>

                        <div class="col">
                            <Link to='/login'>Login here?</Link>
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary btn-block" style={{ width: '100%' }}>Sign in</button>
                </form>
            </div>
        </div>
    )
}

export default Register;