import React from 'react'

const StatusCard = () => {
  return (
    <div className='status-card card'>
      <div className="content">
        <div className="header">
          <h4>status</h4>
        </div>
        <div className="status">
          <h2 className='basic-header'>Score:</h2>
          <h4 className='basic'>92/100</h4>
          <h3 className='basic'>Website looks healthy.</h3>
        </div>
        <div className="target">
          <h2 className='basic-header'>Target:</h2>
          <h4 className='basic'>google.com</h4>
        </div>
      </div>
    </div>
  )
}

export default StatusCard