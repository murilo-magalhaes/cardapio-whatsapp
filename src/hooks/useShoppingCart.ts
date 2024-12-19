'use client';

import { ShoppingCartContext } from '@/context/ShoppingCartContext';
import { useContext } from 'react';

export function useShoppingCart() {
  const context = useContext(ShoppingCartContext);

  if (!context)
    throw new Error('Falha ao acessar hook do context do carrinho.');

  return context;
}
