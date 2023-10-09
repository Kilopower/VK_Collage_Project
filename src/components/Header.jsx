function Header() {
    return <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Сохранёнки</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="d-flex flex-row" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">О нас</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Профиль</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Войти</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
}

export {Header}