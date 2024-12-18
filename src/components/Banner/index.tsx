/* eslint-disable react/no-unescaped-entities */
export default function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="d-flex text-banner">
              <h1>
                <b>
                  Escolha sua comida <b className="color-primary">favorita.</b>
                </b>
              </h1>
              <p>
                Aproveite nosso cardápio! Escolha o que desejar e receba em sua
                casa de forma rápida e segura.
              </p>
              <div>
                <a href="#dishes" className="btn btn-yellow mt-4 mr-3">
                  Ver cardápio
                </a>
                <a
                  href="tel:+5562985099000"
                  target="_blank"
                  className="btn btn-white btn-icon-left mt-4"
                  rel="noreferrer"
                >
                  <span className="icon-left p-2 rounded mr-2">
                    <i className="fa fa-phone"></i>
                  </span>
                  <span>(62) 98509-9000</span>
                </a>
              </div>
            </div>
            <a
              href="https://instagram.com/webger_"
              target="_blank"
              className="btn btn-sm btn-white btn-social mt-4 mr-3"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/webger.erp"
              target="_blank"
              className="btn btn-sm btn-white btn-social mt-4 mr-3"
              rel="noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://wa.me/5562985099000"
              target="_blank"
              className="btn btn-sm btn-white btn-social mt-4"
              rel="noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
          <div className="col-6">
            <div className="card-banner"></div>
            <div className="d-flex img-banner">
              <img src="/assets/images/burguer.png" alt="Hambúrguer" />
            </div>

            <div className="card card-case">
              "Entrega rápida e funcionários simpáticos.
              <br></br>A comida chegou quente e<br></br>muito saborosa!"
              <span className="card-case-name">
                <b>Thiago Lopes</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
