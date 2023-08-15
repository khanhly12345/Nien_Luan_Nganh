import style from './footer.module.scss'
import clsx from 'clsx' 

function Footer() {
    return(
        <div className="container-fluid" style={{ backgroundColor: 'white', 'margin-top': '20px', height: '300px' }}>
            <div className='container-fluid'>
                <div className='row'  style={{ 'padding-top' : '20px' }}>
                    <div className='col-1'>

                    </div>
                    <div className={clsx(style.col_footer, 'col-2')}>
                        <h5 style={{ color: 'black', 'font-weight' : '600' }}>Hỗ Trợ Khách Hàng</h5>
                        <ul className={clsx(style.ul_footer)}>
                            <li><a href='#'>Thẻ ưu đãi</a></li>
                            <li><a  href='#'>Hướng dẫn mua online</a></li>
                            <li><a  href='#'>Ưu đãi dành cho Doanh nghiệp</a></li>
                            <li><a  href='#'>Chính sách trả góp</a></li>
                            <li><a  href='#'>Dịch vụ sửa chữa</a></li>
                        </ul>
                    </div>
                    <div className={clsx(style.col_footer, 'col-2')}>
                    <h5 style={{ color: 'black', 'font-weight' : '600' }}>Chính sách mua hàng</h5>
                        <ul className={clsx(style.ul_footer)}>
                            <li><a href='#'>Điều kiện giao dịch chung</a></li>
                            <li><a  href='#'>Chính sách bảo hành</a></li>
                            <li><a  href='#'>Chính sách đổi trả</a></li>
                            <li><a  href='#'>Chính sách thanh toán</a></li>
                            <li><a  href='#'>Giao hàng và Lắp đặt tại nhà</a></li>
                            <li><a  href='#'>Dịch vụ lắp đặt và nâng cấp PC/ Laptop tại cửa hàng & TTBH</a></li>
                        </ul>
                    </div>
                    <div className={clsx(style.col_footer, 'col-2')}>
                    <h5 style={{ color: 'black', 'font-weight' : '600' }}>Thông tin Phong Vũ</h5>
                        <ul className={clsx(style.ul_footer)}>
                            <li><a href='#'>Giới thiệu Phong Vũ</a></li>
                            <li><a  href='#'>Hệ thống cửa hàng</a></li>
                            <li><a  href='#'>Trung tâm bảo hành</a></li>
                            <li><a  href='#'>Chính sách bảo mật</a></li>
                            <li><a  href='#'>Tin công nghệ</a></li>
                            <li><a  href='#'>Hỏi đáp</a></li>
                            <li><a  href='#'>Tuyển dụng</a></li>
                        </ul>
                    </div>
                    <div className={clsx(style.col_footer, 'col-2')}>
                    <h5 style={{ color: 'black', 'font-weight' : '600' }}>Cộng đồng Phong Vũ</h5>
                        <ul className={clsx(style.ul_footer)}>
                            <li>
                                <div>Gọi mua hàng (miễn phí) <a href='' style={{ color: 'blue' }}><br></br>1800 1091</a></div>
                            </li>
                            <li>
                                <div>Gọi chăm sóc (miễn phí) <a href='' style={{ color: 'blue' }}><br></br>1800 1092</a></div>
                            </li>
                            <li><a  href='#'><svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'><title>ionicons-v5_logos</title><path d='M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z'/></svg> Facebook Phong Vũ</a></li>
                            <li><a  href='#'><svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'><title>ionicons-v5_logos</title><path d='M508.64,148.79c0-45-33.1-81.2-74-81.2C379.24,65,322.74,64,265,64H247c-57.6,0-114.2,1-169.6,3.6-40.8,0-73.9,36.4-73.9,81.4C1,184.59-.06,220.19,0,255.79q-.15,53.4,3.4,106.9c0,45,33.1,81.5,73.9,81.5,58.2,2.7,117.9,3.9,178.6,3.8q91.2.3,178.6-3.8c40.9,0,74-36.5,74-81.5,2.4-35.7,3.5-71.3,3.4-107Q512.24,202.29,508.64,148.79ZM207,353.89V157.39l145,98.2Z'/></svg> Phong Vũ Media</a></li>
                            <li><a  href='#'><svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'><title>ionicons-v5-j</title><path d='M256,464C141.31,464,48,370.69,48,256S141.31,48,256,48s208,93.31,208,208S370.69,464,256,464Zm0-384C159,80,80,159,80,256S159,432,256,432s176-78.95,176-176S353.05,80,256,80Z'/><path d='M323.67,292c-17.4,0-34.21-7.72-47.34-21.73a83.76,83.76,0,0,1-22-51.32c-1.47-20.7,4.88-39.75,17.88-53.62S303.38,144,323.67,144c20.14,0,38.37,7.62,51.33,21.46s19.47,33,18,53.51h0a84,84,0,0,1-22,51.3C357.86,284.28,341.06,292,323.67,292Zm55.81-74h0Z'/><path d='M163.82,295.36c-29.76,0-55.93-27.51-58.33-61.33-1.23-17.32,4.15-33.33,15.17-45.08s26.22-18,43.15-18,32.12,6.44,43.07,18.14,16.5,27.82,15.25,45C219.69,267.86,193.53,295.36,163.82,295.36Z'/><path d='M420.37,355.28c-1.59-4.7-5.46-9.71-13.22-14.46-23.46-14.33-52.32-21.91-83.48-21.91-30.57,0-60.23,7.9-83.53,22.25-26.25,16.17-43.89,39.75-51,68.18-1.68,6.69-4.13,19.14-1.51,26.11a192.18,192.18,0,0,0,232.75-80.17Z'/><path d='M163.63,401.37c7.07-28.21,22.12-51.73,45.47-70.75a8,8,0,0,0-2.59-13.77c-12-3.83-25.7-5.88-42.69-5.88-23.82,0-49.11,6.45-68.14,18.17-5.4,3.33-10.7,4.61-14.78,5.75a192.84,192.84,0,0,0,77.78,86.64l1.79-.14A102.82,102.82,0,0,1,163.63,401.37Z'/></svg> Phong Vũ Hội</a></li>
                        </ul>
                    </div>
                    <div className={clsx(style.col_footer, 'col-2')}>
                        <h5 style={{ color: 'black', 'font-weight' : '600' }}>Email liên hệ</h5>
                        <ul className={clsx(style.ul_footer)}>
                            <li>Hỗ trợ Khách hàng:<a href='#' style={{ color: 'blue' }}> cskh@phongvu.vn</a></li>
                            <li>Liên hệ báo giá:<a  href='#' style={{ color: 'blue' }}> baogia@phongvu.vn</a></li>
                            <li>Hợp tác phát triển:<a  href='#' style={{ color: 'blue' }}> hoptac@phongvu.vn</a></li>
                        </ul>
                    </div>
                    <div className='col-1'>

                    </div>
                </div>
                <div className='row'>
                    <div className='col-12' style={{ textAlign: 'center' }}>   
                        <h5 style={{ color: 'black', 'font-weight' : '600', 'font-size': '15px' }}>Danh sách các ngân hàng thanh toán online</h5>
                        <img src='http://localhost:3000/img/logo/logo_footer.png'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;