import { useState } from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';
import products from '../products';

const Container = styled.div`
  padding: 2rem;
`;

const Title = styled.h2`
  margin-bottom: 2rem;
  text-align: center;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

function ProductPage({ cartItems, setCartItems }) {
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  return (
    <Container>
      <Title>Our Products</Title>
      <ProductsGrid>
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={addToCart} 
          />
        ))}
      </ProductsGrid>
    </Container>
  );
}

export default ProductPage;