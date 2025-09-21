import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../api/firebaseConfig";

function FormPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      await addDoc(collection(db, "productos"), {
        nombre: data.nombre,
        valor: parseFloat(data.valor),
        stock: parseInt(data.stock),
        descripcion: data.descripcion,
        categoria: data.categoria,
        imagen: data.imagen,  // 👈 nuevo campo para URL
      });

      alert("Producto guardado en Firestore ✅");
      reset();
    } catch (error) {
      console.error("Error al guardar producto:", error);
    }
  };

  return (
    <div className="container mt-4 content-box">
      <h1>Nuevo Producto</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
        
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" className="form-control"
            {...register("nombre", { required: "El nombre es obligatorio" })} />
          {errors.nombre && <p className="text-danger">{errors.nombre.message}</p>}
        </div>

        <div className="mb-3">
          <label className="form-label">Valor</label>
          <input type="number" className="form-control"
            {...register("valor", { required: "El valor es obligatorio" })} />
          {errors.valor && <p className="text-danger">{errors.valor.message}</p>}
        </div>

        <div className="mb-3">
          <label className="form-label">Stock</label>
          <input type="number" className="form-control"
            {...register("stock", { required: "El stock es obligatorio" })} />
          {errors.stock && <p className="text-danger">{errors.stock.message}</p>}
        </div>

        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <textarea className="form-control" rows="3"
            {...register("descripcion", { required: "La descripción es obligatoria" })}></textarea>
          {errors.descripcion && <p className="text-danger">{errors.descripcion.message}</p>}
        </div>

        <div className="mb-3">
          <label className="form-label">Categoría</label>
          <input type="text" className="form-control"
            {...register("categoria", { required: "La categoría es obligatoria" })} />
          {errors.categoria && <p className="text-danger">{errors.categoria.message}</p>}
        </div>

        <div className="mb-3">
          <label className="form-label">URL de Imagen</label>
          <input type="text" className="form-control"
            {...register("imagen", { required: "La imagen es obligatoria" })} />
          {errors.imagen && <p className="text-danger">{errors.imagen.message}</p>}
        </div>

        <button type="submit" className="btn btn-retro">Guardar</button>
      </form>
    </div>
  );
}

export default FormPage;
