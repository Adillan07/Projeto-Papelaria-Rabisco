import Link from 'next/link'
import styles from '../styles/Header.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
export default function Header(props){
  let tamanho
  if(props.size=='big'){
    tamanho ='32pt'
  } else{
    tamanho = '22pt'
  }
    return(
    /*
    <header className={styles.header}>
    <nav className={styles.nav}>
    <Link href="/" className={styles.a}>
    */
      <header className="w-100">
          <nav className="navbar navbar-expand-lg shadow border-bottom border-4 border-dark border-opacity-25 px-5" style={{
            backgroundColor:props.bgcolor
          }} >
              <div class="container-fluid">
                <img src="logos/logoRabisco.png" alt="logo da papelaria" className={styles.img}/>
                <p class="navbar-brand fw-bold text-light pt-3" style={{
                  fontSize:tamanho
                }}>Rabisco</p>
                <button data-bs-theme="dark" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon text-light"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item d-flex flex-column justify-content-center align-items-center">
                      <i class="bi bi-house fs-4 "></i>
                      <Link onmousemove="animacao(1)" onmouseout="fecha(1)" class="nav-link active fs-5  mx-4 text-light" href="/">Home</Link>
                    </li>
                    <li class="nav-item d-flex flex-column justify-content-center align-items-center">
                      <i class="bi bi-eye-fill fs-4 "></i>
                      <Link onmousemove="animacao(2)" onmouseout="fecha(2)" class="nav-link fs-5  mx-4 text-light" aria-current="page" href="/produtos">Produtos</Link>
                    </li>
                    <li class="nav-item d-flex flex-column justify-content-center align-items-center">
                      <i class="bi bi-file-person-fill fs-4 "></i>
                      <Link onmousemove="animacao(3)" onmouseout="fecha(3)" class="nav-link fs-5  mx-4 text-light" aria-current="page" href="/contatos">Contatos</Link>
                    </li>
                  </ul>
                  <nav class="navbar bg-body-tertiary">
                    <div class="container-fluid">
                      <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" />
                        <button class="btn btn-outline-success" type="submit">Buscar</button>
                      </form>
                    </div>
                </nav>
                </div>
              </div>
            </nav>
      </header>
    )
}