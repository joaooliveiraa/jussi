import "../styles/components/Banner.css";

import bannerImgPNG from "../assets/Banner.png";


export default function Banner() {
  return (
    <div className="banner-background">
      <div className="banner-container">
        <div className="banner-title">
          <h1>Criamos lojas que vendem mais.</h1>
          <p>
            A Jüssi é especialista na criação de lojas usando a plataforma VTEX.
            Precisa criar sua loja ou migrar de plataforma?
          </p>
          <button>Veja nossas soluções</button>
        </div>
        <div className="banner-img">
        <img src={bannerImgPNG} alt="Imagem do banner Jussi" />
        </div>
      </div>
    </div>
  );
}
