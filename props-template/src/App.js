import Garagem from "./Componentes/Garagem";
import "./styles.css";


export default function App() {

  // criar variável nome que terá nosso nome como valor e será passada para a garagem através do props
  const nome = "Fernanda"
  const nome1 = "Maia"
  
  // criar função que recebe parâmetro nome e exibe alert com frase
  function apresentaGaragem(name) {
    alert (`Boas-vindas à garagem de ${name}`)
  }

  // outra forma de escrever a função acima
  // const apresentaGaragem = (nome) => {
  //   alert (`Boas-vindas à garagem de ${nome}`)
  // }


  // criar varável com propriedades do carro em forma de array e passá-las até o componente Carro
  const carros = [
    {
      nome: "Gol",
      cor: "verde",
      ano: 2013,
      isFlex: true
    },
    {
      nome: "Fusca",
      cor: "Branco",
      ano: 2003,
      isFlex: false
    },
    {
      nome: "Jeep",
      cor: "verde",
      ano: 2023,
      isFlex: true
    },
    {
      nome: "HB20",
      cor: "azul",
      ano: 2010,
      isFlex: true
    },
  ]


  return (
    <div>
      <Garagem 
        // enviar props para o filho, nome da prop = nome da variável "nome
        nome={nome} 
        apresentaGaragem={apresentaGaragem}   
        carro1={carros[0]}                   
        carro2={carros[1]}                    
        carro3={carros[2]}                    
        carro4={carros[3]}
      />
      <Garagem 
        nome={nome1}  
        apresentaGaragem={apresentaGaragem}   
        carro1={carros[0]}                   
        carro2={carros[1]}                    
        carro3={carros[2]}                    
        carro4={carros[3]}
      />
    </div>
  );
}