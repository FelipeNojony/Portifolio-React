import Curriculo from "../Curriculo/Curriculo";
import Header from "../Header/Header";
import Informacoes from "../Informacoes/Informacoes";
import Projetos from "../Projetos/Projetos";
import SobreMim from "../SobreMim/SobreMim";
import "./index.css";

export default function ConteudoPortifolio() {
  return (
    <>
          <Header />
      <main className="home" id="home">
      
        <Informacoes />
      </main>

      <section className="projetos" id="projetos">
        <Projetos />
      </section>

      <div className="sobre-mim" id="sobre-mim">
        <SobreMim />
      </div>

      <div className="curriculo" id="curriculo">
        <Curriculo />
      </div>

    </>
  );
}
