import React from 'react'

const PortCard = ({data}) => {
  return (
    <div className="port-card card">
      <div className="header">
        <h4>Port connectivity</h4>
      </div>
      <div className="small-box-content">
        <div className="port">
          <h2 className='basic-header'>Port:</h2>
          <h1 className='highlight'>{data.port}</h1>
        </div>
        <div className="port-status">
          <h2 className='basic-header'>Status:</h2>
          <h1 className='highlight'>{data.open ? <span className="success">open</span> : <span className='error'>closed</span>}</h1>
        </div>
      </div>
    </div>
  )
}

export default PortCard