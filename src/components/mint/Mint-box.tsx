import './Mint-box.css';
import { Link } from 'react-router-dom';

export default function Mintt() {
  return (
    <div className='mint-container'><div className='mint-parent'><div className='mint-header'>
        <div className='header-left'><div className='header-left-child'></div></div><div className='header-right'><input name='itemName'  placeholder='Item name'></input><form>
        <select name="brand" id="brand">
  <optgroup label="Brand" placeholder='Brand'>
    <option value="">Brand</option>
    <option value="">Brand</option>
  
  </optgroup>
</select></form>
<form>
        <select name="size" id="size">
  <optgroup label="size" placeholder='size'>
    <option value="">Size</option>
    <option value="">medium</option>
    <option value="">large</option>
  </optgroup>
</select></form></div></div><div className='mint-footer'><div className='footer-left'><button className='btnn'>Upload</button></div>
<div className='footer-right'><textarea  name="comment" form="usrform" placeholder='description'>
</textarea><Link to={'/show-nft'}><button className='mint-btn'> Mint </button></Link></div>

</div></div></div>
  )
}
