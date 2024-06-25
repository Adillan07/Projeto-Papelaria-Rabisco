import Link from 'next/link'
export default function Card(props){
    return(
        <div className="card my-3">
            <img src={`${props.avatar}`} className="card-img-top" alt={`Imagem de ${props.first_name} ${props.last_name}.` } />
            <div className="card-body">
                <h5 className="card-title">{props.first_name} {props.last_name}</h5>
                <a href="#" className="btn btn-primary">{props.email}</a>
            </div>
        </div>
    )
}
Card.defaultProps = {
    first_name:'Funcionário',
    last_name:' ',
    email:'funcionario@rabisco.com',
    avatar:'produtos/placeholder.png'
}