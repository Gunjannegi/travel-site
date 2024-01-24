import './heroStyles.css';
import video from '../assets/video.mp4';
import { AiOutlineSearch } from 'react-icons/ai';
export default function Hero() {
    return (
        <div className="hero">
            <video autoPlay loop muted id="video">
                <source src={video} type='video/mp4' />
            </video>
            <div className="overlay"></div>
            <div className="content">
                <h1 >First Class Travel</h1>
                <h2>Top 1% Location Worldwide</h2>
                <form className='form'>
                    <div>
                        <input type='text' placeholder="Search Destinations"></input>
                    </div>
                    <div>
                        <button ><AiOutlineSearch className='icon' /></button>
                    </div>
                </form>
            </div>

        </div>
    )
      

    
}