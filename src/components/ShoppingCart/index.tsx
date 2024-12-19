'use client';
import { ICity } from '@/dtos/ICityDTO';
import ufsOpts from '@/dtos/ufsOpts';
import useToastContext from '@/hooks/toast';
import { useShoppingCart } from '@/hooks/useShoppingCart';
import api, { apiCep } from '@/services/api';
import messageRequestError from '@/utils/error/messageRequestError';
import formatCurrency from '@/utils/number/formatCurrency';
import { AxiosError, AxiosResponse } from 'axios';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputMask } from 'primereact/inputmask';
import { InputText } from 'primereact/inputtext';
import { useEffect, useState } from 'react';
import Progress from '../ProgressBar';
import { InputDropDown } from '../Inputs/InputDropDown';
import { Form } from '@unform/web';
import justNumbers from '@/utils/string/justNumbers';
import stringIsNotNull from '@/utils/string/stringIsNotNull';

interface IProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

interface IAddress {
  cep: string;
  street: string;
  neighborhood: string;
  number: string;
  city_id: string;
  city?: ICity;
  complement: string;
  uf: string;
}

const emptyAddress: IAddress = {
  cep: '',
  street: '',
  neighborhood: '',
  number: 'S/N',
  complement: '',
  uf: 'GO',
  city_id: '',
};

