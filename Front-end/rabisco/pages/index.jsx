import Link from 'next/link'
import PageTitle from '@/components/H1';
import HeaderB from '@/components/HeaderB'
import Carrossel from '@/components/Carrossel';
import 'bootstrap/dist/css/bootstrap.min.css'
export default function home(){
    return(
        <main>
            <HeaderB />
            <PageTitle margin="3" size="2" title="Bem-vindo à Papelaria Rabisco"/>
            <Carrossel />
        </main>        
    );
}