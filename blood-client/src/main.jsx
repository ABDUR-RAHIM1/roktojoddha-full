import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { MyState } from './State/State.jsx';
import ScrollToTop from './components/utils/Scroll.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <MyState>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </MyState>
  ,
)
