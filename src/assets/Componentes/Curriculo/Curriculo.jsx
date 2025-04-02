import "./index.css";

export default function Curriculo() {
  return (
    <>
      <div className="container-curriculo">
        <div className="mini-cv">
          <div className="info">
            <div className="container-foto">
              <div className="foto">
                <img
                  src="./src/assets/img/foto_do_perfil.png"
                  alt="foto do portfólio do Felipe"
                />
              </div>
            </div>

            <div className="info-texto">
              <div className="titulo-info">
                <h2>Felipe de Oliveira</h2>
              </div>

              <div className="subtitulo-info">
                <p>Desenvolvedor Web</p>
              </div>

              <div className="texto-info">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatibus vero autem eveniet voluptates quae eaque nihil
                  velit ex sapiente a rerum id architecto minima reiciendis
                  laborum, sequi harum placeat cumque! Lorem, ipsum dolor sit
                  amet consectetur adipisicing elit. Omnis minima neque
                  laboriosam repudiandae animi rerum ipsa laborum consequuntur.
                  Velit totam consequatur rem suscipit mollitia, asperiores
                  officiis nisi ea esse quidem?
                </p>
              </div>
            </div>
          </div>

          <div className="formacao">
            <div className="container-titulo">
              <div className="titulo-formacao">
                <h2>Formação</h2>
              </div>
            </div>

            <div className="container-formacao">
              <div className="container-curso">
                <div className="instituicao">
                  <p>Mfx Academy</p>
                </div>

                <div className="curso">
                  <div className="nome-curso">
                    <p>Treinamento Full Stack</p>
                  </div>

                  <div className="duracao">
                    <p>Duração: 6 meses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contato">
            <div className="container-titulo">
              <div className="titulo-contato">
                <h2>Contato</h2>
              </div>
            </div>
            <div className="container-formulario">
              <form className="contato-formulario">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />

                <input
                  type="text"
                  name="assunto"
                  id="assunto"
                  placeholder="Assunto"
                />

                <input
                  type="text"
                  name="texto"
                  id="texto"
                  placeholder="Digite uma mensagem aqui..."
                />

                <button type="submit" className="enviar">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="line-curriculo"></div>

        <div className="container-fechamento">
          <footer className="fechamento">
            <div className="resumo">
              <h2 className="titulo-resumo">Portifolio Dev</h2>

              <p className="texto-resumo">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cupiditate dolorem officiis tempora, aliquid aliquam mollitia
                dolore? Dolorum dicta eaque eligendi qui recusandae, illum amet
                consectetur eius inventore cumque sunt consequuntur!
              </p>
            </div>

            <div className="redes">
              <h2 className="titulo-redes">Minhas Redes</h2>

              <ul className="redes-sociais">
            <li>
              <a
                href="https://www.linkedin.com/in/felipe-oliveira-856a03302/"
                title="ir para o linkedin"
                target="_blank"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>

            <li>
              <a
                href="https://wa.me/5511945028179"
                title="Enviar Mensagem no WhatsApp"
                target="_blank"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </li>

            <li>
              <a
                href="https://github.com/FelipeNojony"
                title="Ir para o github"
                target="_blank"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/f.oliveira23/"
                title="Ir para o Instagram"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>

            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
