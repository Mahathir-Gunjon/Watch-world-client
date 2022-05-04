import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Shared/Heder/Footer';
import Header from './Components/Shared/Heder/Header';


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
