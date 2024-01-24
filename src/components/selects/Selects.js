import './SelectStyles.css';
import MarineMuseum from '../../assets/Marine-Museum.webp';
import MinicoyIsland from '../../assets/Minicoy-Island.webp';
import PittiBirdSanctuary from '../../assets/Pitti-Bird-Sanctuary.webp';
import ThinnakaraIsland from '../../assets/Thinnakara-Island.webp';
import KadmatIsland from '../../assets/Kadmat-Island.webp';
import KalpeniIsland from '../../assets/Kalpeni-Island.webp';
import SelectsImg from '../SelectsImg/SelectsImg';
export default function Selects() {
    return (
        <div name='views' className='selects'>
            <div className='container'>
                <SelectsImg
                    bgImg={MarineMuseum} text='Marine-Museum' />
                <SelectsImg
                    bgImg={MinicoyIsland} text='Minicoy-Island' />
                <SelectsImg
                    bgImg={PittiBirdSanctuary} text='Pitti-Bird-Sanctuary' />
                <SelectsImg
                    bgImg={ThinnakaraIsland} text='Thinnakara-Island' />
                <SelectsImg
                    bgImg={KadmatIsland} text='Kadmat-Island' />
                <SelectsImg
                    bgImg={KalpeniIsland} text='Kalpeni-Island' />
            </div>
            
        </div>
    )
}