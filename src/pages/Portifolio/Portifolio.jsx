import './index.css'

export default function Portifolio() {
    return (
        <>
            <header className="cabecalho">
                <nav className="menu">
                    <ul>
                        <li>
                            <a href="#contato">Contato</a>
                            <a href="#redes-sociais">Redes Sociais</a>
                            <a href="#projetos">Meus projetos</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="home">
                <div className="informacoes">
                    <h1>Olá! Sou Felipe de Oliveira</h1>
                    <p>Recém-formado em Desenvolvimento Full Stack com foco em JavaScript.</p>
                    <p>Estou em busca da minha primeira oportunidade na area da programação.</p>

                    <ul className="redes-sociais">
                        <li>
                            <a href="https://www.linkedin.com/in/felipe-oliveira-856a03302/" title="ir para o linkedin" target="_blank">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </li>

                        <li>
                            <a href="https://wa.me/5511945028179" title="Enviar Mensagem no WhatsApp" target="_blank">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </li>

                        <li>
                            <a href="https://github.com/FelipeNojony" title="Ir para o github" target="_blank">
                                <i className="fab fa-github"></i>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.instagram.com/f.oliveira23/" title="Ir para o Instagram" target="_blank">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                <ul className="container-foto">
                    <div className="foto 
              sombra-interna">
                        <img src="./src/assets/img/foto_do_perfil.png" alt="foto do portfólio do Felipe" />
                    </div>
                </ul>

            </main>

            <section className="projetos" id="projetos">
                <h2 className="titulo">Meus Projetos</h2>

                <div className="container-projetos">
                    <div className="projeto ativo">
                        <a href="#" target="_blank">
                            <img src="./src/assets/img/515x700.png" alt="Capa do projeto" />
                            <h3>Projeto 1</h3>
                            <div className="informacoes-projeto">
                                <p>Projeto feito usando HTML, CSS e JavaScript</p>
                                <p>🔗 Ver no GitHub Pages</p>
                            </div>
                        </a>
                    </div>

                    <div className="projeto ativo">
                        <a href="#" target="_blank">
                            <img src="./src/assets/img/515x700.png" alt="Capa do projeto" />
                            <h3>Projeto 2</h3>
                            <div className="informacoes-projeto">
                                <p>Projeto feito usando HTML, CSS e JavaScript</p>
                                <p>🔗 Ver no GitHub Pages</p>
                            </div>
                        </a>
                    </div>

                    <div className="projeto ativo">
                        <a href="#" target="_blank">
                            <img src="./src/assets/img/515x700.png" alt="Capa do projeto" />
                            <h3>Projeto 3</h3>
                            <div className="informacoes-projeto">
                                <p>Projeto feito usando HTML, CSS e JavaScript</p>
                                <p>🔗 Ver no GitHub Pages</p>
                            </div>
                        </a>
                    </div>

                    <div className="projeto ativo">
                        <a href="#" target="_blank">
                            <img src="./src/assets/img/515x700.png" alt="Capa do projeto" />
                            <h3>Projeto 4</h3>
                            <div className="informacoes-projeto">
                                <p>Projeto feito usando HTML, CSS e JavaScript</p>
                                <p>🔗 Ver no GitHub Pages</p>
                            </div>
                        </a>
                    </div>

                    <div className="projeto">
                        <a href="#" target="_blank">
                            <img src="./src/assets/img/515x700.png" alt="Capa do projeto" />
                            <h3>Projeto 5</h3>
                            <div className="informacoes-projeto">
                                <p>Projeto feito usando HTML, CSS e JavaScript</p>
                                <p>🔗 Ver no GitHub Pages</p>
                            </div>
                        </a>
                    </div>

                    <div className="projeto">
                        <a href="#" target="_blank">
                            <img src="./src/assets/img/515x700.png" alt="Capa do projeto" />
                            <h3>Projeto 6</h3>
                            <div className="informacoes-projeto">
                                <p>Projeto feito usando HTML, CSS e JavaScript</p>
                                <p>🔗 Ver no GitHub Pages</p>
                            </div>
                        </a>
                    </div>

                    <div className="projeto">
                        <a href="#" target="_blank">
                            <img src="./src/assets/img/515x700.png" alt="Capa do projeto" />
                            <h3>Projeto 7</h3>
                            <div className="informacoes-projeto">
                                <p>Projeto feito usando HTML, CSS e JavaScript</p>
                                <p>🔗 Ver no GitHub Pages</p>
                            </div>
                        </a>
                    </div>

                    <div className="projeto">
                        <a href="#" target="_blank">
                            <img src="./src/assets/img/515x700.png" alt="Capa do projeto" />
                            <h3>Projeto 8</h3>
                            <div className="informacoes-projeto">
                                <p>Projeto feito usando HTML, CSS e JavaScript</p>
                                <p>🔗 Ver no GitHub Pages</p>
                            </div>
                        </a>
                    </div>
                </div>

                <button className="btn-mostrar-projetos">Mostrar Mais</button>
            </section>

            <footer>
                <div>
                    <h3>Tecnologias:</h3>
                </div>
                <div className='icones'>
                    <i className="devicon-javascript-plain colored"></i>

                    <i className="devicon-html5-plain colored"></i>

                    <i className="devicon-css3-plain colored"></i>

                    <i className="devicon-react-original colored"></i>

                    <i className="devicon-nodejs-plain-wordmark colored"></i>

                    <i className="devicon-sqlite-plain-wordmark colored"></i>

                </div>
             </footer>

        </>
    );
}

