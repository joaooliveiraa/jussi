import '../styles/components/Footer.css';

import wpplogoPNG from "../assets/wppLogo.png";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";


export default function Footer() {
    return (
        <>
            <section className="container-footer">
                <div className="container-footer-content">
                    <div className="container-footer-title">
                        <h2>
                            Essa loja foi construída usando uma das nossas soluções da
                            plataforma VTEX. tenha a sua.
                        </h2>
                        <p>Entre em contato</p>
                        <h3>comercial@jussi.com.br</h3>
                    </div>
                </div>
            </section>

            <section className="container-footer-email">
                <div className="container-footer-email-content">
                    <div className="container-footer-email-content-title">
                        <h2>receba novidades da nossa área de produtos digitais.</h2>
                        <div>
                            <input type="email" placeholder="Digite seu e-mail" />
                            <button>CADASTRAR</button>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="container-footer-img">
                <div className="container-footer-img-content">
                    <div className="container-footer-img-left">
                        <img src={wpplogoPNG} alt="Logo wppcompany" />
                    </div>
                    <div className="container-footer-img-right">
                        <FaFacebookF />
                        <FaInstagram />
                        <FaLinkedinIn />
                    </div>
                </div>
            </footer>

        </>
    )
}