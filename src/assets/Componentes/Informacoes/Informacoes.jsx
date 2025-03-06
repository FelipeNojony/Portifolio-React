import "./index.css";

function Informacoes() {
  return (
    <>
      <ul className="container-foto">
        <div
          className="foto 
              sombra-interna"
        >
          <img
            src="./src/assets/img/foto_do_perfil.png"
            alt="foto do portfólio do Felipe"
          />
        </div>
      </ul>

      <div className="informacoes">
        <h1>Olá! Sou Felipe de Oliveira</h1>
        <p>
          Recém-formado em Desenvolvimento Full Stack com foco em JavaScript.
        </p>
        <p>
          Estou em busca da minha primeira oportunidade na area da programação.
        </p>


      </div>
    </>
  );
}

export default Informacoes;
