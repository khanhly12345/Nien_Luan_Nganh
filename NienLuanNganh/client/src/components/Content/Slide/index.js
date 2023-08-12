import style from './slide.module.scss'
import clsx from 'clsx'

function Slide() {
    return(
        <>
            <div className="slide">
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators" style={{ position: 'absolute', bottom: '40px'}}>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="http://localhost:3000/img/logo/slide1.webp" class="d-block w-100" style={{ height: '500px'}}/>
                            </div>
                            <div class="carousel-item">
                                <img src="http://localhost:3000/img/logo/slide2.webp" class="d-block w-100" style={{ height: '500px'}}/>
                            </div>
                            <div class="carousel-item">
                                <img src="http://localhost:3000/img/logo/slide3.webp" class="d-block w-100" style={{ height: '500px'}}/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
            </div>
            <div className={clsx('container', style.sub_title)}>
                <div className='row'>
                    <div className='col-3'>
                        <a href='#' className={clsx(style.sub_title_img)}>
                            <img src='http://localhost:3000/img/logo/img_tittle.webp' />
                        </a>
                    </div>
                    <div className='col-3'>
                        <a href='#' className={clsx(style.sub_title_img)}>
                            <img src='http://localhost:3000/img/logo/img_tittle2.webp' />
                        </a>
                    </div>
                    <div className='col-3'>
                        <a href='#' className={clsx(style.sub_title_img)}>
                            <img src='http://localhost:3000/img/logo/img_tittle3.webp' />
                        </a>
                    </div>
                    <div className='col-3'>
                        <a href='#' className={clsx(style.sub_title_img)}>
                            <img src='http://localhost:3000/img/logo/img_tittle4.webp' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slide;