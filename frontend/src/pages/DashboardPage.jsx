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
import { Loader } from 'lucide-react';
import axios from '../utils/axios.js';
import { useSearchParams, useNavigate } from 'react-router-dom'

const DashboardPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const url = searchParams.get('url');
  const { submit } = webStore();
  const [data, setData] = useState({});
  const [analytics, setAnalytics] = useState(null);
  async function fetchTrace(inputData) {
    try {
      const cacheKey = `trace-${url}`;
      const cachedData = localStorage.getItem(cacheKey);
      if(cachedData) {
        const parsedData = JSON.parse(cachedData);
        const fiveMinute = 5*60*1000;
        const isFresh = Date.now() - parsedData.timestamp < fiveMinute;
        if(isFresh) {
          console.log("Using cached data");
          setData(parsedData.data);
          return;
        }
      }
      const tracerouteData = await axios.post('/submit/analyze', inputData);
      setData(tracerouteData.data.traceResponse);
      localStorage.setItem(
        cacheKey,
        JSON.stringify({
          data: tracerouteData.data.traceResponse,
          timestamp: Date.now()
        })
      )
    } catch (error) {
      console.log(error);
    }
  }
  // async function fetchData() {
  //   try { 
  //     const response = await submit({url});
  //     setAnalytics(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  async function fetchData() {
    try {
      const cacheKey = `analysis-${url}`;
      const cachedData = localStorage.getItem(cacheKey);
      if (cachedData) {
        const parsedData = JSON.parse(cachedData);
        const fiveMinute = 5*60*1000;
        const isFresh =
          Date.now() - parsedData.timestamp < fiveMinute;
        if(isFresh) {
          console.log("Using cached data");
          setAnalytics(parsedData.data);
          return;
        }
      }
      console.log("Fetching from backend");
      const response = await submit({ url });
      setAnalytics(response.data);
      localStorage.setItem(
        cacheKey,
        JSON.stringify({
          data: response.data,
          timestamp: Date.now()
        })
      );

    } catch (error) {
      console.log(error);
    }
  }

  function clearExpiredCache() {

    const oneMinute = 60 * 1000;

    Object.keys(localStorage).forEach((key) => {

      if (!key.startsWith("analysis-")) return;

      try {

        const item = JSON.parse(
          localStorage.getItem(key)
        );

        if (
          !item.timestamp ||
          Date.now() - item.timestamp > oneMinute
        ) {
          localStorage.removeItem(key);
        }

      } catch {
        localStorage.removeItem(key);
      }
    });
  }
  useEffect(() => {
    if (!url) {
      navigate('/');
      return;
    }
    clearExpiredCache();
    fetchData();
    fetchTrace({ url });

  }, [url]);

  if (!analytics) {
    return (
      <div className='loader-page'>
        <Loader className='size-10 animate-spin' style={{ color: '#8a8a8a' }} /><br></br><br></br>
        <span className='header'><h4>Fetching web analytics.</h4></span>
        <span className='header'><h4>Just a minute.</h4></span>
      </div>
    );
  } else {
    return (
      <div className='page'>
        <Navbar />
        <div className='dashboard-page'>
          <div className="row">
            <StatusCard data={analytics.result} />
            <DiagnosticCard data={analytics.result.diagnosis} />
            <HttpCard data={analytics.result.http} />
            <DNSCard data={analytics.result} />
            <TracerouteCard data={data} />
            <PingCard data={analytics.result.pingResponse} />
            <SSLCard data={analytics.result.tlsResponse} />
            <PortCard data={analytics.result.port} />
          </div>
        </div>
      </div>
    )
  }
}

export default DashboardPage