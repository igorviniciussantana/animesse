import { useRouter } from 'next/router'

const pessoas = require('./../api/api.json');



const Brinco = () => {
 
return(
    <div>
    {pessoas.map(function(pessoas) {

        if(pessoas.categoria == "brinco"){
        return(
      <div>
       <p>{pessoas.nome} {pessoas.sobrenome}</p>
       <p>{pessoas.categoria}</p>
       
      </div>
      
        )}


      })}
</div>
)
  
  
}

export default Brinco