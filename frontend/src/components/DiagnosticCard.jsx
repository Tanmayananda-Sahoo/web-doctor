import React from 'react'

const DiagnosticCard = ({data}) => {
  return (
    <div className='diagnostic-card card'>
        <div className="header">
          <h4>diagnostics</h4>
        </div>
        <div className="cause">
          <h2 className='basic-header'>Cause:</h2>
          <h4 className='basic'>{data.cause}</h4>
        </div>
        <div className="reason">
          <h2 className='basic-header'>Reason:</h2>
          <h4 className='basic'>{data.details}</h4>
        </div>
    </div>
  )
}

export default DiagnosticCard