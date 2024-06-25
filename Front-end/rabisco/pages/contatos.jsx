import Link from 'next/link'
import HeaderB from '@/components/HeaderB'
import PageTitle from '@/components/H1'
import  CardList from '@/components/CardListEmployees'
import React, { useEffect, useState } from 'react'
import { getFuncionarios } from '@/services/apiEmployees'
export default function funcionarios(){
    const [funcionarios, setFuncionarios] = useState([]);

        async function buscaFuncionarios() {
            try{
                const data = await getFuncionarios()
                setFuncionarios(data)
            } catch (error){
                console.error('Erro ao buscar produtos: ',error)
            }
        }
      
        useEffect(() => {
          buscaFuncionarios()
        }, []);
    

    return(
        <main>
            <HeaderB />
            <PageTitle margin="3" size="1" title="Confira nossos funcionários"/>
            <CardList funcionarios={funcionarios}/>
        </main>        
    );
}