import "./index.css";

export default function Header() {
  return (
    <>
      <header className="cabecalho">
        <nav className="menu">
          <div className="menu-projetos">
            <a href="#projeto-ativo">Meus projetos</a>
          </div>

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
        </nav>
      </header>
    </>
  );
}
