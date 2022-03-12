import{Link} from 'react-router-dom'

function Encabezado() {
    return (
<div>
    <h1>Programacion III</h1>
     <ul>
     <li>
          <Link to="/">Inicio</Link>
      </li>
      <li>
          <Link to="/Contacto">Contacto</Link>
      </li>
       <li>
           <Link to="/Productos">Productos</Link>
       </li>
     </ul>
     <hr/>
</div>
)

}
export default Encabezado;