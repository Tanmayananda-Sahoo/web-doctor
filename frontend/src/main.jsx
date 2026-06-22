import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import InputPage from './pages/InputPage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import { webStore } from './services/web.services.js'
import AppRoutes from './services/AppRoutes.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <AppRoutes />
  </BrowserRouter>,
)
