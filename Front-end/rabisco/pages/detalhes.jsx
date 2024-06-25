import {useRouter} from 'next/router'
import HeaderB from '@/components/HeaderB'
import PageTitle from '@/components/H1'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react'
import { getProduto } from '@/services/api'

export default function produto(){
    const router = useRouter()
    const { id } = router.query
    const [produto, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true)
      
    async function buscaProduto(idproduto) {
      try{
        const data = await getProduto(idproduto)
        setProdutos(data)
        setLoading(false)
      } catch (error) {
        console.error('Erro a obuscar produtos: ', error)
        setLoading(false)
      }
    }

    useEffect(() => {
      if (id) {
        buscaProduto(id)
      }
    }, [id]);

    if(loading) {
      return <div>Carregando ...</div>
    }

    if(!produto) {
      return <div>Produto não encontrado.</div>
    }

    return(
        <main>
            <HeaderB />
            <PageTitle margin="3" size="1" title="Lista de produtos"/>
            <div className="container my-4">
                <div className="row text-center my-2">
                    <div className="col-sm-12 col-lg-4">
      
                        <img src={`/produtos/${produto.nome}.png`} className="img-fluid" alt="..." />
                    </div>
                    <div className="col-sm-12 col-lg-6 d-flex flex-column align-items-center">
                        <h1 className="card-text">{produto.nome}</h1>

                        <p className="card-text">{produto.descrição}</p>
                        
                        <a href="#" className="btn btn-primary">R$ {produto.preço}</a>
                      
                        <h5 className="card-text text-success text-center">
                            {produto.quantidade} unidade (s) em estoque
                        </h5>
                    </div>
                </div>
                <div className="row text-center">
   
                    <Link href="/produtos"><button type="button" className="btn btn-dark">Voltar</button></Link>
                </div>
            </div>
        </main>        
    );
}