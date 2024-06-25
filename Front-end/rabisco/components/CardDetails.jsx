import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'
import Card from "./CardProdut"
export default function CardList(props){
    const {produto} = props
    if(!produto){
        return(
            <div className="container">
              <p>Carregando...</p>
            </div>
          )
    } else{
        return(
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={produto.idproduto}>
              <Link className='text-decoration-none' href='/detalhes'>
                <Card 
                  nome={produto.nome}
                  descricao={produto.descrição}
                  preco={produto.preço}
                  quantidade={produto.quantidade}
                />
              </Link>
            </div>
          )
    }
  }