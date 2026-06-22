import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import StatusCard from '../components/StatusCard.jsx'
import DiagnosticCard from '../components/DiagnosticCard.jsx'
import DNSCard from '../components/DNSCard.jsx'
import PortCard from '../components/PortCard.jsx'
import HttpCard from '../components/HttpCard.jsx'
import PingCard from '../components/PingCard.jsx'
import SSLCard from '../components/SSLCard.jsx'
import TracerouteCard from '../components/TracerouteCard.jsx'
import { webStore } from '../services/web.services.js'

const DashboardPage = () => {
  const { analytics, isLoading } = webStore();
  console.log("analytics: ",analytics);
  if(isLoading && analytics == null) 
    return(
    <div data-theme = {themeSelected} className='flex items-center justify-center h-screen'>
      <Loader className='size-10 animate-spin' />
    </div>
    );
  return (
    <div className='page'>
      <Navbar />
      <div className='dashboard-page'>
        <div className="row">
          <StatusCard />
          <DiagnosticCard data={analytics.result.diagnosis}/>
          <HttpCard data={analytics.result.http}/>
          <DNSCard data={analytics.result}/>
          <TracerouteCard />
          <PingCard data={analytics.result.pingResponse}/>
          <SSLCard data={analytics.result.tlsResponse}/>
          <PortCard data={analytics.result.port}/>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage