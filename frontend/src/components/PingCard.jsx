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
          <h1 className='highlight'>{data.latency ? `${data.latency} ms` : data.reason}</h1>
        </div>
        <div className="reachable">
          <h2 className='basic-header'>Reachable:</h2>
          <h1 className='highlight'>{data.reachable ? <span className='success'>yes</span> : <span className='error'>no</span>}</h1>
        </div>
      </div>
    </div>
  )
}

export default PingCard