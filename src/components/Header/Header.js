import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/cart"><li>Cart</li></Link>
        <Link to="/authentication"><li>Login/Signup</li></Link>
      </ul>
    </header>
  );
}

export default Header;
