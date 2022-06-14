import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react';





export default function Home() {

const pessoas = require('./api/api.json');
const [busca, setBusca] = useState('');


const filtraBusca = pessoas.filter(({nome}) => nome.toLowerCase().startsWith(busca.toLowerCase()))

return(

  <div>
<Head><title>Catálogo</title></Head>

<div className="container">
<h1>Usuários</h1>
<input type="text" placeholder='Busque uma pessoa' onChange={(ev) => setBusca(ev.target.value)}/>
{filtraBusca.map(function(pessoas) {

const link = ("posts/" + pessoas.id )
  return(
<div key={pessoas.id}>
 <a href={link}><div>{pessoas.nome} {pessoas.sobrenome}</div></a>
 
</div>

  )
})}
</div>
</div>
)
  
 
}
