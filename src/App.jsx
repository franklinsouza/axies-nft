import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './styles/global.scss';
import './styles/App.scss';
import Home from './pages/Home';
import ItemDetail from './pages/ItemDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/detail/:id" element={<ItemDetail />}/>
      </Routes>
    </Router>
  )
}

export default App
