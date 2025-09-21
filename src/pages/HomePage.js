import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../api/firebaseConfig";

function HomePage() {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("todos");

  useEffect(() => {
    const fetchProductos = async () => {
      const querySnapshot = await getDocs(collection(db, "productos"));
      const productosArray = [];
      querySnapshot.forEach((doc) => {
        productosArray.push({ id: doc.id, ...doc.data() });
      });
      setProductos(productosArray);
    };
    fetchProductos();
  }, []);

  // 🔎 Filtrado
  const productosFiltrados = productos.filter((prod) => {
    const matchBusqueda = prod.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const matchCategoria = categoria === "todos" || prod.categoria.toLowerCase() === categoria;
    return matchBusqueda && matchCategoria;
  });

  return (
    <div className="container mt-4 content-box">
      <h1 className="mb-4">Lista de Productos</h1>

      {/* 🔎 Buscador */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      {/* 🎮 Filtros por categoría */}
      <div className="mb-4">
        {["todos", "consola", "vinilo", "cassette", "cartucho", "indumentaria", "deporte"].map((cat) => (
          <button
            key={cat}
            className={`btn btn-sm me-2 ${categoria === cat ? "btn-retro" : "btn-outline-light"}`}
            onClick={() => setCategoria(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="row">
        {productosFiltrados.map((prod) => (
          <div className="col-md-4 mb-3" key={prod.id}>
            <div className="card h-100 shadow-sm">
              <img src={prod.imagen} className="card-img-top" alt={prod.nombre} />
              <div className="card-body">
                <h5 className="card-title">{prod.nombre}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Categoría: {prod.categoria}
                </h6>
                <h6 className="card-subtitle mb-2 text-success">
                  ${prod.valor}
                </h6>
                <Link to={`/detalle/${prod.id}`} className="btn btn-retro">
                  Ver Detalle
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
