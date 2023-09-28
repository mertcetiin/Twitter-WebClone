import '../styles/Home.css'
import MainLink from '../components/MainLink'
import { Link } from 'react-router-dom';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import GifBoxIcon from '@mui/icons-material/GifBox';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import PlaceIcon from '@mui/icons-material/Place';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import { LiaListSolid } from 'react-icons/lia'
import { useState } from 'react';

function Home() {

    const [buttonEnable, setButtonEnable] = useState(false)

    const handleInputChange = (e) => {
        if (e.target.value.trim() !== '') {
            setButtonEnable(true);
        } else {
            setButtonEnable(false)
        }
    }

    return (
        <div className='div-container'>
            <MainLink />
            <div className="main-container">
                <div className="header-container">
                    <h3>Anasayfa</h3>
                    <Link className='sana-div'>Sana özel</Link>
                    <Link className='takip-div'>Takip edilenler</Link>
                </div>

                <div className="input-container">
                    <div className='input-div'>
                        <img src="" alt="" />
                        <input type="text" placeholder='Neler oluyor?' onChange={handleInputChange} />
                    </div>
                    <div className='icons-btn'>
                        <InsertPhotoIcon style={{ color: 'blue' }} />
                        <GifBoxIcon />
                        <LiaListSolid />
                        <SentimentSatisfiedAltIcon />
                        <PendingActionsIcon />
                        <PlaceIcon />
                        <button disabled={!buttonEnable} className='homeBtn'>Gönder</button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Home;