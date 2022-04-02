import React from 'react'

function HeaderIcon({Icon, avatar}) {
  return (
    <div className='headerIcon'>
        {Icon && <Icon />}
        {avatar && <img src={avatar}  alt="profile" />}
    </div>
  )
}

export default HeaderIcon