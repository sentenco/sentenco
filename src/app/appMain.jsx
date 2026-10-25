import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Capacitor } from '@capacitor/core'
import { StatusBar, Style } from '@capacitor/status-bar'
import { SplashScreen } from '@capacitor/splash-screen'
import '../migrateStorage.js'
import '../index.css'
import { AuthProvider } from '../AuthContext.jsx'
import AppShell from './AppShell.jsx'

// The phone app: Homeroom, Convo and Settings only. Built with `npm run build:app`.
if (Capacitor.isNativePlatform()) {
  StatusBar.setStyle({ style: Style.Light }).catch(() => {})
  SplashScreen.hide().catch(() => {})
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
