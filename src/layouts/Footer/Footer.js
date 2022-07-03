import React from 'react'
import "./Footer.css"
import { FaInstagram } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"
import { FaRegEnvelopeOpen } from "react-icons/fa"
import { BiEnvelope } from "react-icons/bi"
import maratecaLogo from "../../assets/maratecaSndLogo.png"
import zuliaHeart from "../../assets/zuliaheart.png"

export const Footer = () => {
    return (
        <footer>
            <div>
                <section className="storeInfo">
                    <img src={maratecaLogo} width="100px" loading="lazy"></img>

                    <p>Te damos hardware de alto rendimiento y marca, a precios razonables, para que tengas una mejor experiencia gaming o de trabajo (diseño gráfico, desarrollo web, etc.).</p>

                    <p><span>Made in Zulia</span><span><img src={zuliaHeart} className="zuliaHeart" width="22.33px" height="20px" loading="lazy"></img></span></p>
                </section>
                <section className="contactInfoTitle">
                    <div className="contactInfoHeading">
                        <h2 className="footerContactH2">¿Necesitas ayuda?</h2>

                        <p>Conversa con nosotros de lunes a domingo de 9:00 am a 6:00 pm</p>
                    </div>

                    <div className="contactInfoList">
                        <p><span><FaWhatsapp
                            className=""
                            size="23"
                            fill="#2E88CA"
                        /></span><span>Escríbenos al <span className="blueText">(+58) 424-6114465</span></span></p>

                        <p><span><FaInstagram
                            className=""
                            size="23"
                            fill="#2E88CA"
                        /></span><span>Envíanos un MP a <span className="blueText">@marateca.ve</span></span></p>

                        <p><span><BiEnvelope
                            className=""
                            size="23"
                            fill="#2E88CA"
                        /></span><span>Escríbenos a <span className="blueText">maratecave@gmail.com</span></span></p>
                    </div>
                </section>
            </div>
        </footer>
    )
}
