'use client';

import dishesMenu, { IMenu } from '@/mock/menu';
import formatCurrency from '@/utils/number/formatCurrency';
import { useState } from 'react';
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';
import { useShoppingCart } from '@/hooks/useShoppingCart';
import useToastContext from '@/hooks/toast';

export default function Dishes() {
  // refs & toast
  const toast = useToastContext();

  // states
  const { addItem } = useShoppingCart();

  const [menu, setMenu] = useState<IMenu>(dishesMenu);

  const [tmpCart, setTmpCart] = useState<{ id: string; qnt: number }[]>([]);

  const [category, setCategory] = useState<number>(0);

  const [first, setFirst] = useState<number>(0);
  const [rows, setRows] = useState<number>(8);

  // effects

  // functions
  const onPageChange = (event: PaginatorPageChangeEvent) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  const handleIncreaseQnt = (id: string) => {
    const hasDish = tmpCart.find(d => d.id === id);

    if (hasDish) {
      const _tmpCart = tmpCart.filter(d => d.id !== id);
      hasDish.qnt += 1;
      _tmpCart.push(hasDish);
      setTmpCart(_tmpCart);
    } else {
      setTmpCart([...tmpCart, { id, qnt: 1 }]);
    }
  };

  const handleDecreaseQnt = (id: string) => {
    const hasDish = tmpCart.find(d => d.id === id);

    if (hasDish && hasDish.qnt > 0) {
      const _tmpCart = tmpCart.filter(d => d.id !== id);
      hasDish.qnt -= 1;
      _tmpCart.push(hasDish);
      setTmpCart(_tmpCart);
    }
  };

  const handleAddItem = (categotyId: string, dishId: string) => {
    const hasDish = tmpCart.find(d => d.id === dishId);

    if (!hasDish || hasDish.qnt === 0) {
      toast('warn', 'Alerta', 'Por favor, informe a quantidade que deseja.');
      return;
    }

    if (hasDish) {
      const _tmpCart = tmpCart.filter(d => d.id !== dishId);
      setTmpCart(_tmpCart);

      addItem(categotyId, dishId, hasDish.qnt);
      toast('success', 'Sucesso', 'Item adicionado ao carrinho com sucesso!');
    }
  };

  // templates

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
                  setFirst(0);
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
            <div className="row">
              {dishesMenu.categories[category].dishes.map((d, i) => {
                if (i >= first && i < first + rows)
                  return (
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
                          <span
                            onClick={() => handleDecreaseQnt(d.id)}
                            className="btn-minus"
                          >
                            <i className="fas fa-minus"></i>
                          </span>
                          <span className="add-qnt-items">
                            {tmpCart.find(dish => dish.id === d.id)?.qnt || 0}
                          </span>
                          <span
                            onClick={() => handleIncreaseQnt(d.id)}
                            className="btn-plus"
                          >
                            <i className="fas fa-plus"></i>
                          </span>
                          <span
                            onClick={e => {
                              handleAddItem(d.category_id, d.id);
                            }}
                            className="btn btn-add"
                          >
                            <i className="fa fa-shopping-bag"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  );
              })}
            </div>
          </div>

          <div className="col-12 text-center">
            <p>
              Exibindo de {first + 1} a{' '}
              {Math.min(first + rows, menu.categories[category].dishes.length)}{' '}
              de um total de {menu.categories[category].dishes.length}{' '}
              {menu.categories[category].title}
            </p>
          </div>

          <div className="col-12 text-center">
            <Paginator
              first={first}
              rows={rows}
              rowsPerPageOptions={[8, 16, 24]}
              totalRecords={menu.categories[category].dishes.length}
              onPageChange={onPageChange}
              style={{ background: 'transparent' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
