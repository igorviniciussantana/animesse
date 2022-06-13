import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const pessoas = require('./api/api.json');



export default function Home() {
return(


<div>
<h1>Usuários</h1>
{pessoas.map(function(pessoas) {
const link = ("posts/" + pessoas.id )
  return(
<div key={pessoas.id}>
 <a href={link}><p>{pessoas.nome} {pessoas.sobrenome}</p></a>
 
</div>

  )
})}
</div>
)
  
 
}
