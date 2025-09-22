import { Link } from "react-router-dom";
import { useCarrito } from "../context/CarritoContext"; // 👈

function Navbar() {
  const { carrito } = useCarrito(); // 👈 obtenemos el carrito

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        {/* Logo + Marca */}
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img
            src="/logoretro.png"
            alt="RetroStore"
            className="logo"
          />
          <span>RetroStore</span>
        </Link>

        {/* Botón hamburguesa (móvil) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú colapsable */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Productos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/crear">Nuevo Producto</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="/carrito">
                🛒 Carrito
                <span className="badge bg-retro ms-2">{carrito.length}</span>
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
