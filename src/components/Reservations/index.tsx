export default function Reservations() {
  let message = `Olá! Gostaria de fazer uma *reserva*`;

  const urlReservation = `https://wa.me/${
    process.env.NEXT_PUBLIC_PHONE
  }?text=${encodeURI(message)}`;

  return (
    <section className="reservations" id="reservations">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card-secondary">
              <div className="row">
                <div className="col-7">
                  <span className="hint-title">
                    <b>Reserva</b>
                  </span>
                  <h1 className="title">
                    <b>Quer reservar um horário?</b>
                  </h1>
                  <p className="pr-5">
                    Mande uma mensagem clicando no botão abaixo<br></br>
                    Reserve sua data e horário de forma simples e rápida.
                  </p>
                  <a
                    target="_blank"
                    href={urlReservation}
                    className="btn btn-yellow mt-4"
                    rel="noreferrer"
                  >
                    Fazer reserva
                  </a>
                </div>
                <div className="col-5">
                  <div className="card-reservation"></div>
                  <div className="d-flex img-banner">
                    <img
                      src="/assets/images/icone-reserva.svg"
                      alt="Ícone Reserva"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
