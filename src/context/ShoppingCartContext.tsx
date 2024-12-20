'use client';

import additionalsMock, { IAdditional } from '@/mock/additionals';
import dishesMenu, { IDish, IMenu } from '@/mock/menu';
import { createContext, ReactNode, useEffect, useState } from 'react';

interface IItemAdditional extends IAdditional {
  qnt: number;
  total: number;
}

interface ICartItem extends IDish {
  qnt: number;
  total: number;
  additionals: IItemAdditional[];
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
  addAdditional: (dishId: string, addId: string, qnt: number) => void;
  remAdditional: (dishId: string, addId: string, qnt: number) => void;
  clearCart: () => void;
}

export const ShoppingCartContext = createContext<IContextData | undefined>(
  undefined,
);

export function ShoppingCartProvider({ children }: { children: ReactNode }) {
  const [menu, setMenu] = useState<IMenu>({ categories: [] });
  const [additionals, setAdditionals] = useState<IAdditional[]>([]);

  const [cart, setCart] = useState<ICartItem[]>([]);

  const [summary, setSummary] = useState<ICartSummary>(emptySummary);

  useEffect(() => {
    loadMenu();
    loadAddtionals();
  }, []);

  useEffect(() => {
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

  const loadAddtionals = async () => {
    // Mudar para busca de adicionais reais
    setAdditionals(additionalsMock);
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
          setCart([
            ...cart,
            { ...dish, qnt, total: dish.price * qnt, additionals: [] },
          ]);
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

  const addAdditional = (dishId: string, addId: string, qnt: number) => {
    const dish = cart.find(d => d.id === dishId);

    if (dish) {
      const _cart = cart.filter(d => d.id !== dishId);

      const hasAdditional = dish.additionals.find(a => a.id === addId);

      if (hasAdditional) {
        dish.additionals = dish.additionals.filter(a => a.id !== addId);
        dish.additionals.push({
          ...hasAdditional,
          qnt: hasAdditional.qnt + qnt,
          total: hasAdditional.price * (hasAdditional.qnt + qnt),
        });
        _cart.push(dish);
      } else {
        const additional = additionals.find(a => a.id === addId);

        if (additional) {
          dish.additionals.push({
            ...additional,
            qnt,
            total: additional.price * qnt,
          });

          _cart.push(dish);
        }
      }
      setCart(_cart);
    }
  };
  const remAdditional = (dishId: string, addId: string, qnt: number) => {};

  return (
    <ShoppingCartContext.Provider
      value={{
        cart,
        summary,
        addItem,
        removeItem,
        clearCart,
        addAdditional,
        remAdditional,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
