import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'
export default function Card(props){
    return(
        <div className="card">
            <img src={`/produtos/${props.nome}.png`} onError={(e) => {
                e.target.src = 'produtos/placeholder.png'
            }} className="card-img-top" alt={`Imagem de ${props.nome}.` }/>
            <div className="card-body">
                <h5 className="card-title">{props.nome}</h5>
                <p className="card-text">{props.descricao}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">R$ {props.preco}</li>
                <li className="list-group-item">{props.quantidade} unidade(s) em estoque</li>
            </ul>
        </div>
    )
}
Card.defaultProps = {
    src:'produtos/placeholder.png',
    alt:'Imagem do produto',
    nome:'Produto',
    descricao:'Descrição do produto',
    preco: 0.00,
    quantidade: 0
}
