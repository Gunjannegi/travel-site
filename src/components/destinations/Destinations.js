import './DestinationsStyles.css';
import lakshadweep1 from '../../assets/lakshadweep3.webp';
import lakshadweep2 from '../../assets/lakshadwep2.jpg';
import lakshadweep3 from '../../assets/lakshadweep-4.jpg';
import lakshadweepfood from '../../assets/lakshadweep-food.jpg';
import lakshadweep5 from '../../assets/lakshadweep7.jpeg';
export default function Destinations() {
    return (
        <div name='destinations' className='destinations'>
            <div className='container'>
                <h1>All-Inclusive Resorts</h1>
                <p>On the Lakshadweep's Best Beaches</p>
                <div className='img-container'>
                    <img className='span-3 image-grid-row-2' src={lakshadweep5} alt='/' />
                    <img src={lakshadweep2} alt='/' />
                    <img src={lakshadweep3} alt='/' />
                    <img src={lakshadweepfood} alt='/' />
                    <img src={lakshadweep1} alt='/' />

                </div>
            </div>

        </div>
    )
}