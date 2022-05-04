import { Route, Routes } from 'react-router-dom';
import Blogs from './Components/Blogs/Blogs';
import Home from './Components/Home/Home';
import Inventory from './Components/Inventory/Inventory';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Heder/Header';


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
