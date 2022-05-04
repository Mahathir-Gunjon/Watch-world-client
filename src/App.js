import { Route, Routes } from 'react-router-dom';
import Additem from './Components/AddItem/Additem';
import Blogs from './Components/Blogs/Blogs';
import Home from './Components/Home/Home';
import Inventory from './Components/Inventory/Inventory';
import ManageItem from './Components/ManageItem/ManageItem';
import MyItem from './Components/MyItem/MyItem';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Heder/Header';
import Notfound from './Components/Shared/Notfound';


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/manage" element={<ManageItem />} />
        <Route path="/addItem" element={<Additem />} />
        <Route path="/myItem" element={<MyItem />} />
        {/* not found */}
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
