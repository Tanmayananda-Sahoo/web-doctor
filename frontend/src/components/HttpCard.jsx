import React from 'react'

const HttpCard = ({data}) => {
  return (
    <div className="http-card card">
      <div className="header">
        <h4>Web Response</h4>
      </div>
      <div className="small-box-content">
        <div className="port">
          <h2 className='basic-header'>Status Code:</h2>
          <h1 className='highlight'>{data.status}</h1>
        </div>
        <div className="port-status">
          <h2 className='basic-header'>Reachable:</h2>
          <h1 className='highlight'>{data.reachable}</h1>
        </div>
        <div className="response-time">
          <h2 className='basic-header'>Response Time:</h2>
          <h1 className='highlight'>{`${data.responseTime} ms`}</h1>

        </div>
      </div>
    </div>
  )
}

export default HttpCard