import React from 'react'

const PingCard = ({data}) => {
  return (
    <div className="ping-card card">
      <div className="header">
        <h4>Network Latency</h4>
      </div>
      <div className="small-box-content">
        <div className="latency">
          <h2 className='basic-header'>Average Latency:</h2>
          <h1 className='highlight'>{data.latency}</h1>
        </div>
        <div className="reachable">
          <h2 className='basic-header'>Reachable:</h2>
          <h1 className='highlight'>{data.reachable}</h1>
        </div>
      </div>
    </div>
  )
}

export default PingCard