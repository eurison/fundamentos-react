import React from 'react'
import DireitaFilho from './DireitaFilho'
export default props => {
  return (
    <div>
        <DireitaFilho nome="Junior" idade={20} nerd={true} />
        <DireitaFilho nome="Gabriel" idade={17} nerd={false} />
    </div>
  )
}