import { IoArrowDownSharp } from "react-icons/io5";
import ContainerProjeto from "../ContainerProjeto/ContainerProjeto";
import "./index.css";

export default function Projetos() {
  return (
    <>
      <div className="container-dos-projetos">
        <div className="container-projetos">
          <ContainerProjeto />
        </div>

        <div className="button-down">
          <div className="arrow-down-about">
            <a href="#sobre-mim">
              <button>
                <div>
                  <p>Sobre mim</p>
                </div>

                <div className="icon">
                  <IoArrowDownSharp />
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
