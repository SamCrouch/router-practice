import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Products = () => {
    return (
        <div>        
          <h2>Products Page</h2>
            <p><Link to="/Product/1">Product 1</Link></p>
            <p><Link to="/Product/2">Product 2</Link></p>
        </div>

    )
}

export default Products
