'use client';

import dishesMenu, { IDish, IMenu } from '@/mock/dados';
import { createContext, ReactNode, useEffect, useState } from 'react';

interface ICartItem extends IDish {
  qnt: number;
  total: number;
}

interface IContextData {
  cart: ICartItem[];
  addItem: (categotyId: string, dishId: string, qnt: number) => void;
  removeItem: (categotyId: string, dishId: string, qnt: number) => void;
  clearCart: () => void;
}

export const ShoppingCartContext = createContext<IContextData | undefined>(
  undefined,
);

export function ShoppingCartProvider({ children }: { children: ReactNode }) {
  const [menu, setMenu] = useState<IMenu>({ categories: [] });

  const [cart, setCart] = useState<ICartItem[]>([]);

  useEffect(() => {
    loadMenu();
  }, []);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const loadMenu = async () => {
    // Mudar para busca de pratos reais
    setMenu(dishesMenu);
  };

  const addItem = (categotyId: string, dishId: string, qnt: number) => {
    const hasDish = cart.find(d => d.id === dishId);

    if (hasDish) {
      const _cart = cart.filter(d => d.id !== dishId);
      hasDish.qnt += qnt;
      hasDish.total = hasDish.price * hasDish.qnt;
      _cart.push(hasDish);
      setCart(_cart);
    } else {
      const category = menu.categories.find(c => c.id === categotyId);

      if (category) {
        const dish = category.dishes.find(d => d.id === dishId);

        if (dish) {
          setCart([...cart, { ...dish, qnt, total: dish.price * qnt }]);
        }
      }
    }
  };
  const removeItem = (categotyId: string, dishId: string, qnt: number) => {};
  const clearCart = () => {};

  return (
    <ShoppingCartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
