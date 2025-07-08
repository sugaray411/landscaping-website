import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout'
import Home from './pages/Home'
import LawnCare from './pages/LawnCare'
import Landscaping from './pages/Landscaping'
import TreeServices from './pages/TreeServices'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lawn-care" element={<LawnCare />} />
        <Route path="/landscaping" element={<Landscaping />} />
        <Route path="/tree-services" element={<TreeServices />} />
      </Routes>
    </Layout>
  )
}
