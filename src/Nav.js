import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Nav = () => {
    return (
       <nav>
           <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/Products">Products</Link></li>
               <li><Link to="/Cart">Cart</Link></li>
               <li><Link to="/Checkout">Checkout</Link></li>
           </ul>
       </nav>
    )
}

export default Nav;

