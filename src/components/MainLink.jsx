import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/MainLink.css'
import { PiHouseSimpleFill } from 'react-icons/pi'
import { PiBell } from 'react-icons/pi'
import { RiTwitterXFill } from 'react-icons/ri'
import SearchIcon from '@mui/icons-material/Search';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PendingIcon from '@mui/icons-material/Pending';
import CropPortraitIcon from '@mui/icons-material/CropPortrait';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';

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
                <Link to='/home'><SearchIcon className='searchIcon' /> Keşfet</Link>
            </button>
            <button className='linkDiv'>
                <Link to='/home'><PiBell /> Bildirimler</Link>
            </button>
            <button className='linkDiv'>
                <Link to='/home'><MailOutlineIcon /> Mesajlar</Link>
            </button>
            <button className='linkDiv'>
                <Link to='/home'><CropPortraitIcon /> Listeler</Link>
            </button>
            <button className='linkDiv'>
                <Link to='/home'><TurnedInNotIcon /> Yer İşaretleri</Link>
            </button>
            <button className='linkDiv'>
                <Link to='/home'><RiTwitterXFill /> Onaylanmış</Link>
            </button>
            <button className='linkDiv'>
                <Link to='/home'><PersonOutlineIcon /> Profil</Link>
            </button>
            <button className='linkDiv'>
                <Link to='/home'><PendingIcon /> Daha fazla</Link>
            </button>
            <button className='submitBtn'>Gönder</button>

            <button className='changeBtn'>
                Mert Çetin <MoreHorizIcon />
            </button>
        </div>
    )
}

export default MainLink;