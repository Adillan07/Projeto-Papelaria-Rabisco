import HeaderB from '@/components/HeaderB'
import PageTitle from '@/components/H1'
import  CardList from '@/components/CardList'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react'
import { getProdutos } from '@/services/api'
export default function produtos(){
    const [produtos, setProdutos] = useState([]);
      
        useEffect(() => {
          const fetchProdutos = async () => {
            try {
              const data = await getProdutos();
              setProdutos(data);
            } catch (error) {
              console.error("Erro ao buscar produtos:", error);
            }
          };
      
          fetchProdutos();
        }, []);
    

    return(
        <main>
            <HeaderB />
            <PageTitle margin="3" size="1" title="Lista de produtos"/>
            <CardList produtos={produtos}/>
        </main>        
    );
}