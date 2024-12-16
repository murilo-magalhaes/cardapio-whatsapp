export default function Testimonials() {
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
              <div className="testimonial" id="testimonial-1">
                <div className="container-data-testimonial">
                  <div className="img-testimonial"></div>
                  <div>
                    <p className="name-testimonial">
                      <b>Diego Pereira</b>
                    </p>
                    <p className="rank-testimonial">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i> <span>4.5</span>
                    </p>
                  </div>
                </div>
                <p className="text-testimonial">
                  <i className="fas fa-quote-left"></i>
                  <span>
                    Muito bom, recomendo demais! Comida muito bem feita pelo
                    chefe, atendimento dentro dos parâmetros e boa comunicação
                    com o cliente.
                  </span>
                  <i className="fas fa-quote-right"></i>
                </p>
              </div>

              <div className="testimonial hidden" id="testimonial-2">
                <div className="container-data-testimonial">
                  <div className="img-testimonial"></div>
                  <div>
                    <p className="name-testimonial">
                      <b>Laila Milhomens</b>
                    </p>
                    <p className="rank-testimonial">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i> <span>5.0</span>
                    </p>
                  </div>
                </div>
                <p className="text-testimonial">
                  <i className="fas fa-quote-left"></i>
                  <span>
                    Um janta perfeito do começo ao fim. Comida, experiência,
                    serviço... foi tão maravilhoso que fomos dois dias seguidos
                    - fato inédito para mim em uma viagem.
                  </span>
                  <i className="fas fa-quote-right"></i>
                </p>
              </div>

              <div className="testimonial hidden" id="testimonial-3">
                <div className="container-data-testimonial">
                  <div className="img-testimonial"></div>
                  <div>
                    <p className="name-testimonial">
                      <b>Murilo Magalhães</b>
                    </p>
                    <p className="rank-testimonial">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i> <span>4.0</span>
                    </p>
                  </div>
                </div>
                <p className="text-testimonial">
                  <i className="fas fa-quote-left"></i>
                  <span>
                    A comida estava excelente e o serviço gentil nos
                    surpreendeu! Dica: reserve umas 3 horas para ter uma
                    experiência incr´ivel.
                  </span>
                  <i className="fas fa-quote-right"></i>
                </p>
              </div>
            </div>

            <a className="btn btn-sm btn-white btn-social mr-3 active">1</a>
            <a className="btn btn-sm btn-white btn-social mr-3">2</a>
            <a className="btn btn-sm btn-white btn-social">3</a>
          </div>
        </div>
      </div>
    </section>
  );
}
