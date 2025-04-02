import "./index.css";
import { IoArrowDownSharp } from "react-icons/io5";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaNode, FaReact, FaHashtag } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

export default function SobreMim() {
  return (
    <>
      <div className="container-sobre-mim">
        <div className="about">
          <div className="about-me">
            <div className="info-sobre-mim">
              <div className="titulo">
                <h2>Sobre mim</h2>
              </div>
              <div className="texto">
                <p>
                  Olá! Sou Felipe, desenvolvedor Full Stack com foco em
                  JavaScript e em transição de carreira para a área de
                  tecnologia. Minha experiência em atendimento ao público
                  fortaleceu minhas habilidades em comunicação, organização e
                  resolução de problemas, agregando valor ao meu perfil técnico.
                </p>
                <p>
                  Busco minha primeira oportunidade na área e sigo me
                  aprimorando por meio de cursos e projetos práticos. Sou
                  motivado pelo aprendizado contínuo e pelo trabalho em equipe
                  na criação de soluções eficientes.
                </p>
              </div>

              <div className="titulo">
                <h2>Por que programação?</h2>
              </div>

              <div className="texto">
                <p>
                  Desde pequeno, sempre fui apaixonado por tecnologia. Meu
                  primeiro contato com a programação foi através de reportagens
                  na TV, numa época em que as ferramentas de aprendizado eram
                  limitadas e os recursos escassos. Ainda assim, fiquei
                  fascinado ao perceber como um simples trecho de código pode
                  dar vida a um universo de possibilidades. A capacidade de
                  criar algo do zero, apenas com lógica e criatividade, continua
                  me encantando até hoje.
                </p>
              </div>
            </div>
          </div>

          <div className="line-center"></div>

          <div className="competencias">
            <div className="titulo">
              <h2>Competências</h2>
            </div>

            <div className="competencias-box">
              <div className="icones">
                <IoLogoJavascript />
                <FaReact />
                <FaHtml5 />
                <IoLogoCss3 />
                <FaNode />
                <BiLogoPostgresql />
              </div>
            </div>

            <div className="line"></div>

            <div className="perfil-tecnico">
              <div className="titulo-perfil-tecnico">
                <h2>Perfil Técnico</h2>
              </div>

              <div className="perfil-tecnico-box">
                <div className="texto-perfil-tecnico">
                  <p><span className="span-perfil-tecnico"><FaHashtag /></span>Proatividade</p>
                  <p><span className="span-perfil-tecnico"><FaHashtag /></span>Resiliência</p>
                  <p><span className="span-perfil-tecnico"><FaHashtag /></span>Trabalho em Equipe</p>
                  <p><span className="span-perfil-tecnico"><FaHashtag /></span>Comunicação Interpessoal</p>
                  <p><span className="span-perfil-tecnico"><FaHashtag /></span>Organização</p>
                  <p><span className="span-perfil-tecnico"><FaHashtag /></span>Resolução de Problemas</p>
                  <p><span className="span-perfil-tecnico"><FaHashtag /></span>Agilidade</p>
                  <p><span className="span-perfil-tecnico"><FaHashtag /></span>Trabalho sob Pressão</p>
                  <p><span className="span-perfil-tecnico"><FaHashtag /></span>Digitação</p>
                  <p><span className="span-perfil-tecnico"><FaHashtag /></span>Raciocínio Lógico</p>                   
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="arrow-down">
          <a href="#curriculo">
            <div>
              <button>
                <div>Curriculo</div>

                <div className="icon">
                  <IoArrowDownSharp />
                </div>
              </button>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
