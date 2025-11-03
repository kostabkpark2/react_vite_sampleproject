import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './PokeApp.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode> ==> 두번씩 실행되는 것을 막기 위해 주석 처리
    <App />
  // </StrictMode>,
)
