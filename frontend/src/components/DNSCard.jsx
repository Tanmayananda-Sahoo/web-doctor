import React from 'react'

const DNSCard = ({data}) => {
  return (
    <div className='dns-card card'>
      <div className="header">
        <h4>DNS Resolution</h4>
      </div>
      <div className="record-status">
        <div className="ipv4">
          <h2 className='basic-header'>IPv4 Status:</h2>
          <h4 className='basic'>{data.IPv4.success}</h4>
        </div>
        <div className="ipv6">
          <h2 className='basic-header'>IPv6 Status:</h2>
          <h4 className='basic'>{data.IPv6.success}</h4>
        </div>
        <div className="ipv4-records">
          <h2 className='basic-header'>IPv4 Records:</h2>
          <ul>
            {data.IPv4.records.map((elem, idx) => {
              return (<li key={idx} className='basic'>{elem}</li>)
            })}
          </ul>
        </div>
        <div className="ipv6-records">
          <h2 className='basic-header'>IPv6 Records:</h2>
          <ul>
            {data.IPv6.records.map((elem, idx) => {
              return (<li key={idx} className='basic'>{elem}</li>)
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DNSCard