import React from "react";
import './Soma.css'


export default function somatoria(props) {
  const sum = (props.nota) + 2 
  return (
    <div>
    <h3>Vamos fazer uma soma!</h3>
    <p>{ props.nome } tem uma nota de { props.nota } </p>
    <p>Essa nota com + 2 ira ficar { sum }</p>
  </div>
  )
}