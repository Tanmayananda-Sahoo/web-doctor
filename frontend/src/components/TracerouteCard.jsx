import React from 'react'
import { Loader } from "lucide-react";

const TracerouteCard = ({ data }) => {
  if (!data.destinationReached)
    return (
      <div className='trace-card card' style={{ textAlign: 'center' }}>
        <Loader className='size-10 animate-spin' /><br></br><br></br>
        <span className='header'><h4>Fetching trace response.</h4></span>
        <span className='header'><h4>Usually take some time.</h4></span>
      </div>
    );
  return (
    <div className='trace-card card'>
      <div className="header">
        <h4>Route Analysis</h4>
      </div>
      <div className="small-box-content">
        <div className="destination">
          <h2 className='basic-header'>Destination:</h2>
          <h1 className='highlight'>{!data.destinationReached?.includes("could not resolve destination") ? <span className='success'>reached</span> : <span className='error'>{data.destinationReached}</span>}</h1>
        </div>
        {
          data.success ? (
            <>
              <div className="hop">
                <h2 className='basic-header'>Hops:</h2>
                <h1 className='highlight'>{data.hopCount}</h1>
              </div>
              <div className="timed-out-hops">
                <h2 className='basic-header'>Timed Out Hops:</h2>
                <h1 className='highlight'>{data.timedOutHopCount}</h1>
              </div>
            </>
          ) : ""
        }
      </div>
    </div>
  )
}

export default TracerouteCard