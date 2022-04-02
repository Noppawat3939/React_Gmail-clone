import React from 'react';
import './ComposeFooter_Tool.css';
import {AiOutlineOrderedList, AiOutlineBars} from 'react-icons/ai';
import {MdFormatSize, MdOutlineFormatBold, MdOutlineFormatItalic, MdOutlineFormatUnderlined, MdFormatColorText, MdFormatIndentIncrease, MdFormatIndentDecrease, MdStrikethroughS, MdOutlineFormatClear} from 'react-icons/md';
import {ImParagraphLeft} from 'react-icons/im'
import {IoMdQuote} from 'react-icons/io';
import {RiArrowGoBackFill, RiArrowGoForwardFill, RiArrowDropDownFill} from 'react-icons/ri'

function ComposeFooter_Tool() {

    const FtToolIcon = ({Icon ,text}) => {
        return(
            <div className="ft_tool_Icon">
                <h3>{text}</h3>
                <Icon />
            </div>
        )
    }

  return (
    <div className='composeFooter_Tool'>
        <div className="ft_tool_box1">
            <FtToolIcon Icon={RiArrowGoBackFill} />
            <FtToolIcon Icon={RiArrowGoForwardFill} />
        </div>
        <div className="ft_tool_box2">
            <FtToolIcon text='Sans Serif' Icon={RiArrowDropDownFill}/>
        </div>
        <div className="ft_tool_box3">
            <FtToolIcon Icon={MdFormatSize} />
        </div>
        <div className="ft_tool_box4">
            <FtToolIcon Icon={MdOutlineFormatBold} />
            <FtToolIcon Icon={MdOutlineFormatItalic} />
            <FtToolIcon Icon={MdOutlineFormatUnderlined} />
            <FtToolIcon Icon={MdFormatColorText} />
        </div>
        <div className="ft_tool_box5">
            <FtToolIcon Icon={ImParagraphLeft} />
            <FtToolIcon Icon={AiOutlineOrderedList} />
            <FtToolIcon Icon={AiOutlineBars} />
            <FtToolIcon Icon={MdFormatIndentDecrease} />
            <FtToolIcon Icon={MdFormatIndentIncrease} />
            <FtToolIcon Icon={IoMdQuote} />
        </div>
        <div className="ft_tool_box6">
            <FtToolIcon Icon={MdStrikethroughS} />
        </div>
        <div className="ft_tool_box7">
            <FtToolIcon Icon={MdOutlineFormatClear} />
        </div>
    </div>
  )
}

export default ComposeFooter_Tool