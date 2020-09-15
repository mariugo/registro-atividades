import React from "react";

class Hero extends React.Component {
  state = {};
  render() {
    return (
      <div className="jumbotron container-sm" id="top">
        <h1 className="display-4 mt-3">Keep Track!</h1>
        <p className="lead">
          Esta aplicação é para você registrar suas atividades, de acordo com as categorias, que você inclusive pode registrar no menu categorias.
          <p className="lead">
            Espero que assim, você tenha um melhor controle de como gasta o seu tempo!
          </p>
        </p>

        <div
          id="carouselFade"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <div className="carousel-inner container-sm">
            <div className="carousel-item active">
              <img src={require('../img/1.jpg')} className="d-block w-100" alt="Lazer" />
            </div>
            <div className="carousel-item">
              <img src={require('../img/2.jpg')} className="d-block w-100" alt="Praia" />
            </div>
            <div className="carousel-item">
              <img src={require('../img/3.png')} className="d-block w-100" alt="Médico" />
            </div>
            <div className="carousel-item">
              <img src={require('../img/4.jpg')} className="d-block w-100" alt="Trabalho" />
            </div>
            <div className="carousel-item">
              <img src={require('../img/5.jpg')} className="d-block w-100" alt="Musculação" />
            </div>
            <div className="carousel-item">
              <img src={require('../img/6.jpg')} className="d-block w-100" alt="Projeto" />
            </div>
            <div className="carousel-item">
              <img src={require('../img/7.jpg')} className="d-block w-100" alt="Família" />
            </div>
            <div className="carousel-item">
              <img src={require('../img/8.jpg')} className="d-block w-100" alt="Estudos" />
            </div>
            <div className="carousel-item">
              <img src={require('../img/9.jpg')} className="d-block w-100" alt="Beleza" />
            </div>
            <div className="carousel-item">
              <img src={require('../img/10.jpg')} className="d-block w-100" alt="Compras" />
            </div>
            </div>
          <a
            className="carousel-control-prev"
            href="#carouselFade"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselFade"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Hero;
