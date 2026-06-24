import React from 'react'

const StatusCard = ({data}) => {
  return (
    <div className='status-card card'>
      <div className="content">
        <div className="header">
          <h4>status</h4>
        </div>
        <div className="status">
          <h2 className='basic-header'>Score:</h2>
          <h4 className='basic'>{data.scoreResponse.score}/100</h4>
          <h3 className='basic'>{data.scoreResponse.response}</h3>
        </div>
        <div className="target">
          <h2 className='basic-header'>Target:</h2>
          <h4 className='basic'>{data.target}</h4>
        </div>
      </div>
    </div>
  )
}

export default StatusCard