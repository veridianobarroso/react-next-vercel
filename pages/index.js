import React, { useEffect, useState } from "react";
import api from '../services/api';

export default function Home(){
    
  const config = {
    headers:{
      'Accept':'application/json'
    }
  };

  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    api.get("/editais/@site",config)
       .then((response) => {
         console.log(response);
         setProdutos(response.data)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);
  return (
    
    <div className="produto-container">
       <h1>Relação de Produtos</h1>
        <ul>
           {produtos['@id']}
        </ul>
        <Contador/>
    </div>
  );

}

function Contador(){
    const [contador,setContador] = useState(1);

    function adicionarContador(){
        setContador(contador + 1);
    }
    return (
        <div>
            <div>
               Contador # {contador} + <button onClick={adicionarContador}>ADD</button>
            </div>
            
        </div>
    )
}