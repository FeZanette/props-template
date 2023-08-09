// adiciona props na função para receber do pai Garagem a informação
function Carro(props) {
  
  return (
    <div>
      <h2>{props.nome}</h2>                {/* recebe o nome do carro */}
      <ul>
        <li>Cor: {props.cor}</li>          {/* recebe a cor do carro */}
        <li>Ano: {props.ano}</li>          {/* recebe o ano do carro */}
        <li>Flex: {String(props.isFlex)}</li>   {/* recebe a informação se é flex em formaa de string */}
      </ul>
    </div>
  );
}

export default Carro;


// function Carro(props) {
  
//   return (
//     <div>
//       <h2>{props.nome}</h2>
//       <ul>
//         <li>Cor: {props.cor}</li>
//         <li>Ano: {props.ano}</li>
//         <li>Flex: {String(props.isFlex)}</li>
//       </ul>
//     </div>
//   );
// }

// export default Carro;