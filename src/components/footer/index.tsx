import React from "react";
import styles from "./footer.module.sass";
import facebookIcon from "../../assets/images/footer/facebook.svg";
import instagramIcon from "../../assets/images/footer/instagram.svg";
import youtubeIcon from "../../assets/images/footer/youtube.svg";
import Logo from "../../assets/images/logo.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Newsletter Section */}
      <div className={styles.newsletter}>
        <div className={styles.newsletterContent}>
          <h4 className={styles.newsletterTitle}>
            Inscreva-se na nossa newsletter
          </h4>
          <p className={styles.newsletterDescription}>
            Assine a nossa newsletter e receba as novidades e conteúdos
            exclusivos da Econverse.
          </p>
        </div>
        <div className={styles.subscribe}>
          <div>
            <input type="text" placeholder="Digite seu nome" />
            <div className={styles.terms}>
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">Aceito os termos e condições</label>
            </div>
          </div>
          <input type="email" placeholder="Digite seu e-mail" />
          <button>INSCREVER</button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className={styles.container}>
        <div className={styles.section}>
          <img
            src={Logo}
            width={139}
            height={51}
            alt="Logo Econverse"
            className={styles.logo}
          />
          <h4 className={styles.about}>
            Lorem ipsum dolor sit amet, consectetur <br></br>adipiscing elit.
          </h4>

          <div className={styles.socialMedia}>
            <a href="#" aria-label="Facebook">
              <img src={facebookIcon} alt="Facebook" width={22} height={22} />
            </a>
            <a href="#" aria-label="Instagram">
              <img src={instagramIcon} alt="Instagram" width={22} height={22} />
            </a>
            <a href="#" aria-label="YouTube">
              <img src={youtubeIcon} alt="YouTube" width={22} height={22} />
            </a>
          </div>
        </div>

        <div className={styles.section}>
          <h4 className={styles.informations}>Institucional</h4>
          <ul>
            <li>Sobre Nós</li>
            <li>Movimento</li>
            <li>Trabalhe Conosco</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h4 className={styles.informations}>Ajuda</h4>
          <ul>
            <li>Suporte</li>
            <li>Fale Conosco</li>
            <li>Perguntas Frequentes</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h4 className={styles.informations}>Termos</h4>
          <ul>
            <li>Termos e Condições</li>
            <li>Política de Privacidade</li>
            <li>Troca e Devolução</li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>
          Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas
          imagens são de propriedade de seus respectivos donos. É vedada a
          reprodução total ou parcial sem autorização.
        </p>
      </div>
    </footer>
  );
}
