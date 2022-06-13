import { useRouter } from 'next/router'

const pessoas = require('./../api/api.json');



const Dynamic = () => {
  const router = useRouter()
  const { id } = router.query

return(
    <div>
    {pessoas.map(function(pessoas) {

        if(pessoas.id == {id}.id){
        return(
      <div>
       <p>{pessoas.nome} {pessoas.sobrenome}</p>
       
      </div>
      
        )}


      })}
</div>
)
  
  
}

export default Dynamic