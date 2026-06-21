import React from 'react'
import Navbar from '../components/Navbar.jsx'
import StatusCard from '../components/StatusCard.jsx'
import DiagnosticCard from '../components/DiagnosticCard.jsx'
import DNSCard from '../components/DNSCard.jsx'
import PortCard from '../components/PortCard.jsx'
import HttpCard from '../components/HttpCard.jsx'
import PingCard from '../components/PingCard.jsx'
import SSLCard from '../components/SSLCard.jsx'
import TracerouteCard from '../components/TracerouteCard.jsx'

const DashboardPage = () => {
  return (
    <div className='dashboard-page'>
        <Navbar />
        <div className="first-row row">
          <StatusCard />
          <DiagnosticCard />
        </div>
        <div className="second-row row">
          <DNSCard />
          <PortCard />
        </div>
        <div className="third-row row">
          <HttpCard />
          <PingCard />
        </div>
        <div className="fourth-row row">
          <SSLCard />
          <TracerouteCard />
        </div>
    </div>
  )
}

export default DashboardPage