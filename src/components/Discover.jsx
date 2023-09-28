import '../styles/Discover.css'
import { BiSearch } from 'react-icons/bi'

function Discover() {
    return (
        <div className='discover-container'>
            <div className="header-input">
                <BiSearch className='BiSearch' />
                <input type="text" placeholder='Ara' />
            </div>
            <div className="premium-container">
                <h3>Premium'a Abone Ol</h3>
                <h4>Yeni özellikleri açmak için abone ol ve uygun olman durumunda reklam geliri payı kazan.</h4>
                <button>Abone ol</button>
            </div>
        </div>
    )
}

export default Discover