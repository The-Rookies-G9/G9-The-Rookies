import logoequipo from 'media/Logo-equipo.ico';

const Header = () => {
    return (
        <header className="navbarFondo">
          <ul>
              <li>
                <img src={logoequipo} alt='imagen' className="logo" />
              </li>
              <li className="positionButton" >
                <button className="navbarButton tamañoFuente">Inicio</button>
                <button className="navbarButton tamañoFuente">Regresar</button>
                <button className="navbarButton tamañoFuente">Salir</button>
              </li>
            </ul>
      </header>
    )
}

export default Header; 