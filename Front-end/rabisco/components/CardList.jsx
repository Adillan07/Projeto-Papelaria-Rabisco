// import 'bootstrap/dist/css/bootstrap.min.css'
// import  Card from '@/components/CardPodut'
// import React, { useEffect, useState } from 'react'
// import { getProdutos } from '@/services/api'
// export default function CardList(){
//         const [produtos, setProdutos] = useState([]);
      
//         useEffect(() => {
//           const fetchProdutos = async () => {
//             try {
//               const data = await getProdutos();
//               setProdutos(data);
//             } catch (error) {
//               console.error("Erro ao buscar produtos:", error);
//             }
//           };
      
//           fetchProdutos();
//         }, []);
//     return(
//         <div className="container">
//             <div className="row">
//                 {produtos.map(produto => (
//                     <div className="col-12 col-sm-6 col-md-4 col-lg 3">
//                     <Card idproduto={produto.idproduto} nome={produto.nome} descricao={produto.descricao} preco={produto.preco} quantidade={produto.quantidade}/>
//                 </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'
import Card from "./CardProdut"

export default function CardList(props){
  const {produtos} = props
return(
  <div className="container">
    <div className="row">
      {/* ESTRUTURA DE REPETIÇÃO "MAP" */}
      {produtos.map((produto,index) => {
        if(!produto){
          return(
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <p>Carregando...</p>
            </div>
          )
        } else{
          return(
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
              <Link className='text-decoration-none' href={`/detalhes?id=${produto[0]}`}>
                <Card 
                  nome={produto[1]}
                  descricao={produto[2]}
                  preco={produto[3]}
                  quantidade={produto[4]}
                />
              </Link>
            </div>
          )
        }
      })}
    </div>
  </div>
)
}