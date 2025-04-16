import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaTrash, FaArrowLeft } from 'react-icons/fa';

const Container = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const BackButton = styled(Link)`
  color: #282c34;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #e0e0e0;
`;

const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ItemImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
`;

const ItemDetails = styled.div``;

const ItemName = styled.h4`
  margin: 0;
`;

const ItemPrice = styled.p`
  margin: 0.25rem 0;
  color: #2e7d32;
  font-weight: bold;
`;

const ItemActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const QuantityButton = styled.button`
  background: none;
  border: 1px solid #e0e0e0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #d32f2f;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Total = styled.div`
  margin-top: 2rem;
  text-align: right;
  font-size: 1.2rem;
  font-weight: bold;
`;

const CheckoutButton = styled.button`
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: #282c34;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  width: 100%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #61dafb;
    color: #282c34;
  }
`;

function Cart({ cartItems, setCartItems }) {
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      removeItem(id);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    ).toFixed(2);
  };

  return (
    <Container>
      <BackButton to="/">
        <FaArrowLeft /> Continue Shopping
      </BackButton>
      <Title>Your Shopping Cart</Title>
      
      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/">Start shopping!</Link></p>
      ) : (
        <>
          {cartItems.map(item => (
            <CartItem key={item.id}>
              <ItemInfo>
                <ItemImage src={item.image} alt={item.name} />
                <ItemDetails>
                  <ItemName>{item.name}</ItemName>
                  <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
                </ItemDetails>
              </ItemInfo>
              <ItemActions>
                <QuantityButton onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                  -
                </QuantityButton>
                <span>{item.quantity}</span>
                <QuantityButton onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                  +
                </QuantityButton>
                <RemoveButton onClick={() => removeItem(item.id)}>
                  <FaTrash /> Remove
                </RemoveButton>
              </ItemActions>
            </CartItem>
          ))}
          
          <Total>Total: ${calculateTotal()}</Total>
          <CheckoutButton>Proceed to Checkout</CheckoutButton>
        </>
      )}
    </Container>
  );
}

export default Cart;