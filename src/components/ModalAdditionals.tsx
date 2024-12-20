'use client';

import { useShoppingCart } from '@/hooks/useShoppingCart';
import additionalsMock, { IAdditional } from '@/mock/additionals';
import { emptyDish, IDish } from '@/mock/menu';
import { Dialog } from 'primereact/dialog';
import { useEffect, useState } from 'react';

interface IProps {
  isOpen: boolean;
  dishId: string;
  onRequestClose: () => void;
}

export default function ModalAdditionals({
  dishId,
  isOpen,
  onRequestClose,
}: IProps) {
  const [additionals, setAdditionals] =
    useState<IAdditional[]>(additionalsMock);

  const [dish, setDish] = useState<IDish>(emptyDish);

  const { cart, addAdditional, remAdditional } = useShoppingCart();

  useEffect(() => {
    const dish = cart.find(d => d.id === dishId);
    if (dish) setDish(dish);
  }, [dishId]);

  return (
    <Dialog
      header={`Escolha seus adicionais para ${dish.title}`}
      visible={isOpen}
      onHide={onRequestClose}
      className="card w-6 row"
    >
      {additionals.map((a, i) => (
        <div key={i} className="w-full flex justify-content-between">
          <p>{a.title}</p>

          <div className="add-cart">
            <span
              onClick={() => {
                remAdditional(dishId, a.id, 1);
              }}
              className="btn-minus"
            >
              <i className="fas fa-minus"></i>
            </span>
            <span className="add-qnt-items">0</span>
            <span
              onClick={() => addAdditional(dishId, a.id, 1)}
              className="btn-plus"
            >
              <i className="fas fa-plus"></i>
            </span>
            <span
              onClick={() => {
                remAdditional(dishId, a.id, 0);
              }}
              className="btn btn-remove"
            >
              <i className="fa fa-times"></i>
            </span>
          </div>
        </div>
      ))}
    </Dialog>
  );
}
