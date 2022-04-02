import React, {useState} from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import {AiOutlinePlus} from 'react-icons/ai';
import {BiVideo} from 'react-icons/bi';
import {BsFillChatQuoteFill, BsKeyboardFill} from 'react-icons/bs';
import {HiInbox, HiStar, HiUser} from 'react-icons/hi';
import {FaTrash} from 'react-icons/fa'
import {GoPlus} from 'react-icons/go';
import {MdAccessTimeFilled, MdScheduleSend, MdOutlineLabelImportant, MdKeyboardArrowDown, MdOutlineKeyboardArrowUp, MdEmail, MdReport, MdSettings, MdVideocam} from 'react-icons/md';
import {IoMdSend, IoMdDocument, IoMdCall} from 'react-icons/io';
import {ImHangouts, ImPlus} from 'react-icons/im';
import { useGlobalContext } from '../context';

function Sidebar() {
  const [showMore, setShowMore] = useState(false)
  const {sidebarOpen, OpenCompose, OpenComposeMail} = useGlobalContext();

  return (
    <div className={`${sidebarOpen ? 'sidebar active':'sidebar'}`}>
        <div className="sidebar_compose" onClick={OpenComposeMail}>
            <GoPlus />
            <h4>COMPOSE</h4>
        </div>
        <SidebarOption Icon={HiInbox} title='Inbox' number={54} selected={true} />
        <SidebarOption Icon={HiStar} title='Starred' number={6} />
        <SidebarOption Icon={MdAccessTimeFilled} title='Snoozed' number={3} />
        <SidebarOption Icon={MdOutlineLabelImportant} title='Important' number={67} />
        <SidebarOption Icon={IoMdSend} title='Send' number='99+' />
        <SidebarOption Icon={IoMdDocument} title='Draft' number={11}/>
        <button onClick={() => setShowMore(!showMore)} style={{border: '0', display:'flex', width: '100%', backgroundColor: '#fff'}}>
        {showMore ? <SidebarOption Icon={MdOutlineKeyboardArrowUp} title='Less' /> : <SidebarOption Icon={MdKeyboardArrowDown} title='More' />}
        </button>
        {showMore &&  (
          <>
            <SidebarOption Icon={BsFillChatQuoteFill} title='Chat' number={25} />
            <SidebarOption Icon={MdScheduleSend} title='Schedule' />
            <SidebarOption Icon={MdEmail} title='All Email' number='99+' />
            <SidebarOption Icon={MdReport} title='Trash' />
            <SidebarOption Icon={FaTrash} title='Junk Mail' number={50} />
            <SidebarOption Icon={MdSettings} title='Manage labels' />
            <SidebarOption Icon={AiOutlinePlus} title='Creat a new label'  />
          </>
        )}

        <div className="sidebar_footer">
          <div className="sidebar_footerTop">
            <SidebarOption Icon={BiVideo} title='Meet' />
            <SidebarOption Icon={MdVideocam} title='New Meeting' />
            <SidebarOption Icon={BsKeyboardFill} title='Join the Meeting' />
          </div>
          <div className="sidebar_footerBottom">
            <div className="sidebar_footerIcon">
                <HiUser />
            </div>
            <div className="sidebar_footerIcon">
              <ImHangouts />
            </div>
            <div className="sidebar_footerIcon">
              <IoMdCall />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Sidebar