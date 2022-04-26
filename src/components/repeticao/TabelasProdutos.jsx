import React from "react"
import '../repeticao/TabelaProduto.css'
import produto from "../data/produto"

export default(props) => {

    function getLinhas() {
        return produto.map((produtos, i) => {
          return (
            <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
              <td>{produtos.id}</td>
              <td>{produtos.nome}</td>
              <td>R${produtos.preco.toFixed(2)}</td>
              <td>{produtos.Estoque}</td>
            </tr>
          )
        })
    }

    return(
      <div className="TabelaProduto">
        <table>
         <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Preço</th>
              <th>Estoque</th>
            </tr>
         </thead>
         <tbody>           
              {getLinhas()}            
         </tbody>
        </table>
      </div>
    )
}