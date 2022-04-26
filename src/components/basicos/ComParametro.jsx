import React from "react"
 
function ComParametro(props) {
  const status = props.nota >= 7 ? 'aluno Aprovado' : 'aluno Reprovado'
  //console.log(parans)
  return (
    <div>
      <h2>{props.titulo}</h2>
      <p>
          <strong>{ props.aluno } </strong> 
           tem nota
           <strong> { props.nota } </strong>
           e está
           <strong> {status} </strong>
      </p>
    </div>
  )
}

export default ComParametro;