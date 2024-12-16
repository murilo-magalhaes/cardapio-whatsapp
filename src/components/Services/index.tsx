export default function Services() {
  return (
    <section className="services">
      <div className="background-services"></div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <span className="hint-title">
              <b>Serviços</b>
            </span>
            <h1 className="title">
              <b>Como são nossos serviços?</b>
            </h1>
          </div>
          <div className="col-4 mb-5">
            <div className="card-icon text-center">
              <img src="/assets/images/icone-pedido.svg" width="150" />
            </div>
            <div className="card-text text-center mt-3">
              <p>
                <b>Fácil de pedir</b>
              </p>
              <span>
                Você só precisa de alguns passos para pedir sua comida.
              </span>
            </div>
          </div>
          <div className="col-4">
            <div className="card-icon text-center">
              <img src="/assets/images/icone-delivery.svg" width="250" />
            </div>
            <div className="card-text text-center mt-3">
              <p>
                <b>Entrega rápida</b>
              </p>
              <span>Nossa entrega é sempre pontual, rápida e segura.</span>
            </div>
          </div>
          <div className="col-4">
            <div className="card-icon text-center">
              <img src="/assets/images/icone-qualidade.svg" width="250" />
            </div>
            <div className="card-text text-center mt-3">
              <p>
                <b>Melhor qualidade</b>
              </p>
              <span>
                Não só a rapidez na entrega, a qualidade também é o nosso forte.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
