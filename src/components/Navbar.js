import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #282c34;
  color: white;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

const CartIcon = styled(Link)`
  color: white;
  font-size: 1.5rem;
  position: relative;
  text-decoration: none;
`;

const CartCount = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: #61dafb;
  color: #282c34;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
`;

function Navbar({ cartItems }) {
  return (
    <Nav>
      <Logo>ShopEasy</Logo>
      <CartIcon to="/cart">
        <FaShoppingCart />
        <CartCount>{cartItems.reduce((total, item) => total + item.quantity, 0)}</CartCount>
      </CartIcon>
    </Nav>
  );
}

export default Navbar;