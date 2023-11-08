import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Basketball from './components/Basketball'
import Layout from './components/Layout'
import Cricket from './components/Cricket'
import Hockey from './components/Hockey'
import './App.scss'
import Soccer from './components/Soccer'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Basketball" element={<Basketball />} />
          <Route path="/Cricket" element={<Cricket />} />
          <Route path="/Hockey" element={<Hockey />} />
          <Route path="/Soccer" element={<Soccer />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
