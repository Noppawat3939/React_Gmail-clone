import React from 'react';
import './EmailIcon.css';                

function EmailIcon({Icon, Class}) {
  return (
      <>
      {Icon && (
        <div className={`emailIcon ${Class}`}>
        { <Icon />}
    </div>
      )}
      </>
  )
}

export default EmailIcon