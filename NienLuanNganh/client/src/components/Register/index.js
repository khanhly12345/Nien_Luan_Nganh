import style from './register.module.scss'
import clsx from 'clsx'
import { Link } from 'react-router-dom';

function Register() {
    return (
        <div className='container'>
            <div className={clsx(style.register)} >
                <form style={{ width: '40%'}}>
                    <h1 style={{ fontSize: '60px', marginBottom: '30px', display: 'flex', justifyContent:' center', fontWeight: '600' }}>Register</h1>
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form1Example1">Tài Khoản</label>
                        <input type="email" id="form1Example1" class="form-control"/>
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form1Example2">Mật Khẩu</label>
                        <input type="password" id="form1Example2" class="form-control" />
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form1Example3">Nhập lại mật khẩu</label>
                        <input type="password" id="form1Example3" class="form-control" />
                    </div>

                    <div class="row mb-4">
                        <div class="col d-flex justify-content-center">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                            <label class="form-check-label" for="form1Example3"> Remember me </label>
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