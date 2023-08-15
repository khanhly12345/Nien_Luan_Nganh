
import style from './subdetailproduct.module.scss';
import clsx from 'clsx' 

function SubDetailProduct() {
    return (
        <div className={clsx(style.detail, 'col-3')}>
            <h5  style={{padding: '10px'}}>Thông Tin Chi Tiết</h5>
            <div style={{ display: 'flex', backgroundColor: 'rgb(246, 246, 246)' }}>
                <div style={{ width: '40%', padding: '10px' }}>
                    Thương Hiệu:  
                </div>
                <div style={{padding: '10px'}}>
                    HP
                </div>
            </div>
            <div style={{ display: 'flex'}}>
                <div style={{ width: '40%', padding: '10px' }}>
                    Thế Hệ CPU: 
                </div>
                <div style={{padding: '10px', width: '70%'}}>
                    Core i5 , Intel Core thế hệ thứ 12 
                </div>
            </div>
            <div style={{ display: 'flex', backgroundColor: 'rgb(246, 246, 246)' }}>
                <div style={{ width: '40%', padding: '10px' }}>
                    CPU: 
                </div>
                <div style={{padding: '10px'}}>
                    Intel Core i5-1240P ( 1.7 GHz - 4.4GHz / 12MB / 12 nhân, 16 luồng )
                </div>
            </div>
            <div style={{ display: 'flex'}}>
                <div style={{ width: '40%', padding: '10px' }}>
                    Chip Đồ Họa:
                </div>
                <div style={{padding: '10px', width: '70%'}}>
                    Onboard  Intel Iris Xe Graphics 
                </div>
            </div>
            <div style={{ display: 'flex', backgroundColor: 'rgb(246, 246, 246)' }}>
                <div style={{ width: '40%', padding: '10px' }}>
                    Ram: 
                </div>
                <div style={{padding: '10px'}}>
                    8GB
                </div>
            </div>
            <div style={{ display: 'flex'}}>
                <div style={{ width: '40%', padding: '10px' }}>
                    Chip Đồ Họa:
                </div>
                <div style={{padding: '10px', width: '70%'}}>
                    Onboard  Intel Iris Xe Graphics 
                </div>
            </div>
            <div style={{ display: 'flex', backgroundColor: 'rgb(246, 246, 246)' }}>
                <div style={{ width: '40%', padding: '10px' }}>
                    Màn Hình: 
                </div>
                <div style={{padding: '10px'}}>
                    16" ( 1920 x 1200 ) WUXGA  WVA  không cảm ứng , FHD webcam 
                </div>
            </div> 
        </div>
    )
}

export default SubDetailProduct;