'use client';

import testimonialsMock, { ITestimonial } from '@/mock/testimonials';
import { useState } from 'react';

export default function Testimonials() {
  const [testimonials, setTestimonials] =
    useState<ITestimonial[]>(testimonialsMock);

  const [pos, setPos] = useState<number>(1);

  return (
    <section className="testimonials" id="testimonials">
      <div className="background-testimonials"></div>
      <div className="container">
        <div className="row">
          <div className="col-5 text-center">
            <div className="card-testimonials"></div>
            <div className="d-flex img-testimonials">
              <img src="/assets/images/pizzas.png" alt="Pizzas" />
            </div>
          </div>
          <div className="col-7">
            <span className="hint-title">
              <b>Depoimentos</b>
            </span>
            <h1 className="title">
              <b>O que dizem sobre nós?</b>
            </h1>
            <div className="mb-5">
              {testimonials.map((t, i) => {
                if (i === pos - 1)
                  return (
                    <div key={i} className="testimonial">
                      <div className="container-data-testimonial">
                        <div
                          className="img-testimonial"
                          style={{
                            backgroundImage: `url(${t.img_url})`,
                          }}
                        ></div>
                        <div>
                          <p className="name-testimonial">
                            <b>{t.name}</b>
                          </p>
                          <p className="rank-testimonial">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>{' '}
                            <span>{t.rank}</span>
                          </p>
                        </div>
                      </div>
                      <p className="text-testimonial">
                        <i className="fas fa-quote-left"></i>
                        <span>{t.message}</span>
                        <i className="fas fa-quote-right"></i>
                      </p>
                    </div>
                  );
              })}
            </div>

            <a
              onClick={() => setPos(1)}
              className={`btn btn-sm btn-white btn-social mr-3 ${
                pos === 1 ? 'active' : ''
              }`}
            >
              1
            </a>
            <a
              onClick={() => setPos(2)}
              className={`btn btn-sm btn-white btn-social mr-3 ${
                pos === 2 ? 'active' : ''
              }`}
            >
              2
            </a>
            <a
              onClick={() => setPos(3)}
              className={`btn btn-sm btn-white btn-social ${
                pos === 3 ? 'active' : ''
              }`}
            >
              3
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
