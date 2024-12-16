'use client';

import Image from 'next/image';

export default function Header() {
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
                <a className="nav-link" href="#reservas">
                  <b>Reserva</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#servicos">
                  <b>Serviços</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#cardapio">
                  <b>Cardápio</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#depoimentos">
                  <b>Depoimentos</b>
                </a>
              </li>
            </ul>
            <a className="btn btn-white btn-icon">
              <span>Meu carrinho</span>
              <span className="icon ml-1 rounded">
                <i className="fa fa-shopping-bag"></i>
              </span>
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
}
