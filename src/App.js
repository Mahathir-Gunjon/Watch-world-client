import { Route, Routes } from 'react-router-dom';
import Blogs from './Components/BLogs/Blogs';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </div>
  );
}

export default App;
