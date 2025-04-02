import "./index.css";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import { IoArrowDownSharp } from "react-icons/io5";

function Informacoes() {
  return (
    <>

      <div className="informacoes" id="informacoes">
        <h1>
          <span>
            <BsDot />
          </span>
          Felipe de Oliveira
          <span>
            <BsDot />
          </span>
        </h1>

        <p>Desenvolvedor Web </p>

        <div className="lista-tecnologias">
          <IoLogoJavascript />
          <FaReact />
          <FaHtml5 />
          <IoLogoCss3 />
          <FaNode />
          <BiLogoPostgresql />
        </div>

        <div className="button-down">
          <div className="arrow-down">
            <a href="#projeto-ativo">
              <button>
                <div>Meus Projetos</div>

                <div className="icon">
                  <IoArrowDownSharp />
                </div>
              </button>
            </a>
          </div>
        </div>
        {/* <p>
          Recém-formado em Desenvolvimento Full Stack com foco em JavaScript.
        </p>
        <p>
          Estou em busca da minha primeira oportunidade na area da programação.
        </p> */}
      </div>
    </>
  );
}

export default Informacoes;
