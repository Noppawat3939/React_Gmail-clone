import React, {useContext} from 'react';
import './Header.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineSearch, AiOutlineQuestionCircle, AiOutlineSetting} from 'react-icons/ai';
import {BiAbacus} from 'react-icons/bi';
import {CgMenuGridO} from 'react-icons/cg';
import HeaderIcon from './HeaderIcon';
import './HeaderIcon.css'
import {NavLink } from 'react-router-dom'
import { AppContext, useGlobalContext } from '../context';

function Header() {

  const {sidebarOpen, toggleSidebar} = useGlobalContext()

  return (
    <div className='header'>
        <div className="header_left">
          <button onClick={toggleSidebar} style={{border: 'none', backgroundColor:'transparent'}}>
            <HeaderIcon Icon={GiHamburgerMenu} />
          </button>
            <NavLink to='/'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Gmail2020.logo.png" className='logo' />
            </NavLink>
        </div>
        <div className="header_middle">
            <HeaderIcon Icon={AiOutlineSearch} />
            <input type="text" placeholder='Search mail'/>
            <HeaderIcon Icon={BiAbacus} />
        </div>
        <div className="header_right">
            <HeaderIcon Icon={AiOutlineQuestionCircle} />
            <HeaderIcon Icon={AiOutlineSetting}/>
            <HeaderIcon Icon={CgMenuGridO} />
            <HeaderIcon avatar="https://scontent.fphs4-1.fna.fbcdn.net/v/t1.6435-9/81697322_2699515710127170_2422821425682317312_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeELrXw7Tun_0fzdJQCfuALnOWOu-_KBDZ05Y6778oENnepGneTCOeSN5eHUGzKGPX6Jp1hEcPfYadM_kte_Gsj7&_nc_ohc=CjHOkSgaH8gAX94LH8x&_nc_ht=scontent.fphs4-1.fna&oh=00_AT-eM3KysPO8eSnlucyKL0nl2wtiqaqRjVQuThu1H4YfGg&oe=626B14B1" />
        </div>
    </div>
  )
}

export default Header