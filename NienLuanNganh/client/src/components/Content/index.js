import './content.module.scss'
import Slide from './Slide';
import SlideProduct from './SlideProduct';
import OutStadingProduct from './OutStadingProduct';
function Content() {
    return(
        <div className="content">
            <Slide />
            <SlideProduct />
            <OutStadingProduct />    
        </div>
    )
}

export default Content;