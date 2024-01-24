import './ImgCarouselStyles.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ThinnakaraIsland from '../../assets/new1.jpg';
import KadmatIsland from '../../assets/new2.jpg';
import KalpeniIsland from '../../assets/new3.jpg';

export default function ImgCarousel() {
    return (
        <div name='carousel' className='container'>
        <Carousel className='carousel' showArrows={true} autoPlay={true}
            infiniteLoop={true}>
            <div>
                <img src={ThinnakaraIsland} alt='/' />
            </div>
            <div>
                <img src={KadmatIsland} alt='/' />
            </div>
            <div>
                <img src={KalpeniIsland} alt='/' />
            </div>
            </Carousel>
        </div>
   )
}