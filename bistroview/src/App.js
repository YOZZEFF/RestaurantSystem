import {Route,Routes} from 'react-router-dom'
import { Nav } from './Nav';
import {Home} from './home/Home';
import { Menu } from './menu/Menu';
import { Pages } from './pages/Pages';
import { About } from './about/About';
import { Footer } from './Footer';
import { Book } from './booking/Book';
import { Contact } from './contact_us/Contact';
import { Register } from './Auth/Register';
import React from 'react'
import { Login } from './Auth/Login';
import { Userprofile } from './Auth/Userprofile';
import {  SingleprodAll } from './menu/SingleprodAll';
import { SingleprodCateogries } from './menu/SingleprodCateogries';
import { Admin } from './Admin/Admin';
import { Getusers } from './Admin/Getusers';
import { Getbookings } from './Admin/Getbookings';
import { Products } from './Admin/Products';
import { Updateprod } from './Admin/Updateprod';
import { Addprod } from './Admin/Addprod';
import { useSelector } from 'react-redux';

function App() {

  return (
    <div className="App">
      <Nav/>
  
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="/userprofile/:token" element={<Userprofile/>}/>
        {/* Start Admin zone */}
        <Route path="/admin/:token" element={<Admin/>}/>
        <Route path="/admin/:token/getusers" element={<Getusers/>}/>
        <Route path="/admin/:token/getresrvations" element={<Getbookings/>}/>
        <Route path="/admin/:token/products" element={<Products/>}/>
        <Route path="/admin/:token/products/update/:id" element={<Updateprod/>}/>
        <Route path="/admin/:token/products/add" element={<Addprod/>}/>
        {/* End Admin Zone */}


        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/menu/allprod" element={<Menu/>}/>     {/*to get products of link All  */}
        <Route path="/menu/all/:id" element={<Menu/>}/>       {/*to get products of cateogries links  */}
        <Route path="/menu/all/:id/:product_id" element={<SingleprodCateogries/>}/>    
        <Route path="/menu/allprod/:id" element={<SingleprodAll/>}/>  
        <Route path="booking" element={<Book/>}/>
        <Route path="pages" element={<Pages/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>

      <Footer/>

    </div>
  );
}

export default App;
