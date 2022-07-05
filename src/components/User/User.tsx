import './User.css'
import pic from '../../assets/home-img.png'
import Message from '../../assets/message.png';
import { Link } from 'react-router-dom';
import New from '../Modals/new/new';
import { useState } from 'react';

export default function User() {const [NewOpen, setNewOpen] = useState(false);
  return (
    <div><div className="user-container">{NewOpen && <New setOpenNew={setNewOpen} />}
        <div className="user-parent"><div className="user-header"><div className="user-header-left"><img src={pic}></img></div><div className="user-header-right"><h2>@lovePhigitals</h2>
        <Link to={'/Mint-box'}> <button>Mint</button></Link></div></div>
        <div className="user-footer"><div className="user-footer-left"><h1>Collection</h1>
        <div className='footer-left1'><div className='footer1left'><img className='small-img' src={pic}></img></div>
        <div className='footer1-right'><h2>item title</h2><h3>metadata</h3><sup>manage</sup></div></div> <div className='footer-left1'><div className='footer1left'><img className='small-img' src={pic}></img></div><div className='footer1-right'><h2>item title</h2><h3>metadata</h3><sup>manage</sup></div></div></div><div className="user-footer-right"><h1>Notification</h1>
        <div className='footer-right1'><img src={Message}></img>
        <h2>You Won</h2><sup onClick={() => {
            setNewOpen(true);
          }}>New</sup></div><div className='footer-right1'><img src={Message}></img>
        <h2>You Won</h2><sup onClick={() => {
            setNewOpen(true);
          }}>New</sup></div></div></div></div></div></div>
  )
}
