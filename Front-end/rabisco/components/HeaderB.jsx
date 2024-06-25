import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/HeaderB.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
export default function HeaderB(){
    const router = useRouter()
    return(
    /*
    <header className={styles.header}>
    <nav className={styles.nav}>
    <Link href="/" className={styles.a}>
    */
      <header className="w-100">
          <nav className="navbar navbar-expand-lg bg-dark bg-gradient shadow border-bottom border-4 border-dark border-opacity-25 px-5">
              <div className="container-fluid">
                <img src="logos/logoRabisco.png" alt="logo da papelaria" className={styles.img}/>
                <p className="navbar-brand fs-2 fw-bold text-light pt-3">Rabisco</p>
                <button data-bs-theme="dark" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon text-light"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item d-flex flex-column justify-content-center align-items-center">
                      <i className="bi bi-house fs-4 "></i>
                      <Link onmousemove="animacao(1)" onmouseout="fecha(1)" className="nav-link active fs-5  mx-4 text-light" href="/">Home</Link>
                    </li>
                    <li className="nav-item d-flex flex-column justify-content-center align-items-center">
                      <i className="bi bi-eye-fill fs-4 "></i>
                      <Link onmousemove="animacao(2)" onmouseout="fecha(2)" className="nav-link fs-5  mx-4 text-light" aria-current="page" href="/produtos">Produtos</Link>
                    </li>
                    <li className="nav-item d-flex flex-column justify-content-center align-items-center">
                      <i className="bi bi-file-person-fill fs-4 "></i>
                      <Link onmousemove="animacao(3)" onmouseout="fecha(3)" className="nav-link fs-5  mx-4 text-light" aria-current="page" href="/contatos">Contatos</Link>
                    </li>
                  </ul>
                 
                  <nav class="navbar bg-body-dark">
                    <div class="container-fluid">
                      <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar"/>
                        <button class="btn btn-outline-light" type="submit">Buscar</button>
                      </form>
                    </div>
                </nav>
                </div>
              </div>
            </nav>
      </header>
    )
}