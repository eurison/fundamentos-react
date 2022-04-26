import React from 'react'

export default props => {
  const callback = props.quandoClicar
  //funcão que gera um valor aleatório
  const gerarIdade = () => parseInt(Math.random() * (20)) + 50
  const gerarNerd = () => Math.random() > 0.5
  return (
    <div>
      <div> Filho </div>
      <button onClick={ e => callback('joão', gerarIdade(), gerarNerd())}>
       
        Fornecer Informações
      </button>
    </div>
  )
}