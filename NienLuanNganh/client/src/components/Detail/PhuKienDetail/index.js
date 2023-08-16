
import style from './phukiendetail.module.scss';
import clsx from 'clsx' 

function PhuKienDetail() {
    return (
        <div className={clsx(style.detail, 'col-3')}>
            <h5  style={{padding: '10px' , color: 'black', fontWeight: '600'}}>Thông Tin Chi Tiết</h5>
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
                    Series: 
                </div>
                <div style={{padding: '10px', width: '70%'}}>
                    Core i5 , Intel Core thế hệ thứ 12 
                </div>
            </div>
            <div style={{ display: 'flex', backgroundColor: 'rgb(246, 246, 246)' }}>
                <div style={{ width: '40%', padding: '10px' }}>
                    Đèn LED: 
                </div>
                <div style={{padding: '10px'}}>
                    Intel Core i5-1240P
                </div>
            </div>
            <div style={{ display: 'flex'}}>
                <div style={{ width: '40%', padding: '10px' }}>
                    Kết nối:
                </div>
                <div style={{padding: '10px', width: '70%'}}>
                    Onboard  Intel Iris Xe Graphics 
                </div>
            </div>
            <div style={{ display: 'flex', backgroundColor: 'rgb(246, 246, 246)' }}>
                <div style={{ width: '40%', padding: '10px' }}>
                    Độ phân giải (CPI/DPI): 
                </div>
                <div style={{padding: '10px'}}>
                    8GB
                </div>
            </div>
            <div style={{ display: 'flex'}}>
                <div style={{ width: '40%', padding: '10px' }}>
                    Dạng cảm biến:
                </div>
                <div style={{padding: '10px', width: '70%'}}>
                    Onboard  Intel Iris Xe Graphics 
                </div>
            </div>
            <div style={{ display: 'flex', backgroundColor: 'rgb(246, 246, 246)' }}>
                <div style={{ width: '40%', padding: '10px' }}>
                    Tên cảm biến: 
                </div>
                <div style={{padding: '10px'}}>
                    16" ( 1920 x 1200 ) WUXGA  WVA  không cảm ứng , FHD webcam 
                </div>
            </div> 
            <div style={{ display: 'flex'}}>
                <div style={{ width: '40%', padding: '10px' }}>
                    Ngày Sản Xuất:
                </div>
                <div style={{padding: '10px', width: '70%'}}>
                    2022
                </div>
            </div>
        </div>
    )
}

export default PhuKienDetail;