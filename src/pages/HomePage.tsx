import React from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import Categories from "../components/categories";
import SectionTitle from "../components/title";
import ProductSlider from "../components/products";
import Partners from "../components/partners";
import Footer from "../components/footer";
import Brands from "../components/brands";

const HomePage: React.FC = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <section aria-label="Hero Banner">
          <Hero />
        </section>
        <section aria-label="Categorias">
          <Categories />
        </section>
        <section aria-label="Produtos relacionados">
          <SectionTitle>Produtos relacionados</SectionTitle>
          <ProductSlider />
        </section>
        <section aria-label="Parceiros">
          <Partners />
        </section>
        <section aria-label="Navegue por marcas">
          <SectionTitle viewAllText="Ver todos">
            Navegue por marcas
          </SectionTitle>
          <Brands />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default HomePage;
