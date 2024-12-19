'use client';

import dishesMenu, { IDish, IMenu } from '@/mock/dados';
import { createContext, ReactNode, useEffect, useState } from 'react';

interface ICartItem extends IDish {
  qnt: number;
  total: number;
}

interface ICartSummary {
  qntProducts: number;
  qntItems: number;
  delivery: number;
  subTotal: number;
  total: number;
}

const emptySummary: ICartSummary = {
  qntProducts: 0,
  qntItems: 0,
  delivery: 0,
  subTotal: 0,
  total: 0,
};

interface IContextData {
  cart: ICartItem[];
  summary: ICartSummary;
  addItem: (categotyId: string, dishId: string, qnt: number) => void;
  removeItem: (id: string, qnt: number) => void;
  clearCart: () => void;
}

export const ShoppingCartContext = createContext<IContextData | undefined>(
  undefined,
);

export function ShoppingCartProvider({ children }: { children: ReactNode }) {
  const [menu, setMenu] = useState<IMenu>({ categories: [] });

  const [cart, setCart] = useState<ICartItem[]>([]);

  const [summary, setSummary] = useState<ICartSummary>(emptySummary);

  useEffect(() => {
    loadMenu();
  }, []);

  useEffect(() => {
    console.log(cart);
    recalculateSummary();
  }, [cart]);

  const recalculateSummary = () => {
    const delivery = 5;
    setSummary({
      delivery,
      qntItems: cart.reduce((a, i) => (a += i.qnt), 0),
      qntProducts: cart.length,
      subTotal: cart.reduce((a, i) => (a += i.total), 0),
      total: cart.reduce((a, i) => (a += i.total), 0) + delivery,
    });
  };

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
  const removeItem = (id: string, qnt: number) => {
    const hasDish = cart.find(d => d.id === id);

    if (hasDish && hasDish.qnt > 0) {
      const _cart = cart.filter(d => d.id !== id);

      if (qnt < hasDish.qnt) {
        hasDish.qnt -= qnt;
        hasDish.total = hasDish.price * hasDish.qnt;

        _cart.push(hasDish);
      }

      setCart(_cart);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cart,
        summary,
        addItem,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
