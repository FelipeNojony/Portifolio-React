import "./index.css";
import { Swiper, SwiperSlide } from "swiper/react"; 
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaNode } from "react-icons/fa";
import { SiSqlite } from "react-icons/si";

import 'swiper/css'
import "swiper/css/navigation"
import "swiper/css/pagination"


const projeto = [
  {
    id: "1",
    image: "./src/assets/img/wine image.png",
    title: "Wine Experience",
    subtitle: "E-commerce de vinhos",
    description:
      "Meu projeto de conclusão do curso de Desenvolvimento FullStack na MFX Academy é um e-commerce de vinhos, desenvolvido em React com integração a um banco de dados SQLite. Durante o desenvolvimento, enfrentei diversos desafios que me permitiram aprimorar tudo o que aprendi ao longo do curso. Atualmente, o projeto está na fase final, restando apenas a integração completa entre o back-end e o front-end.",
    status: "Em Construção",
    tecnologies1: <IoLogoJavascript />,
    tecnologies2: <FaReact />,
    tecnologies3: <FaHtml5 />,
    tecnologies4: <IoLogoCss3 />,
    tecnologies5: <FaNode />,
    tecnologies6: <SiSqlite />,
  },
  {
    id: "2",
    image: "./src/assets/img/BroFinance.png",
    title: "BroFinance",
    subtitle: "Gestão Financeira",
    description:
      "Projeto desenvolvido no curso de Desenvolvimento FullStack na MFX Academy para aprimorar os conhecimentos aprendidos nas aulas, trata-se de um gestor financeiro, desenvolvido com as tecnologias Html, Css e JavaScript.",
    status: "Finalizado",
    tecnologies1: <IoLogoJavascript />,
    tecnologies2: <FaHtml5 />,
    tecnologies3: <IoLogoCss3 />,
    
  },
];

export default function ContainerProjeto() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={1}
        navigation
      >
        {projeto.map((projetos) => (
          <SwiperSlide key={projetos.id}>
            <div className="projeto-ativo" id="projeto-ativo">
              <div className="imagem">
                  <img src={projetos.image} alt="Imagem do Projeto" />
              </div>
              <a href="#" target="_blank">
                <div className="info-projeto">
                  <div className="descricao-titulo">
                    <h3>{projetos.title}</h3>
                  </div>

                  <div className="descricao-subtitulo">
                    <p>{projetos.subtitle}</p>
                  </div>

                  <div className="descricao">
                    <p>{projetos.description}</p>
                  </div>

                  <div className="estado-projeto">
                    <h4>Estado do projeto</h4>
                    <button>{projetos.status}</button>
                  </div>

                  <div className="tecnologias">
                    <h4>Tecnologias Utilizadas</h4>
                    <div className="lista-tec">
                      {projetos.tecnologies1}
                      {projetos.tecnologies2}
                      {projetos.tecnologies3}
                      {projetos.tecnologies4}
                      {projetos.tecnologies5}
                      {projetos.tecnologies6}
                    </div>
                  </div>
                </div>
              </a>
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </>
  );
}
