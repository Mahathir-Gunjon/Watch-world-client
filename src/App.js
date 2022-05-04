import { Route, Routes } from 'react-router-dom';
import Blogs from './Components/Blogs/Blogs';
import Home from './Components/Home/Home';
// import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Heder/Header';


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
