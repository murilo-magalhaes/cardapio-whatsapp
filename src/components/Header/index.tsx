'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import ShoppingCart from '@/components/ShoppingCart';
import { useShoppingCart } from '@/hooks/useShoppingCart';

export default function Header() {
  const { cart } = useShoppingCart();

  const [qntItems, setQntItems] = useState<number>(0);

  useEffect(() => {
    const qnt = cart.reduce((a, i) => (a += i.qnt), 0);
    setQntItems(qnt);
  }, [cart]);

  const [shoppingCartVisible, setShoppingCartVisible] =
    useState<boolean>(false);

  const handleCloseShoppingCart = () => {
    setShoppingCartVisible(false);
  };

  return (
    <section className="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg px-0">
          <a href="#" className="navbar-brand">
            <Image
              className="img-logo"
              alt="Logo"
              src={'/assets/images/logo.png'}
              width={160}
              height={160}
            />
          </a>

          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon">
              <i className="fas fa-bars"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="#reservations">
                  <b>Reserva</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  <b>Serviços</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#dishes">
                  <b>Cardápio</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonials">
                  <b>Depoimentos</b>
                </a>
              </li>
            </ul>
            <a
              onClick={() => setShoppingCartVisible(prevState => !prevState)}
              className="btn btn-white btn-icon"
            >
              <span>Meu carrinho</span>
              <span
                className="icon ml-1 rounded"
                style={{ position: 'relative' }}
              >
                {qntItems > 0 && (
                  <div className="badge-total-cart">{qntItems}</div>
                )}
                <i className="fa fa-shopping-bag"></i>
              </span>
            </a>
          </div>
        </nav>
      </div>

      <ShoppingCart
        isOpen={shoppingCartVisible}
        onRequestClose={handleCloseShoppingCart}
      />
    </section>
  );
}
