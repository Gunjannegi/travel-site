import './SearchStyles.css';
import Gold from '../../assets/gold.png';
export default function Search() {
    return (
        <div className='search'>
            <div className="container">
                <div className="left">
                    <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
                    <p>Come experience the white beaches, the lagoons that wash its shores with the coral reefs which enclose it, and finally the deep blue sea-all these are symbiotically linked with each other. Our luxury beach resorts,
                        set along the most gorgeous tropical settings and exquisite beaches in Kavaratti, Kalpeni, Minicoy, Kadmat, Agatti and Bangaram, feature unlimited gourmet dining, unique bars serving premium liquors and wines, and
                        every land and water sport, including complimentary green fees at our golf resorts and PADI® certified scuba diving at most resorts.</p>
                    <div className='search-col-2'>
                        <div className='box'>
                            <div>
                                <img src={Gold} alt='/'
                                    style={{ margin:'1rem' }} />
                            </div>
                            <div>
                                <h3>WORLD'S LEADING</h3>
                            <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                            </div>
                        </div>
                        <div className="box">
                        <div>
                            <h3>NO ONE INCLUDES MORE</h3>
                            <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                                <button>View Packages</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className='promo'>
                        <h4 className="save">GET AN ADDITIONAL 7% OFF</h4>
                        <p className="timer">12 HOURS LEFT!</p>
                        <p className="offers">VIEW ALL CURRENT OFFERS</p>
                    </div>
                    <form>
                        <div className="input-wrap">
                            <label>Destination</label>
                            <select>
                                <option value="1">Minicoy Island</option>
                                <option value="2">Kadmat Island</option>
                                <option value="3">Kavaratti Island</option>
                                <option value="4">Marine Museum</option>
                                <option value="5">Pitti Bird Sanctuary</option>
                                <option value="6">Thinnakara Island</option>
                                <option value="7">Kalpeni Island</option>
                            </select>
                        </div>
                        <div className="date">
                            <div className="input-wrap">
                                <label>Check-In</label>
                                <input type='date'/>
                            </div>
                        </div>
                        <button>Rates & Availabilities</button>
                    </form>
                </div>
            </div>

        </div>
    )
}