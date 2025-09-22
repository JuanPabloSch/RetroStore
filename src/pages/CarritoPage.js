import { useCarrito } from "../context/CarritoContext";

function CarritoPage() {
    const { carrito, quitarDelCarrito, vaciarCarrito } = useCarrito();

    const total = carrito.reduce((acc, item) => acc + (item.valor || 0), 0);

    if (carrito.length === 0) {
        return <div className="container mt-4"><h2>Tu carrito está vacío 🛒</h2></div>;
    }

    return (
        <div className="container mt-4">
        <h2>Carrito de Compras</h2>
        <ul className="list-group mb-3">
            {carrito.map((prod) => (
            <li key={prod.id} className="list-group-item d-flex justify-content-between align-items-center">
                <span>{prod.nombre}</span>
                <span>${prod.valor}</span>
                <button 
                className="btn btn-danger btn-sm"
                onClick={() => quitarDelCarrito(prod.id)}
                >
                ❌
                </button>
            </li>
            ))}
        </ul>
        <h4>Total: ${total}</h4>
        <button className="btn btn-warning me-2" onClick={vaciarCarrito}>Vaciar</button>
        <button className="btn btn-primary" onClick={() => alert("¡Gracias por tu compra retro! 🎉")}>
            Finalizar Compra
        </button>
        </div>
    );
}

export default CarritoPage;
