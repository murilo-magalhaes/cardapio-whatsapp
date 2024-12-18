export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-3 container-logo-footer">
            <img
              className="logo-footer"
              src="/assets/images/logo.png"
              alt="Logo"
            />
          </div>
          <div className="col-6 container-text-footer">
            <p className="mb-0">
              <b>Menu On-line</b> &copy; Todos os direitos reservados.
            </p>
          </div>
          <div className="col-3 container-social-footer">
            <a href="#" className="btn btn-sm btn-white btn-social mr-3">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="btn btn-sm btn-white btn-social mr-3">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="btn btn-sm btn-white btn-social">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
