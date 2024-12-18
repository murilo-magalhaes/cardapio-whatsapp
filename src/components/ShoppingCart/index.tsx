'use client';
import ufsOpts from '@/dtos/ufsOpts';
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { InputMask } from 'primereact/inputmask';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';

interface IProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export default function ShoppingCart({ isOpen, onRequestClose }: IProps) {
  const [step, setStep] = useState<number>(1);

  return (
    <Dialog
      className="w-11 h-full"
      onHide={onRequestClose}
      visible={isOpen}
      closable={false}
    >
      <div className="modal-full" id="modalShoppingCart">
        <div className="m-header">
          <div className="container">
            <a
              onClick={onRequestClose}
              className="btn btn-white btn-sm float-end"
            >
              Fechar
            </a>
            <div className="steps">
              <div className={`step ${step === 1 ? 'active' : ''}`}>1</div>
              <div className={`step ${step === 2 ? 'active' : ''}`}>2</div>
              <div className={`step ${step === 3 ? 'active' : ''}`}>3</div>
            </div>

            <p className="title-cart mt-4">
              <b>Seu carrinho:</b>
            </p>
          </div>
        </div>
        <div className="m-body">
          <div className="container">
            {step === 1 && (
              <div className="row mx-0">
                <div className="col-12 item-cart">
                  <div className="img-product">
                    <img src="/assets/images/cardapio/burguers/goldbelly-burger-blend-1-lb.13a21b66edf7173a59c75c3a6d2f981b.jpg" />
                  </div>

                  <div className="data-product">
                    <p className="title-product">
                      <b>Nome do produto</b>
                    </p>
                    <p className="price-product">
                      <b>R$149,90</b>
                    </p>
                  </div>

                  <div className="add-cart">
                    <span className="btn-minus">
                      <i className="fas fa-minus"></i>
                    </span>
                    <span className="add-qnt-items">0</span>
                    <span className="btn-plus">
                      <i className="fas fa-plus"></i>
                    </span>
                    <span className="btn btn-remove">
                      <i className="fa fa-times"></i>
                    </span>
                  </div>
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="row mx-0">
                <div className="col-4">
                  <div className="form-group container-cep">
                    <label htmlFor="cep">CEP:</label>
                    <InputMask
                      name="cep"
                      mask="99.999-999"
                      className="form-control"
                    />
                    <a className="btn btn-yellow btn-sm">
                      <i className="fa fa-search"></i>
                    </a>
                  </div>
                </div>

                <div className="col-8"></div>

                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="street">Endereço:</label>
                    <InputText name="street" className="form-control" />
                  </div>
                </div>

                <div className="col-4">
                  <div className="form-group">
                    <label htmlFor="neighborhood">Bairro:</label>
                    <InputText name="neighborhood" className="form-control" />
                  </div>
                </div>

                <div className="col-2">
                  <div className="form-group">
                    <label htmlFor="number">Número:</label>
                    <InputText name="number" className="form-control" />
                  </div>
                </div>

                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="city">Cidade:</label>
                    <InputText name="city" className="form-control" />
                  </div>
                </div>

                <div className="col-4">
                  <div className="form-group">
                    <label htmlFor="complement">Complemento:</label>
                    <InputText name="complement" className="form-control" />
                  </div>
                </div>

                <div className="col-2">
                  <div className="form-group">
                    <label htmlFor="uf">UF:</label>
                    <Dropdown
                      name="uf"
                      options={ufsOpts}
                      className="form-control flex py-1"
                    />
                  </div>
                </div>
              </div>
            )}
            {step === 3 && <div className="row mx-0"></div>}
          </div>
        </div>
        <div className="m-footer">
          <div className="container">
            <div className="container-total text-right mb-4">
              <p className="mb-0">
                <span>Subtotal: </span>
                <span>R$ 95,00</span>
              </p>

              <p className="mb-0 text-delivery">
                <span>
                  <i className="fas fa-motorcycle"></i> Entrega
                </span>
                <span> + R$ 5,00</span>
              </p>

              <p className="mb-0 text-total">
                <span>
                  <b>Total: </b>
                </span>
                <span className="value-total">
                  <b>R$ 100,00</b>
                </span>
              </p>
            </div>

            {step === 1 && (
              <a
                onClick={() => setStep(prevState => prevState + 1)}
                className="btn btn-yellow float-end"
              >
                Continuar
              </a>
            )}
            {step === 2 && (
              <a
                onClick={() => setStep(prevState => prevState + 1)}
                className="btn btn-yellow float-end"
              >
                Revisar pedido
              </a>
            )}
            {step === 3 && (
              <a className="btn btn-yellow float-end">Enviar pedido</a>
            )}

            {step > 1 && (
              <a
                onClick={() => setStep(prevState => prevState - 1)}
                className="btn btn-white float-end mr-3"
              >
                Voltar
              </a>
            )}
          </div>
        </div>
      </div>
    </Dialog>
  );
}
