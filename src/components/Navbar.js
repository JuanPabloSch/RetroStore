import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container d-flex align-items-center">
        
        {/* Logo + Marca */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img 
          src="/logoretro.png"  // 👈 mismo nombre exacto que el archivo en public
          alt="RetroStore Logo" 
          className="logo me-2" 
          />
          RetroStore
        </Link>

        {/* Menú */}
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/crear">
                Nuevo Producto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
