import "./App.css"
import React from "react"

import Mega from "./components/mega/Mega"
import Contador from "./components/contador/Contador"
import Input from "./components/formulario/Input"
import IndiretaPai from "./components/comunicacao/IndiretaPai"
import DireitaPai from "./components/comunicacao/DireitaPai"
import UsuarioInfo from "./components/condicional/UsuarioInfo"
import ParOuImpar from "./components/condicional/ParOuImpar"
import TabelasProduto from "./components/repeticao/TabelasProdutos"
import ListaAlunos from "./components/repeticao/ListaAlunos"
import Card from "./components/layout/Card"
import Familia from "./components/basicos/Familia"
import Aleatorio from "./components/basicos/Aleatorio"
import ComParametro from "./components/basicos/ComParametro"
import Primeiro from "./components/basicos/Primeiro"
import Fragmento from "./components/basicos/Fragmento"
import FamiliaMembro from "./components/basicos/FamiliaMembro"

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
            <div className="Cards">

              <Card titulo="#13 - Mega" color="#b9006e">
                <Mega qtde={8}></Mega>
              </Card>

              <Card titulo="#12 - Contador" color="#424242">
                <Contador numeroInicial={2}></Contador>
              </Card>

              <Card titulo="11 - Componete Controlado" color="#FF69B4">
                <Input/>
              </Card>

              <Card titulo="10 - Comunicação Indireta" color="#954333">
                <IndiretaPai></IndiretaPai>
              </Card>

              <Card titulo="09 - Comunicação Direta" color="#59323c">
                <DireitaPai></DireitaPai>
              </Card>

              <Card titulo="08 - Renderização Condicional" color="#982395">
                <ParOuImpar> numero={20}</ParOuImpar>
                <UsuarioInfo usuario={{nome: 'Fernando'}} />
                <UsuarioInfo usuario={{email: 'fernando@gmail.com' }} />
                <UsuarioInfo usuario={{email: 'fernando@gmail.com' }} />
                <UsuarioInfo/>
              </Card>

              <Card titulo="07 - Desafio Repetição" color="#3A9AD9">
                <TabelasProduto> </TabelasProduto>
              </Card>

              <Card titulo="06 - Repetição" color="#6A5ACD">
                <ListaAlunos>
                </ListaAlunos>
              </Card>

              <Card titulo="#05 - Componentes com Filhos" color="#00c8f8">
               <Familia sobrenome="Silva">
                 <FamiliaMembro nome="Pedro" />
                 <FamiliaMembro nome="Ana"  />
                 <FamiliaMembro nome="Gustavo" />
               </Familia>
              </Card>

              <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                <Aleatorio min={1} max={60} />
              </Card>

              <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento />
              </Card>

              <Card titulo="#02 - Com Parametro" color="#E8B71A">
                <ComParametro
                  titulo="Situação do Aluno"
                  aluno="Pedro silva"
                  nota={9.3}
                />
              </Card>

              <Card titulo="#01 - Primeiro Componente" color="#588c73">
                  <Primeiro></Primeiro>
              </Card>

             
           </div>

          
     </div>
  )
}

export default App;