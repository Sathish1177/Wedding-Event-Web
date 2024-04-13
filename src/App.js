import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/home';
import NavBar from './Components/Home/home';
import NavBarall from './Components/NavBar/navbar';
import Abouts from './Components/Aboutus/About';
import Services1 from './Components/Services/Services';
import Aestheticwedding from './Components/Services/ServicePages/Aestheticwedding';
import Photography from './Components/Services/ServicePages/Photography';
import Brindal from './Components/Services/ServicePages/Brindal';
import Catering from './Components/Services/ServicePages/Catering';
import Events from './Components/Services/ServicePages/Events';
import CelebrityManagement from './Components/Services/ServicePages/CelebrityManagement';
import Contect from './Components/Contact/Contect';
import D_Weddings from './Components/DestinationWeddings/D_Weddings';
import Logins from './Components/Login/login';
import Login from './Components/Login/login';
import Gallery from './Components/Gallery/Gallery';
import Wedding_budget from './Components/wedding_budget_plan/wedding_budget';
import Footer1 from './Components/Footer/footer';
import App12 from './Components/sampledash/maindashboard';
import Global from './Components/DestinationWeddings/subpages/global';
import India from './Components/DestinationWeddings/subpages/india';
import Tamilnadu from './Components/DestinationWeddings/subpages/tamilnadu';






function App() {
  return (
  <> 
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<Abouts/>}/>
    <Route path='/services' element={<Services1/>}/> 
    {/* services pages */}
    <Route path='/aestheticwedding' element={<Aestheticwedding/>}/> 
    <Route path='/photography' element={<Photography/>}/>
    <Route path='/brindalmakeup' element={<Brindal/>}/>
    <Route path='/catering' element={<Catering/>}/>
    <Route path='/events' element={<Events/>}/>
    <Route path='/celebrity' element={<CelebrityManagement/>}/>
    
    <Route path='/Wedding_budget' element={<Wedding_budget/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/D_Weddingd' element={<D_Weddings/>}/>

    <Route path='/global' element={<Global/>}/>
    <Route path='/india' element={<India/>}/>
    <Route path='/tamil' element={<Tamilnadu/>}/>

    <Route path='/blog' element={<Home/>}/>
    <Route path='/contact' element={<Contect/>}/>
    <Route path='/login' element={<Login/>}/>
    
   <Route path='/final' element={<App12/>}/>

         
   </Routes>
   </BrowserRouter>
  </>
  );
}

export default App;
