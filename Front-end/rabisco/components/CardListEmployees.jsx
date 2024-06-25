
import Link from 'next/link'
import Card from "./CardEmployees"

export default function CardList(props){
  const {funcionarios} = props
return(
  <div className="container">
    <div className="row">
      {/* ESTRUTURA DE REPETIÇÃO "MAP" */}
      {funcionarios.map((funcionario,index) => {
        if(!funcionario){
          return(
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <p>Carregando...</p>
            </div>
          )
        } else{
          return(
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
              <Link className='text-decoration-none' href='#'>
                <Card 
                  first_name={funcionario.first_name}
                  last_name={funcionario.last_name}
                  email={funcionario.email}
                  avatar={funcionario.avatar}
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