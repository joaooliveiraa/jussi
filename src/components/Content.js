import "../styles/components/Content.css";

import brastempLogo from "../assets/logo-brastemp.png";
import compraCertaLogo from "../assets/logo-compra-certa.png";
import consulLogo from "../assets/logo-consul.png";
import thebarLogo from "../assets/logo-thebar.png";
import Jussi from "../assets/image-jussi.png";

import Card from './Card';

export default function Content() {

  const soluctions =
    [
      {
        title: "P1", name: "Nome do Produto #1", description: "Descrição do produto #1",
        feacture: [{ description: "-1" }, { description: "0" }]

      },
      {
        title: "P2", name: "Nome do Produto #2", description: "Descrição do produto #2",
        feacture: [{ description: "feacture 1" }, { description: "2" }]
      },
      {
        title: "P3", name: "Nome do Produto #3", description: "Descrição do produto #3",
        feacture: [{ description: "3" }, { description: "4" }]
      },
      {
        title: "P4", name: "Nome do Produto #4", description: "Descrição do produto #4",
        feacture: [{ description: "5" }, { description: "6" }]
      }
    ]

  return (
    <>
      <section className="content-section-c">
        <div className="content-title-c">
          <div className="content-left-c">
            <h4>Nossas principais lojas VTEX</h4>
            <span>→</span>
          </div>

          <div className="content-right-c">
            <div className="content-logo-c">
              <img src={brastempLogo} alt="Logo da Brastemp" />
            </div>
            <div className="content-logo-c">
              <img src={compraCertaLogo} alt="Logo da Compra Certa" />
            </div>
            <div className="content-logo-c">
              <img src={consulLogo} alt="Logo da Consul" />
            </div>
            <div className="content-logo-c">
              <img src={thebarLogo} alt="Logo da the bar" />
            </div>
          </div>
        </div>
      </section>

      <section className="content-solutions">
        <div className="content-solutions-items">
          <h2>Nossas soluções</h2>
          <div className="content-solutions-container">
            {soluctions.map((soluction) => (
              <Card 
                title={soluction.title}
                name={soluction.name}
                description={soluction.description}
                feacture={soluction.feacture}
              />
            ))}

            {/*<div className="content-solutions-content"> 
              <div className="content-solutions-title">P1</div>
              <h4>Nome do Produto #1</h4>
              <p>Descrição do produto #1</p>
              <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
              <button>Ver solução</button>
            </div>
            <div className="content-solutions-content">
              <div className="content-solutions-title">P2</div>
              <h4>Nome do Produto #2</h4>
              <p>Descrição do produto #2</p>
              <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
              <button>Ver solução</button>
            </div>
            <div className="content-solutions-content">
              <div className="content-solutions-title">P3</div>
              <h4>Nome do Produto #3</h4>
              <p>Descrição do produto #3</p>
              <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
              <button>Ver solução</button>
            </div>
            <div className="content-solutions-content">
              <div className="content-solutions-title">P4</div>
              <h4>Nome do Produto #4</h4>
              <p>Descrição do produto #4</p>
              <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
              <button>Ver solução</button>
            </div>*/}
          </div>
        </div>
      </section>

      <section className="content-about">
        <div className="content-about-content">
          <div className="content-about-title">
            <h2>Olá, somos A Jüssi</h2>
            <p>
              A Jüssi é uma agência integrante do grupo global WPP que vem há 10
              anos consolidando o pensamento voltado para produtos e resolução
              de problemas. Nosso área dedicada exclusivamente para Produtos
              Digitais é organizada em 6 especialidades: Product Managamenet,
              User Experience Design, SEO, Tecnologia, Agile e User Behavior
              Analytics.
            </p>
            <button> Conheça a Jüssi </button>
          </div>
          <div className="content-about-img-container ">
            <div className="content-about-img">
              <img src={Jussi} alt="Jussi img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
