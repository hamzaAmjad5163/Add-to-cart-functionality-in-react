import styled from 'styled-components';
import { FaStar, FaRegStar, FaShoppingCart } from 'react-icons/fa';

const Card = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 1rem;
`;

const Title = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
`;

const Price = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  color: #2e7d32;
  margin: 0.5rem 0;
`;

const Description = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin: 0.5rem 0 1rem 0;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: #ffc107;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.5rem;
  background-color: #282c34;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #61dafb;
    color: #282c34;
  }
`;

function ProductCard({ product, onAddToCart }) {
  const renderRating = () => {
    const stars = [];
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} />);
    }

    if (hasHalfStar) {
      stars.push(<FaStar key="half" style={{ opacity: 0.5 }} />);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} />);
    }

    return stars;
  };

  return (
    <Card>
      <Image src={product.image} alt={product.name} />
      <Content>
        <Title>{product.name}</Title>
        <Price>${product.price.toFixed(2)}</Price>
        <Rating>{renderRating()}</Rating>
        <Description>{product.description}</Description>
        <Button onClick={() => onAddToCart(product)}>
          <FaShoppingCart /> Add to Cart
        </Button>
      </Content>
    </Card>
  );
}

export default ProductCard;