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
            <button className='linkDiv'>
                <Link to='/home'><PiHouseSimpleFill className='houseIcon' /> Anasayfa</Link>
            </button>
            <button className='linkDiv'>
                <Link to='/home'><GrSearch className='searchIcon' /> Keşfet</Link>
            </button>
            <button className='linkDiv'>
                <Link to='/home'>Bildirimler</Link>
            </button>
            <button className='linkDiv'>
                <Link to='/home'>Mesajlar</Link>
            </button>
            <button className='linkDiv'>
                <Link to='/home'>Listeler</Link>
            </button>
            <button className='linkDiv'>
                <Link to='/home'>Yer İşaretleri</Link>
            </button>
            <button className='linkDiv'>
                <Link to='/home'>Onaylanmış</Link>
            </button>
            <button className='linkDiv'>
                <Link to='/home'>Profil</Link>
            </button>
            <button className='linkDiv'>
                <Link to='/home'>Daha fazla</Link>
            </button>
            <button className='submitBtn'>Gönder</button>
        </div>
    )
}

export default MainLink