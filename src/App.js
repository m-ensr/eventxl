import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav';
import HomePage from './pages/HomePage';
import Search from './pages/Search';
import Festivals from './pages/Festivals';
import Concerts from './pages/Concerts';
import Movies from './pages/Movies';
import Theaters from './pages/Theaters';
function App() {
  return (
    <div>
      <Header />
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/festivals" element={<Festivals/>} />
          <Route path="/concerts" element={<Concerts/>} />
          <Route path="/movies" element={<Movies/>} />
          <Route path="/theaters" element={<Theaters/>} />
          <Route path="/search" element={<Search/>} />
        </Routes>
      </div>
      <SimpleBottomNavigation/>
    </div>
  );
}

export default App;
