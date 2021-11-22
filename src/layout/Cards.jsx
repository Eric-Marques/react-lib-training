import React from 'react'
import './Cards.css'


export default function Cards(props) {
  return (
    <div className="Card">
        <div className="title">{ props.titulo }</div>
        <div className="sub"><strong>{ props.sub }</strong></div>
        <div className="content">Gosto de trabalhar com <span>{ props.content }</span></div>
    </div>
      
  )
}