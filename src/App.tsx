

import './App.css';
import Header from './components/Header/header';
import Home from './components/Home/Home';
import Start from './components/market/market';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Memories from './components/market/memories/memories';
import User from './components/User/User';
import Mintt from './components/mint/Mint-box';
import Show from './components/show-nft/show';
import ManageAuction from './components/manage-auction-page/manage-auction-page';




function App() {
  return (
    <div className="App">
    <BrowserRouter> <Header/><Routes>
   
   <Route path='/User' element={<User/>}></Route><Route path='/' element={<Home/>}></Route>
    <Route path='/market' element={<Start/>}></Route>
    <Route path='/market/memories/memories' element={<Memories/>}></Route>
    <Route path='/mint' element={<Mintt/>}></Route>
    <Route path='/show-nft' element={<Show/>}></Route>
    <Route path='/manage-auction-page' element={<ManageAuction/>}></Route></Routes>
    </BrowserRouter>
   

    </div>
  );
}

export default App;
