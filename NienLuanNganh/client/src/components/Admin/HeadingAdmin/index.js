import clsx from 'clsx';
import style from './heading.module.scss'

function HeadingAdmin () {
    return (
        <div className={ clsx(style.heading)}>
            <div className='wrap_admin' style={{ display: 'flex', float: 'right', position: 'relative', left: '-50px', padding: '10px' }}>
                <div style={{ padding: '10px 20px 10px 10px', position: 'relative' }}>
                    <i class="fa fa-bell" style={{ fontSize: '30px' }}></i>
                    <span style={{ height: '10px', width: '10px', backgroundColor: 'rgb(16, 185, 129)', color: 'rgb(16, 185, 129)', borderRadius: '26px', padding: '5px', display: 'flex', position: 'absolute', top: '0', right: '15px' }}></span>
                </div>
                <div>
                    <img src='http://localhost:3000/img/logo/avatar-anika-visser.png' style={{ width: '15%', borderRadius: '50px' }}/>
                </div>
            </div>
        </div>
    )
}

export default HeadingAdmin;