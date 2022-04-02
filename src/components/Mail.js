import React, {useState} from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Mail.css';
import {AiFillPrinter, AiOutlineStar} from 'react-icons/ai';
import {BsKeyboardFill} from 'react-icons/bs';
import {ImBoxAdd} from 'react-icons/im'
import { FaTrash } from 'react-icons/fa';
import {HiOutlineDotsVertical, HiCheckCircle, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import {MdReport, MdArrowBack, MdAccessTimeFilled, MdLabel, MdMarkAsUnread, MdLabelImportant} from 'react-icons/md';
import {IoMdArrowDropdown} from 'react-icons/io';
import {ImArrowRight} from 'react-icons/im';
import {RiFolderTransferFill, RiShareBoxLine} from 'react-icons/ri';
import {TiArrowBack} from 'react-icons/ti';
import { Code } from '@material-ui/icons';
import { EmailData } from '../data';

function Mail() {
  
  const EmailToolIcon = ({Icon, Class}) => {
    return (
      <div className={`emailToolIcon ${Class}`}>
        <Icon />
      </div>  
    )
  }

  return (
    <div className='mail'>
      <div className="mail_tools">
        <div className="mail_toolLeft">
          <NavLink to='/'>
            <EmailToolIcon Icon={MdArrowBack} />
          </NavLink>
          <EmailToolIcon Icon={ImBoxAdd} />
          <EmailToolIcon Icon={MdReport} />
          <EmailToolIcon Icon={FaTrash} />
          <EmailToolIcon Icon={MdMarkAsUnread} />
          <EmailToolIcon Icon={HiCheckCircle} />
          <EmailToolIcon Icon={MdAccessTimeFilled} />
          <EmailToolIcon Icon={RiFolderTransferFill} />
          <EmailToolIcon Icon={MdLabel} />
          <EmailToolIcon Icon={HiOutlineDotsVertical} />
        </div>
        <div className="mail_toolRight">
          <EmailToolIcon Icon={HiChevronLeft} />
          <EmailToolIcon Icon={HiChevronRight} />
          <EmailToolIcon Icon={BsKeyboardFill} />
          <EmailToolIcon Icon={IoMdArrowDropdown} />
        </div>
      </div>
      <div className="mail_body">
        <div className="mail_bodyHeader">
          <div className="mail_bodyHeaderLeft">
            <h2>subject</h2>
            <p>title</p>
            <MdLabelImportant className='mail_important'/>
          </div>
          <div className="mail_bodyHeaderRight">
            <EmailToolIcon Icon={AiFillPrinter} />
            <EmailToolIcon Icon={RiShareBoxLine} />
          </div>
        </div>
        <div className="mail_message">
          <div className="mail_messageHeader">
            <div className="mail_messageHeaderLeft">
              <div className="mail_avatar">
                <img src="https://www.hecmsenior.com/wp-content/uploads/2021/06/Profile-Pic-Icon.png" />
              </div>
              <div className="mail_title">
                <div className="mail_titleTop">
                  <h3>user123@gmail.com</h3>
                  <p>xcvbb</p>
                </div>
                <div className="mail_titleBottom">
                  <p>to Me</p>
                  <EmailToolIcon Icon={IoMdArrowDropdown} />
                </div>
              </div>
            </div>
            <div className="mail_messageHeaderRight">
              <p className="mail_time">10: 30</p>
              <EmailToolIcon Icon={AiOutlineStar} />
              <EmailToolIcon Icon={TiArrowBack}/>
              <EmailToolIcon Icon={HiOutlineDotsVertical}/>
            </div>
          </div>
          <p>This is message</p>
        </div>
      </div>

      <div className="mail_footer">
        <div className="mail_footerButtons">
          <button className="btn">
            <TiArrowBack />
            <p>Reply</p>
          </button>
          <button className="btn">
            <ImArrowRight />
            <p>Send</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Mail