import React from 'react';
import './App.css';
import './layout/Cards.css'

import Me from './Images/ERIC.jpg'
import Cards from './layout/Cards'
import Somatoria from './components/Soma'


export default function App(props) {
  return (
    <div className="App">
        <h1>Olá meu nome é Eric Marques</h1>
      <div className="Myself">
        <img src={ Me } alt="Sou eu :D" />
        <h2>Sou um Desenvolvedor <span>Front-End React.JS</span></h2>
        <h3>Fiz uns testes abaixos para treinar minhas habilidades</h3>
      </div>
        <Cards
          titulo="Esse é o primeiro titulo do Card"
          sub="E esse é o subtitulo do Card"
          content="Javascript"
        />
        <Somatoria
            nome="Eric"
            nota={10}
          />
    </div>
  )
}