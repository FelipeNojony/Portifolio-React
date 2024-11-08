import './index.css'

function Informacoes() {
    return (
        <>
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
        </>
    );
}

export default Informacoes;