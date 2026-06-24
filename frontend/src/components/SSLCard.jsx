import React from 'react'

const SSLCard = ({ data }) => {
  return (
    <div className="ssl-card card">
      <div className="header">
        <h4>SSL Security</h4>
      </div>
      <div className="ssl-headers">
        <div className="small-box-content">
          <div className="certificate-status">
            <h3 className='basic-header'>Certificate Status: </h3>
            <h4 className="basic">{data.valid ? <span className='success'>yes</span> : <span className='error'>no</span>}</h4>
          </div>
          <div className="certificate-issuer">
            <h3 className='basic-header'>Issuer: </h3>
            {
              data.issuer ? (
                <>
                  <h4 className="basic">C: {data.issuer.C}</h4>
                  <h4 className="basic">O: {data.issuer.O}</h4>
                  <h4 className="basic">CN: {data.issuer.CN}</h4>
                </>
              ) : (<h4 className='basic'><span className='error'>No issuer</span></h4>)
            }
          </div>
        </div>
        <div className="certificate-timings">
          <div className="small-box-content">
            <div className="valid-from">
              <h2 className='basic-header'>Valid From:</h2>
              <h4 className='basic'>{data.valid_from ? data.valid_from : "No certificate"}</h4>
            </div>
            <div className="valid-to">
              <h2 className='basic-header'>Valid To:</h2>
              <h4 className='basic'>{data.valid_to ? data.valid_to : "No certificate"}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SSLCard