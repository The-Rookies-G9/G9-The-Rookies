import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header style= " background-color: rgb(3, 3, 56)">
        <ul>
            <li>
              <img src="./media/Logo-equipo.ico" class="logo" />
            </li>
            <li class="positionButton" >
              <button class="navbarButton tamañoFuente">Inicio</button>
              <button class="navbarButton tamañoFuente">Regresar</button>
              <button class="navbarButton tamañoFuente">Salir</button>
              <input class="tamañoFuente"placeholder="Buscar"/>
              <i class="fas fa-search" style="color:rgb(220, 20, 120);"></i>
            </li>
          </ul>
    </header>
    <main>
      <aside class="bloqueAside">
        <ul>
          <li>Inicio</li>
          <li>Registro</li>
          <li>Productos</li>
          <li>Ventas</li>
          <li>Clientes</li>
        </ul>
      </aside>
      <section class="seccionBusqueda" >
        <form >
          <ul>
            <li>
              <label for="idvta">
                Cód. Venta
                <input name="idvta" placeholder="Id de venta"/>
              </label>
              <label for="vendedor">
                Vendedor
                <input name="vendedor"  placeholder="Ingrese nombre"/>
              </label>
              <label for="idVendedor">
                Cód. Vendedor
                <input name="idVendedor"  placeholder="Identificación"/>
              </label>
            </li>
          </ul>
          <ul>
              <li >
                <label for="estado" class="positionLabel">
                  Estado:
                  <select name="estado">
                    <option value="0">Seleccione</option>
                    <option value="En proceso">En proceso</option>
                    <option value="Cancelada">Cancelada</option>
                    <option value="Entregada">Entregada</option>
                  </select>
                </label>
                <label for="desdeFecha" class="positionLabel">
                  Desde:
                  <input name="desdeFecha" type="date" placeholder="fecha"/>
                </label>
                <label for="hastaFecha" class="positionLabel">
                  Hasta:
                  <input name="hastaFecha" type="date" placeholder="fecha"/>
                </label>
              </li>
          </ul>
          <ul>
            <li>
              <label for="cliente">
                Cliente:
                <input name="cliente" class="casilla" placeholder="Ej: Daniel Pulido"/>
              </label>
              <label for="tipoId">
                Tipo de Identificación:
                <select name="tipoId">
                  <option value="0" style="color:gray">Seleccione</option>
                  <option value="CC">Cédula de ciudadania</option>
                  <option value="CE">Cédula de Extranjeria</option>
                  <option value="TI">Tarjeta de Identidad</option>
                  <option value="PA">Pasaporte</option>
                </select>
              </label>
              <label for="numeroDoc">
                Número de Identificación:
                <input name="numeroDoc" type="number" step="7" placeholder="Ej: 9786566" />
              </label>
            </li>
          </ul>
        </form>
      </section>
  
        <section>
          <table>
            <caption>Resultados de Busqueda</caption>
          </table>
        </section>

    </main>
      
    </div>
  );
}

export default App;
