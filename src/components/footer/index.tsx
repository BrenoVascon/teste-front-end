import styles from "./footer.module.sass";

import facebookIcon from "../../assets/images/footer/facebook.svg";
import instagramIcon from "../../assets/images/footer/instagram.svg";
import youtubeIcon from "../../assets/images/footer/youtube.svg";

import Logo from "../../assets/images/logo.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <div>
            <img
              src={Logo}
              width={139}
              height={51}
              alt="Logo Econverse"
              className={styles.logo}
            />
          </div>
          <h4 className={styles.about}>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h4>

          <div className={styles.socialMedia}>
            <img src={facebookIcon} alt="Facebook" width={22} height={22} />
            <img src={instagramIcon} alt="Instagram" width={22} height={22} />
            <img src={youtubeIcon} alt="YouTube" width={22} height={22} />
          </div>
        </div>
        <div className={styles.section}>
          <h4 className={styles.informations}>INFORMAÇÕES ÚTEIS</h4>
          <ul>
            <li>FALE CONOSCO</li>
            <li>DÚVIDAS</li>
            <li>PRAZOS DE ENTREGA</li>
            <li>FORMAS DE PAGAMENTO</li>
            <li>POLÍTICA DE PRIVACIDADE</li>
            <li>TROCAS E DEVOLUÇÕES</li>
          </ul>
        </div>

        <div className={styles.newsletter}>
          <h4>
            <strong> Inscreva-se na nossa newsletter</strong>
          </h4>
          <p>
            Assine a nossa newsletter e receba as novidades e conteúdos
            exclusivos da Econverse.
          </p>
          <div className={styles.subscribe}>
            <input type="nome" placeholder="Digite seu nome" />
            <input type="email" placeholder="Digite seu e-mail" />
            <button>OK</button>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>
          Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas
          imagens são de propriedade de seus respectivos donos.<br></br>É vedada
          a reprodução, total ou parcial, de qualquer conteúdo sem expressa
          autorização.
        </p>
      </div>
    </footer>
  );
}
