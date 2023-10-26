import './Home.css'
import {Formulario} from '../formulario/formulario'
import { Footer } from '../footer/footer'

export function Home() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark menu fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">
                    Disabled
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-light" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>

      </header>
      <div className='banner text-white fw-bold'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident placeat, fugit suscipit, esse quisquam, quos rem repellendus libero corrupti quidem voluptate vel non dolore quia deserunt nostrum delectus mollitia soluta!</p>
        <button className='btn btn-outline-dark text-white'>Conocenos</button>
      </div>
      <div className="container-fluid fondo">
        <div className="row p-5">
          <div className="col-6 align-self-center text-center">
            <h5>WELCOME TO H</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat possimus, consequuntur eos sit quo saepe magnam exercitationem, quae magni tenetur modi voluptates delectus illum facilis animi accusantium harum ducimus blanditiis.</p>
          </div>
          <div className="col-4">
            <img src="../../src/assets/img/perona.png" alt="perona" className='img-fluid w-100' />
          </div>
        </div>
        <div className="row">

        </div>
      </div>
      <div className="banner2"></div>

      <div className="container-fluid fondo">
        <div className="row p-5">
          <div className="col-6 align-self-center text-center">
            <h5>HELL</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat possimus, consequuntur eos sit quo saepe magnam exercitationem, quae magni tenetur modi voluptates delectus illum facilis animi accusantium harum ducimus blanditiis.</p>
          </div>
          <div className="col-4">
            <img src="../../src/assets/img/muzan.jpg" alt="perona" className='img-fluid w-100' />
          </div>
        </div>
        <div className="row">

        </div>
      </div>
      

      <div className='container-fluid g-0 '>
        <div className="row">
          <div className="col-12">
            <img src="../../src/assets/img/all might.jpg" alt="" className='img-fluid w-100'/>
          </div>
        </div>

        <div className='row row-cols-1 row-cols-md-3 my-5 bg-secondary-subtle'>


          <div className="col text-center">
            <div className="card h-100 p-3 shadow">
              <img src="../../src/assets/img/targeta1.2.jpg" alt=""  className='img-fluid w-100'/>
              <h3 className='text-danger fw-bold'>REZE</h3>
              <p className='fw-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, officia. Quaerat in rem consectetur rerum fuga. Officiis error, totam quisquam neque repellat rerum ut odit quas facere architecto magni mollitia!</p>
              <hr />
              <h5 className='fw-bold text-success'>POR NOCHE: $1.000.000</h5>
              <button className='btn btn-primary'><i class="bi bi-cart-plus"></i>  Ampliar</button>
              
            </div>
          </div>


          <div className="col text-center">
            <div className="card h-100 p-3 shadow">
              <img src="../../src/assets/img/targeta2.jpg" alt=""  className='img-fluid w-100'/>
              <h3 className='text-danger fw-bold'>POWER</h3>
              <p className='fw-bold '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, officia. Quaerat in rem consectetur rerum fuga. Officiis error, totam quisquam neque repellat rerum ut odit quas facere architecto magni mollitia!</p>
              <hr />
              <h5 className='fw-bold text-success'>POR NOCHE: $500.000</h5>
              <button className='btn btn-primary'> <i class="bi bi-cart-plus"></i>  Ampliar</button>
            </div>
            </div>


          <div className="col text-center">
            <div className="card h-100 p-3 shadow">
              <img src="../../src/assets/img/targeta3.1.jpg" alt=""  className='img-fluid w-100'/>
              <h3 className='text-danger fw-bold'>KOMI-SAN</h3>
              <p className='fw-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, officia. Quaerat in rem consectetur rerum fuga. Officiis error, totam quisquam neque repellat rerum ut odit quas facere architecto magni mollitia!</p>
              <hr />
              <h5 className='fw-bold text-success'>POR NOCHE: $10.000.000</h5>
              <button className='                 '> <i class="bi bi-cart-plus"></i>  Ampliar</button>
            </div>
            </div>


        </div>
      </div>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Formulario></Formulario>
            </div>
          </div>
        </div>
      </section>


      
        <div className="container-fluid bg-dark">
          <div className="row">
            <div className="col-12">
            <Footer></Footer>
            </div>
          </div>
        </div>

      


    </>
  )
}