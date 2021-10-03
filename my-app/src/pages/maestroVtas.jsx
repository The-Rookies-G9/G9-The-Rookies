import 'Styles/App.css';
import logoequipo from 'media/Logo-equipo.ico';
import Header from 'components/header.jsx';


function maestroVtas() {
    return (
      <div>
        <Header />
        <main>
          <aside className="bloqueAside">
            <ul>
              <li>Inicio</li>
              <li>Registro</li>
              <li>Productos</li>
              <li>Ventas</li>
              <li>Clientes</li>
            </ul>
          </aside>
          <section className="seccionBusqueda" >
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
                    <label for="estado" className="positionLabel">
                      Estado:
                      <select name="estado">
                        <option value="0">Seleccione</option>
                        <option value="En proceso">En proceso</option>
                        <option value="Cancelada">Cancelada</option>
                        <option value="Entregada">Entregada</option>
                      </select>
                    </label>
                    <label for="desdeFecha" className="positionLabel">
                      Desde:
                      <input name="desdeFecha" type="date" placeholder="fecha"/>
                    </label>
                    <label for="hastaFecha" className="positionLabel">
                      Hasta:
                      <input name="hastaFecha" type="date" placeholder="fecha"/>
                    </label>
                  </li>
              </ul>
              <ul>
                <li>
                  <label for="cliente">
                    Cliente:
                    <input name="cliente" className="casilla" placeholder="Ej: Daniel Pulido"/>
                  </label>
                  <label for="tipoId">
                    Tipo ID:
                    <select name="tipoId">
                      <option value="0">Seleccione</option>
                      <option value="CC">Cédula de ciudadania</option>
                      <option value="CE">Cédula de Extranjeria</option>
                      <option value="TI">Tarjeta de Identidad</option>
                      <option value="PA">Pasaporte</option>
                    </select>
                  </label>
                  <label for="numeroDoc">
                    No. ID:
                    <input name="numeroDoc" type="number" step="7" placeholder="Ej: 9786566" />
                  </label>
                </li>
              </ul>
            </form>
          </section>
    
          <section>
            <table>
              <caption>Resultados de Busqueda</caption>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </table>
          </section>
  
      </main>
      </div>
    );
  }
  
  export default maestroVtas;