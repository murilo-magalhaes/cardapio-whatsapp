'use client';

import dishesMenu, { IMenu } from '@/mock/dados';
import formatCurrency from '@/utils/numbers/formatCurrency';
import { useState } from 'react';

export default function Dishes() {
  const [menu, setMenu] = useState<IMenu>(dishesMenu);

  const [category, setCategory] = useState<number>(0);

  console.log(category);

  return (
    <section className="dishes" id="dishes">
      <div className="background-dishes"></div>

      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <span className="hint-title">
              <b>Cardápio</b>
            </span>
            <h1 className="title">
              <b>Conheça o nosso cardápio</b>
            </h1>
          </div>
          <div className="col-12 container-menu">
            {menu.categories.map((c, i) => (
              <a
                key={i}
                onClick={() => {
                  setCategory(i);
                }}
                className={`btn btn-white btn-sm mr-3 cursor-pointer ${
                  category === i ? 'active' : ''
                }`}
              >
                <i className={c.icon}></i> {'  '}
                {c.title}
              </a>
            ))}
          </div>

          <div className="col-12">
            <div className="row" id="itemsDishes">
              {dishesMenu.categories[category].dishes.map((d, i) => (
                <div key={i} className="col-3 mb-5">
                  <div className="card card-item">
                    <div className="img-product">
                      <img src={d.img_url} alt={d.title} />
                    </div>
                    <p className="title-product text-center mt-4">
                      <b>{d.title}</b>
                    </p>
                    <p className="price-product text-center">
                      <b>{formatCurrency(d.price)}</b>
                    </p>

                    <div className="add-cart">
                      <span className="btn-minus">
                        <i className="fas fa-minus"></i>
                      </span>
                      <span className="add-qnt-items">0</span>
                      <span className="btn-plus">
                        <i className="fas fa-plus"></i>
                      </span>
                      <span className="btn btn-add">
                        <i className="fa fa-shopping-bag"></i>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-12 text-center">
            <a className="btn btn-white btn-sm">Ver mais</a>
          </div>
        </div>
      </div>
    </section>
  );
}
