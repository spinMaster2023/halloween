import './Home.css'
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
                <button className="btn btn-outline-success" type="submit">
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

    </>
  )
}