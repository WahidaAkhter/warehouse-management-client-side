import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Footer from './Components/Home/Footer/Footer';
import Header from './Components/Home/Header/Header';
import Home from './Components/Home/Home/Home';
import ItemDetail from './Components/ItemDetail/ItemDetail';
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Register/Register';
import RequireAuth from './Components/Login/RequireAuth/RequireAuth';
import ManageInventory from './Components/ManageInventory/ManageInventory';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />

        {/* <Route path='/item/:itemId' element={<ItemDetail></ItemDetail>}></Route> */}
        <Route path="/item/:itemId" element={
          <RequireAuth>
            <ItemDetail></ItemDetail>
          </RequireAuth>
        } />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/about" element={<About />} />

        <Route path="/blogs" element={<Blogs />} />

        <Route path="/manageInventory" element={<ManageInventory />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
