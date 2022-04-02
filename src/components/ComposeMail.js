import React from 'react';
import './ComposeMail.css';
import ComposeTopIcon from './ComposeTopIcon';
import ComposeFooter_Tool from './ComposeFooter_Tool';
import ComposeFooterSend from './ComposeFooterSend';
import {AiOutlineLine} from 'react-icons/ai';
import {MdOutlineMinimize, MdOutlineCloseFullscreen, MdClose, MdOpenInFull} from 'react-icons/md';
import { useGlobalContext } from '../context';


function ComposeMail() {

    const {OpenCompose, OpenComposeMail, CloseComposeMail, resizeCompose, ResizingCompose, hideCompose, HideCompose} = useGlobalContext();

  return (
    <>
    {OpenCompose && (
        <div className={`${resizeCompose ? 'composeMail small_size' : 'composeMail' }`}>
            <div className={`${hideCompose ? 'compose_box hide': 'compose_box'}`}>
                <div className="compose_boxTop">
                    <div className="compose_boxTopLeft">
                        <h4>New Message</h4>
                    </div>
                    <div className="compose_boxTopRight">
                        <button onClick={HideCompose}>
                            <ComposeTopIcon Icon={MdOutlineMinimize} />
                        </button>
                        <button onClick={ResizingCompose}>
                            {resizeCompose ? <ComposeTopIcon Icon={MdOpenInFull} /> : <ComposeTopIcon Icon={MdOutlineCloseFullscreen} />}
                        </button>
                        <button onClick={CloseComposeMail}>
                            <ComposeTopIcon Icon={MdClose} />
                        </button>
                    </div>
                </div>
                <div className="compose_boxBody">
                    <form className={`${resizeCompose ? 'form size_small' : 'form'}`} >
                        <div className="formControl">
                            <label htmlFor="name">To</label>
                            <input type="text" required/>
                        </div>
                        <div className="formControl">
                            <input type="text" placeholder='Subject' required/>
                        </div>
                        <div className="formControl">
                            <textarea required/>
                        </div>
                        <div className="compose_boxFooter">
                            <div className="composeFooter_Tools">
                                <ComposeFooter_Tool />
                            </div>
                                <ComposeFooterSend/>
                        </div>                    
                    </form>
                </div>
            </div>
        </div>
    )}
    </>
  )
}

export default ComposeMail