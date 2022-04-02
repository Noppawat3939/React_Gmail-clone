import React from 'react';
import './EmailRow.css';
import {FaTrash} from 'react-icons/fa';
import {MdCheckBoxOutlineBlank, MdMarkAsUnread, MdOutlineStarBorderPurple500, MdOutlineLabelImportant, MdAccessTimeFilled} from 'react-icons/md';
import {ImBoxAdd} from 'react-icons/im';
import EmailIcon from './EmailIcon';
import { Link, NavLink } from 'react-router-dom';

function EmailRow({id, title, subject, description, time}) {

  const EmailRowIcon = ({Icon, Class}) => {
    return (
      <div className={`emailRowIcon ${Class}`}>
        <Icon />
      </div>  
    )
  }

  return (
    <NavLink to='/mail' className='linktoMail'>
      <div className='emailRow' >
        <div className="emailRow_options left">
          <EmailRowIcon Icon={MdCheckBoxOutlineBlank} Class='left' />
          <EmailRowIcon Icon={MdOutlineStarBorderPurple500} Class='left' />
          <EmailRowIcon Icon={MdOutlineLabelImportant} Class='left' />
        </div>
        <h3 className="emailRow_title">{title}</h3>
        <div className="emailRow_message">
          <h4>{subject}
          <span className='emailRow_description'>
            {description}
          </span>
          </h4>
        </div>
        <p className="emailRow_time">{time}</p>
        <div className="emailRow_options right">
          <EmailRowIcon Icon={ImBoxAdd} Class='right' />
          <EmailRowIcon Icon={FaTrash} Class='right' />
          <EmailRowIcon Icon={MdMarkAsUnread} Class='right' />
          <EmailRowIcon Icon={MdAccessTimeFilled} Class='right' />
        </div>
      </div>
    </NavLink>
  )
}

export default EmailRow