export default function ShoppingCart({ isOpen, onRequestClose }: IProps) {
  // refs & toast
  const toast = useToastContext();

  // states
  const [isLoad, setIsLoad] = useState<boolean>(false);

  const { cart, summary, addItem, removeItem, clearCart } = useShoppingCart();

  const [step, setStep] = useState<number>(1);

  const [address, setAddress] = useState<IAddress>(emptyAddress);

  const [cities, setCities] = useState<ICity[]>([]);
  console.log({ cities });

  // effects
  useEffect(() => {
    loadCities();
  }, []);

  useEffect(() => {
    if (justNumbers(address.cep).length === 8) loadAddress(address.cep);
  }, [address.cep]);

  useEffect(() => {
    if (isOpen && step !== 1) {
      setStep(1); // Apenas se necessário para evitar renderizações redundantes.
    }
  }, [isOpen]);

  // functions
  const loadCities = async () => {
    setIsLoad(true);
    await api
      .post(`/cities/list`, {
        pagination: { page: 1, perPage: 10000, status: ['A'] },
      })
      .then((res: AxiosResponse) => {
        if (res.data) {
          setCities(
            res.data.map((i: any) => {
              return {
                id: i.id,
                ibge: i.ibge,
                siafi: i.siafi,
                uf: i.uf.sigla,

                label: i.name,
                value: i.id,
              };
            }),
          );
        }
      })
      .catch((e: AxiosError) => {
        toast('warn', 'Alerta', messageRequestError(e));
      })
      .finally(() => {
        setIsLoad(false);
      });
  };

  const loadAddress = async (cep: string) => {
    cep = justNumbers(cep);

    if (!cep || cep.length !== 8) {
      toast('warn', 'Alerta', 'Informe um CEP válido!');
      return;
    }

    setIsLoad(true);

    await apiCep
      .get(`/${cep}/json/`)
      .then((res: AxiosResponse) => {
        if (res.data) {
          const city = cities.find(i => i.ibge === res.data.ibge);

          setAddress({
            ...address,
            cep,
            street: stringIsNotNull(res.data.logradouro)
              ? res.data.logradouro
              : address.street,
            complement: stringIsNotNull(res.data.complemento)
              ? res.data.complemento
              : address.complement,
            neighborhood: stringIsNotNull(res.data.bairro)
              ? res.data.bairro
              : address.neighborhood,
            city_id: city ? city.id : address.city_id,
            city: city ? city : address.city,
          });

          toast(
            'info',
            'Endereço',
            'Dados de endereço encontrados com sucesso!',
          );
        }
      })
      .catch((e: AxiosError) => {
        toast('warn', 'Alerta', messageRequestError(e));
      })
      .finally(() => {
        setIsLoad(false);
      });
  };

  // templates

  return (
    <Dialog
      className="w-11 h-full"
      onHide={onRequestClose}
      draggable={false}
      visible={isOpen}
      closable={false}
      ref={null}
    >
      <div className="modal-full">
        <div className="m-header">
          <div className="container">
            <a
              onClick={onRequestClose}
              className="btn btn-white btn-sm float-end"
            >
              Fechar
            </a>
            <div className="steps">
              <div className={`step ${step >= 1 ? 'active' : ''}`}>1</div>
              <div className={`step ${step >= 2 ? 'active' : ''}`}>2</div>
              <div className={`step ${step === 3 ? 'active' : ''}`}>3</div>
            </div>

            <Progress isLoad={isLoad} className="mt-6" />

            <p className="title-cart mt-4">
              <b>
                {step === 1
                  ? 'Seu carrinho:'
                  : step === 2
                  ? 'Endereço de entrega:'
                  : 'Resumo do pedido:'}
              </b>
            </p>
          </div>
        </div>
        <div className="m-body">
          {cart.length === 0 && (
            <div
              className="flex h-full justify-content-center align-items-center"
              style={{ flexDirection: 'column' }}
            >
              <p className="text-center">
                <b>Seu carrinho está vazio...</b>
              </p>
              <a
                href="#dishes"
                onClick={onRequestClose}
                className="btn btn-yellow"
              >
                Voltar ao cardápio
              </a>
            </div>
          )}
          <div className="container">
            {step === 1 && (
              <div className="row mx-0">
                {cart.map((d, i) => (
                  <div key={i} className="col-12 item-cart">
                    <div className="img-product">
                      <img src={d.img_url} />
                    </div>

                    <div className="data-product">
                      <p className="title-product">
                        <b>{d.title}</b>
                      </p>
                      <p className="price-product">
                        <b>{formatCurrency(d.total)}</b>
                      </p>
                    </div>

                    <div className="add-cart">
                      <span
                        onClick={() => {
                          removeItem(d.id, 1);
                        }}
                        className="btn-minus"
                      >
                        <i className="fas fa-minus"></i>
                      </span>
                      <span className="add-qnt-items">{d.qnt}</span>
                      <span
                        onClick={() => addItem(d.category_id, d.id, 1)}
                        className="btn-plus"
                      >
                        <i className="fas fa-plus"></i>
                      </span>
                      <span
                        onClick={() => {
                          removeItem(d.id, d.qnt);
                        }}
                        className="btn btn-remove"
                      >
                        <i className="fa fa-times"></i>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {step === 2 && (
              <Form
                onSubmit={() => {}}
                ref={null}
                className="row mx-0"
                placeholder={''}
                onPointerEnterCapture={null}
                onPointerLeaveCapture={null}
              >
                <div className="col-4">
                  <div className="form-group container-cep">
                    <label htmlFor="cep">CEP:</label>
                    <InputMask
                      name="cep"
                      mask="99.999-999"
                      className="form-control"
                      placeholder="Ex.: 00.000-000"
                      value={address.cep}
                      onChange={e => {
                        if (e.target.value && e.target.value !== null)
                          setAddress({ ...address, cep: e.target.value });
                      }}
                    />
                    <a className="btn btn-yellow btn-sm">
                      <i className="fa fa-search"></i>
                    </a>
                  </div>
                </div>

                <div className="col-8"></div>

                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="street">Rua/Avenida:</label>
                    <InputText
                      name="street"
                      className="form-control"
                      placeholder="Ex.: Rua da Amizade"
                      value={address.street}
                      onChange={e =>
                        setAddress({ ...address, street: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="col-4">
                  <div className="form-group">
                    <label htmlFor="neighborhood">Bairro:</label>
                    <InputText
                      name="neighborhood"
                      className="form-control"
                      placeholder="Ex.: Bairro da Saudade"
                      value={address.neighborhood}
                      onChange={e =>
                        setAddress({ ...address, neighborhood: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="col-2">
                  <div className="form-group">
                    <label htmlFor="number">Número:</label>
                    <InputText
                      name="number"
                      className="form-control"
                      placeholder="Ex.: 000"
                      value={address.number}
                      onChange={e =>
                        setAddress({ ...address, number: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="col-5">
                  <div className="form-group">
                    <label htmlFor="city">Cidade:</label>
                    <InputDropDown
                      name="city"
                      options={
                        cities && cities.length > 0
                          ? cities.filter(c => c.uf === address.city?.uf)
                          : []
                      }
                      className="form-control flex py-1 px-0"
                      placeholder="Selecione..."
                      value={address.city_id}
                      onChange={e =>
                        setAddress({ ...address, city_id: e.value })
                      }
                    />
                  </div>
                </div>

                <div className="col-4">
                  <div className="form-group">
                    <label htmlFor="complement">Complemento:</label>
                    <InputText
                      name="complement"
                      className="form-control"
                      placeholder="Ex.: Qd 00 Lt 00, Apto 000"
                      value={address.complement}
                      onChange={e =>
                        setAddress({ ...address, complement: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="col-3">
                  <div className="form-group">
                    <label htmlFor="uf">UF:</label>
                    <InputDropDown
                      name="uf"
                      options={ufsOpts}
                      className="form-control flex py-1 px-0"
                      placeholder="Selecione..."
                      value={address.uf}
                      onChange={e => {
                        setAddress({ ...address, uf: e.value });
                      }}
                    />
                  </div>
                </div>
              </Form>
            )}
            {step === 3 && (
              <div className="row mx-0">
                <div className="col-12">
                  <p className="title-cart mt-4">
                    <b>Itens do pedido:</b>
                  </p>
                </div>

                <div className="col-12">
                  <div className="row">
                    <div className="col-12 item-cart resume">
                      <div className="img-product-resume">
                        <img
                          src="/assets/images/cardapio/burguers/goldbelly-burger-blend-1-lb.13a21b66edf7173a59c75c3a6d2f981b.jpg"
                          alt="Produto"
                        />
                      </div>
                      <div className="data-product">
                        <p className="title-product-resume">
                          <b>Nome do produto</b>
                        </p>
                        <p className="price-product-resume">
                          <b>R$ 100,00</b>
                        </p>
                      </div>
                      <p className="qnt-product-resume">
                        x <b>3</b>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <p className="title-cart mt-4">
                    <b>Local da entrega:</b>
                  </p>
                </div>

                <div className="col-12 item-cart resume">
                  <div className="img-map">
                    <i className="fas fa-map-marked-alt"></i>
                  </div>
                  <div className="data-product">
                    <p className="text-address">
                      <b>Rua teste, 200, bairro teste</b>
                    </p>
                    <p className="city-address">Cidade-GO / 75400-000</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="m-footer">
          <div className="container">
            <div className="container-total text-right mb-4">
              <p className="mb-0">
                <span>Subtotal: </span>
                <span>{formatCurrency(summary.subTotal)}</span>
              </p>

              <p className="mb-0 text-delivery">
                <span>
                  <i className="fas fa-motorcycle"></i> Entrega
                </span>
                <span> + {formatCurrency(summary.delivery)}</span>
              </p>

              <p className="mb-0 text-total">
                <span>
                  <b>Total: </b>
                </span>
                <span className="value-total">
                  <b>{formatCurrency(summary.total)}</b>
                </span>
              </p>
            </div>

            <Button
              disabled={cart.length === 0}
              onClick={clearCart}
              className="btn btn-remove p-3 float-start"
              label="Limpar carrinho"
              icon="fa fa-trash"
            />

            {step === 1 && (
              <Button
                disabled={cart.length === 0}
                onClick={() => setStep(prevState => prevState + 1)}
                className="btn btn-yellow float-end"
              >
                Continuar
              </Button>
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
