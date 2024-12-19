'use client';

import { useShoppingCart } from '@/hooks/useShoppingCart';
import ShoppingCart from '../ShoppingCart';
import { useEffect, useState } from 'react';

export default function FLoatButtonCart() {
  const { cart } = useShoppingCart();
  const [cartVisible, setCartVisible] = useState<boolean>(false);

  const [qntItems, setQntItems] = useState<number>(0);

  useEffect(() => {
    const qnt = cart.reduce((a, i) => (a += i.qnt), 0);
    setQntItems(qnt);
  }, [cart]);

  if (cart.length > 0)
    return (
      <>
        <a onClick={() => setCartVisible(true)} className="btn-cart">
          <div className="badge-total-cart">{qntItems}</div>
          <i className="fa fa-shopping-bag"></i>
        </a>
        <ShoppingCart
          isOpen={cartVisible}
          onRequestClose={() => setCartVisible(false)}
        />
      </>
    );
}
