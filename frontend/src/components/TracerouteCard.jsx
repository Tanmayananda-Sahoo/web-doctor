import React from 'react'

const TracerouteCard = () => {
  return (
    <div className='trace-card card'>
      <div className="header">
        <h4>Route Analysis</h4>
      </div>
      <div className="small-box-content">
        <div className="destination">
          <h2 className='basic-header'>Destination:</h2>
          <h1 className='highlight'>Reached</h1>
        </div>
        <div className="hop">
          <h2 className='basic-header'>Hops:</h2>
          <h1 className='highlight'>8</h1>
        </div>
        <div className="timed-out-hops">
          <h2 className='basic-header'>Timed Out Hops:</h2>
          <h1 className='highlight'>2</h1>
        </div>
      </div>
    </div>
  )
}

export default TracerouteCard