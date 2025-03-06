import "./index.css";

export default function ContainerProjeto() {
  return (
    <>
      <div className="projeto-ativo" id="projeto-ativo">
        <a href="#" target="_blank">
          <div className="imagem">
            <div className="bloco-1">
              <img
                src="./src/assets/img/wine image.png"
                alt="Capa do projeto"
              />
              <img
                src="./src/assets/img/wine image.png"
                alt="Capa do projeto"
              />
            </div>
            <div className="bloco-2">
              <img
                src="./src/assets/img/wine image.png"
                alt="Capa do projeto"
              />
              <img
                src="./src/assets/img/wine image.png"
                alt="Capa do projeto"
              />
            </div>
          </div>
          <div className="info-projeto">
            <div className="descricao-titulo">
              <h3>Wine Experience</h3>
            </div>

            <div className="descricao-subtitulo">
              <p>E-commerce de vinhos</p>
            </div>

            <div className="descricao">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
                pariatur repudiandae molestiae numquam assumenda dolorem nostrum
                saepe exercitationem, non rem nemo at ipsa et minus neque vel
                nisi accusantium ipsam. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Dolores impedit quis, nesciunt eos ut facilis
                in odit aliquam illum deserunt voluptate laudantium sed veniam
                reprehenderit nisi officiis placeat dolorem provident. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quas
                ab dolore accusamus rerum qui numquam officia iste eum molestiae
                aliquam magni ad. Facere, quisquam? Architecto eveniet repellat
                officiis veniam.
              </p>
            </div>

            <div className="estado-projeto">
              <h4>Estado do projeto</h4>
              <button>Em construção</button>
            </div>

            <div className="tecnologias">
              <h4>Tecnologias Utilizadas</h4>
              <i className="devicon-javascript-plain colored"></i>

              <i className="devicon-react-original colored"></i>
              
              <i className="devicon-html5-plain colored"></i>

              <i className="devicon-css3-plain colored"></i>

              <i className="devicon-nodejs-plain-wordmark colored"></i>

              <i className="devicon-sqlite-plain-wordmark colored"></i>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
