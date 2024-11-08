import './index.css'

export default function Header() {
  return (
    <>
        <header className="cabecalho">
                <nav className="menu">
                    <ul>
                        <li>
                            <a href="#contato">Contato</a>
                            <a href="#projetos">Meus projetos</a>
                        </li>
                    </ul>
                </nav>
            </header>
    </>
  );
}

