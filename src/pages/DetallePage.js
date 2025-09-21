import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";   // 👈 agrego Link para el botón volver
import { doc, getDoc } from "firebase/firestore";
import { db } from "../api/firebaseConfig";

function DetallePage() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProducto({ id: docSnap.id, ...docSnap.data() });
        }
      } catch (error) {
        console.error("Error al obtener producto:", error);
      }
    };

    fetchProducto();
  }, [id]);

  if (!producto) return <div className="container mt-4"><h1>Cargando...</h1></div>;

  return (
    <div className="container mt-4 content-box">
      <div className="detalle-container">
        
        {/* Columna izquierda: Imagen */}
        <div className="detalle-imagen">
          <img 
            src={producto.imagen} 
            alt={producto.nombre} 
          />
        </div>

        {/* Columna derecha: Info */}
        <div className="detalle-info">
          <h1>{producto.nombre}</h1>
          <h5>Categoría: {producto.categoria}</h5>
          <h5 className="text-success">Valor: ${producto.valor}</h5>
          <p>{producto.descripcion}</p>
          <p><strong>Stock:</strong> {producto.stock} unidades</p>
          {/* Botón volver */}
          <Link to="/" className="btn btn-retro mt-3">
            ← Volver a Productos
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetallePage;
