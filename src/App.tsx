import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/home'
import TermsPage from './page/terms'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </BrowserRouter>
  )
}
