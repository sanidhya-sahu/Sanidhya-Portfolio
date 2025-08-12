import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { ReactLenis, useLenis } from 'lenis/react'
// const lenisOptions = {
//   lerp: 0.1,
//   duration: 1.5,
//   smooth: true,
// };

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ReactLenis root options={lenisOptions}> */}
      <App />
    {/* </ReactLenis> */}
  </StrictMode>,
)
