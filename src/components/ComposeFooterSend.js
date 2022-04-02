import React from 'react';
import './ComposesFooterSend.css';
import {BsThreeDotsVertical} from 'react-icons/bs';
import {CgSmileMouthOpen} from 'react-icons/cg';
import {FaPenAlt} from 'react-icons/fa';
import {MdOutlineFormatColorText, MdAttachFile, MdLink, MdImage, MdLockClock, MdDelete} from 'react-icons/md';
import {RiArrowDropDownFill, RiDriveLine} from 'react-icons/ri';


function ComposeFooterSend() {

  const FtSendIcon = ({Icon}) => {
    return(
      <div className="ft_send_Icon">
        <Icon />
      </div>
    )
  }
  
  return (
    <div className='composeFooter_Send'>
        <div className="ft_send_Left">
            <button>
              <span>Send</span>
              <RiArrowDropDownFill />
            </button>
            <FtSendIcon Icon={MdOutlineFormatColorText}/>
            <FtSendIcon Icon={MdAttachFile} />
            <FtSendIcon Icon={MdLink} />
            <FtSendIcon Icon={CgSmileMouthOpen} />
            <FtSendIcon Icon={RiDriveLine} />
            <FtSendIcon Icon={MdImage} />
            <FtSendIcon Icon={MdLockClock} />
            <FtSendIcon Icon={FaPenAlt} />
        </div>
        <div className="ft_send_Right">
          <FtSendIcon Icon={BsThreeDotsVertical} />
          <FtSendIcon Icon={MdDelete} />
        </div>
    </div>
  )
}

export default ComposeFooterSend