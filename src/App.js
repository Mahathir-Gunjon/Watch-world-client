import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Components/BLogs/Blogs';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <h1>tailwind</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </div>
  );
}

export default App;
