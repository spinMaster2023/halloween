import './Home.css'
export function Home(){
    return(
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
        <div className="container">
            <div className="row">
                <dic className="col-12">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sunt corporis pariatur nulla doloribus aliquam repudiandae, similique nisi veniam quibusdam? Dolorum dolore libero hic rem voluptatibus! Accusantium, repudiandae. Beatae velit veritatis quisquam delectus repellat laudantium aliquam omnis quis quam, et sed molestiae ipsam assumenda deleniti voluptate autem aliquid sequi doloribus nihil esse maiores sit vitae itaque. Aut velit error nostrum mollitia magni architecto repellat nemo quae, ipsam recusandae, dolore expedita. Quas, sunt unde? Mollitia veniam ipsum accusamus expedita nisi quod, adipisci doloribus quisquam velit quis incidunt quidem voluptatum, sed, ducimus debitis. Modi, nobis quos? Aliquam eaque placeat sapiente sequi deleniti?</p>
                </dic>
            </div>
        </div>
        </>
    )
}