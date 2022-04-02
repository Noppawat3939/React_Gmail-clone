import React from 'react';
import './EmailList.css';
import {BsThreeDotsVertical, BsKeyboardFill} from 'react-icons/bs';
import {FaUserFriends, FaTag} from 'react-icons/fa';
import {HiInbox} from 'react-icons/hi';
import {MdCheckBoxOutlineBlank, MdOutlineArrowDropDown, MdRefresh, MdChevronLeft, MdChevronRight} from 'react-icons/md';
import { NavLink, Link } from 'react-router-dom';
import EmailIcon from './EmailIcon';
import Section from './Section';
import EmailRow from './EmailRow';
import { EmailData } from '../data';

function EmailList() {

  return (
    <div className='emailList'>
        <div className="emailList_settings">
            <div className="emailList_settingsLeft">
                <NavLink to='/' >
                    <EmailIcon Icon={MdCheckBoxOutlineBlank} Class='left'/>
                    <EmailIcon Icon={MdOutlineArrowDropDown} Class='left' />
                    <EmailIcon Icon={MdRefresh} Class='left' />
                    <EmailIcon Icon={BsThreeDotsVertical} Class='left' />
                </NavLink>
            </div>

            <div className="emailList_settingsRight">
                <EmailIcon Icon={MdChevronLeft} Class='right' />
                <EmailIcon Icon={MdChevronRight} Class='right' />
                <EmailIcon Icon={BsKeyboardFill} Class='right' />
                <EmailIcon Icon={MdOutlineArrowDropDown} Class='right' />
            </div>
        </div>

        <div className="emailList_sections">
            <Section Icon={HiInbox} title='Primary' color="#c71610" selected />
            <Section Icon={FaUserFriends} title='Social' color="#3e65cf" />
            <Section Icon={FaTag} title='Promotion' color="#08851b" />
        </div>

        <div className="emailList_list">
            {EmailData.map((item, index) => {
                const {title, subject, description, time} = item;
                return <EmailRow key={`title ${index}`} title={title} subject={subject} description={description} time={time} />
            })}
        </div>
    </div>
  )
}

export default EmailList