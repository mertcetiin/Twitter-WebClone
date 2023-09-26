import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/MainLink.css'
//import { FaXTwitter } from 'react-icons/fa'
import { PiHouseSimpleFill } from 'react-icons/pi'
import { GrSearch } from 'react-icons/gr'
import { PiBell } from 'react-icons/pi'
import { RiTwitterXFill } from 'react-icons/ri'


function MainLink() {
    return (
        <div className='container'>
            <button className='linkDiv'>
                <RiTwitterXFill />
            </button>
            <button className='linkDiv'>
                <Link to='/home'><PiHouseSimpleFill className='houseIcon' /> Anasayfa</Link>
            </button>
            <button className='linkDiv'>
                <Link to='/home'><GrSearch className='searchIcon' /> Keşfet</Link>
            </button>
            <button className='linkDiv'>
                <Link to='/home'><PiBell /> Bildirimler</Link>
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

            <button className='changeBtn'>
                Mert Çetin
            </button>
        </div>
    )
}

export default MainLink;