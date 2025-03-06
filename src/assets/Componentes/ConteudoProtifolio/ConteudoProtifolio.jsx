import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Informacoes from "../Informacoes/Informacoes";
import Projetos from "../Projetos/Projetos";
import './index.css'

export default function ConteudoProtifolio() {
  return (
    <>
        <Header/> 
            
            <main className="home">
                
                <Informacoes />

            </main>

            <section className="projetos" id="projetos">
                
                <Projetos />

            </section>

            <footer>
                
                <Footer />

             </footer>
    </>
  );
}

