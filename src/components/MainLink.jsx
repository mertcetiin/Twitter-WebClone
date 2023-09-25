import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/MainLink.css'
//import { FaXTwitter } from 'react-icons/fa'
import { PiHouseSimpleFill } from 'react-icons/pi'
import { GrSearch } from 'react-icons/gr'


function MainLink() {
    return (
        <div className='container'>
            {/* <div className='linkDiv'>
                <FaXTwitter />
            </div> */}
            <div className='linkDiv'>
                <Link to='/home'><PiHouseSimpleFill className='houseIcon' /> Anasayfa</Link>
            </div>
            <div className='linkDiv'>
                <Link to='/home'><GrSearch className='searchIcon' /> Keşfet</Link>
            </div>
            <div className='linkDiv'>
                <Link to='/home'>Bildirimler</Link>
            </div>
            <div className='linkDiv'>
                <Link to='/home'>Mesajlar</Link>
            </div>
            <div className='linkDiv'>
                <Link to='/home'>Listeler</Link>
            </div>
            <div className='linkDiv'>
                <Link to='/home'>Yer İşaretleri</Link>
            </div>
            <div className='linkDiv'>
                <Link to='/home'>Onaylanmış</Link>
            </div>
            <div className='linkDiv'>
                <Link to='/home'>Profil</Link>
            </div>
            <div className='linkDiv'>
                <Link to='/home'>Daha fazla</Link>
            </div>
            <button>Gönder</button>
        </div>
    )
}

export default MainLink