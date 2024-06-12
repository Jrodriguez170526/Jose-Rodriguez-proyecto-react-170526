import React, { useState, useEffect } from "react";
import ClientesTable from "./ClientesTable";
import ProductosTable from "./ProductosTable";
import VentasTable from "./VentasTable";

export const Altas = () => {
  const [cliente, setcliente] = useState({
    nombre: "",
    telefono: "",
    direccion: "",
    correo: "",
  });

  const [producto, setProducto] = useState({
    id: "",
    nombre: "",
    categoria: "",
    descripcion: "",
    stock: 0,
    precio: 0,
  });
  
  const [venta, setVenta] = useState({
    id: "",
    nombre: "",
    categoria: "",
    precio: 0,
    cantidad: 0,
    total: 0,
  });

  const [mensaje, setMensaje] = useState("");
  const [clientes, setclientes] = useState([]);
  const [productos, setProductos] = useState([]);
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    const clientesData = localStorage.getItem("clientes");
    if (clientesData) {
      setclientes(JSON.parse(clientesData));
    }
    const productosData = localStorage.getItem("productos");
    if (productosData) {
      setProductos(JSON.parse(productosData));
    }
    const ventasData = localStorage.getItem("ventas");
    if (ventasData) {
      setVentas(JSON.parse(ventasData));
    }
  }, []);

  const guardarDatos = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const handleclienteChange = (event) => {
    const { name, value } = event.target;
    setcliente({ ...cliente, [name]: value });
  };

  const handleProductoChange = (event) => {
    const { name, value } = event.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleVentaChange = (event) => {
    const { name, value } = event.target;
    setVenta({ ...venta, [name]: value });
  };

  const handleSubmitcliente = (event) => {
    event.preventDefault();
    const nuevosclientes = [...clientes, cliente];
    setclientes(nuevosclientes);
    guardarDatos("clientes", nuevosclientes);
    setcliente({ nombre: "", telefono: "", direccion: "", correo: "" });
    setMensaje("cliente agregado correctamente.");
  };

  const handleSubmitProducto = (event) => {
    event.preventDefault();
    const nuevoProducto = { ...producto, id: Date.now().toString() };
    const nuevosProductos = [...productos, nuevoProducto];
    setProductos(nuevosProductos);
    guardarDatos("productos", nuevosProductos);
    setProducto({ nombre: "", categoria: "", descripcion: "", stock: 0, precio: 0 });
    setMensaje("Producto agregado correctamente.");
  };
  
  const handleSubmitVenta = (event) => {
    event.preventDefault();
    const nuevaVenta = { ...venta, id: Date.now().toString() };
    const nuevasVentas = [...ventas, nuevaVenta];
    setVentas(nuevasVentas);
    guardarDatos("ventas", nuevasVentas);
    setVenta({ nombre: "", categoria: "", precio: 0, cantidad: 0, total: 0 });
    setMensaje("Venta agregada correctamente.");
  };

  return (
    <div className="w3-container">
      {/* Mensaje de éxito o error */}
      {mensaje && <p>{mensaje}</p>}

      {/* Formulario para agregar clientes */}
      <form className="w3-container w3-card-4 w3-light-grey w3-text-blue w3-margin" onSubmit={handleSubmitcliente}>
        <h2>Agregar cliente</h2>
<p>
<label className="w3-text-red">
<b>Nombre del cliente</b>
</label>
<input
         name="nombre"
         type="text"
         value={cliente.nombre}
         onChange={handleclienteChange}
         className="w3-input w3-border"
       />
</p>
<p>
<label className="w3-text-red">
<b>Teléfono</b>
</label>
<input
         name="telefono"
         type="text"
         value={cliente.telefono}
         onChange={handleclienteChange}
         className="w3-input w3-border"
       />
</p>
<p>
<label className="w3-text-red">
<b>Dirección</b>
</label>
<input
         name="direccion"
         type="text"
         value={cliente.direccion}
         onChange={handleclienteChange}
         className="w3-input w3-border"
       />
</p>
<p>
<label className="w3-text-red">
<b>Correo electrónico</b>
</label>
<input
         name="correo"
         type="email"
         value={cliente.correo}
         onChange={handleclienteChange}
         className="w3-input w3-border"
       />
</p>
<button type="submit" className="w3-btn w3-blue w3-margin-top">
Agregar cliente
</button>
</form>
 {/* Formulario para agregar productos */}
 <form className="w3-container w3-card-4 w3-light-grey w3-text-red w3-margin" onSubmit={handleSubmitProducto}>
    <h2>Agregar Producto</h2>
    <p>
      <label className="w3-text-red">
        <b>Nombre del producto</b>
      </label>
      <input
        name="nombre"
        type="text"
        value={producto.nombre}
        onChange={handleProductoChange}
        className="w3-input w3-border"
      />
    </p>
    <p>
      <label className="w3-text-red">
        <b>Categoría</b>
      </label>
      <input
        name="categoria"
        type="text"
        value={producto.categoria}
        onChange={handleProductoChange}
        className="w3-input w3-border"
      />
    </p>
    <p>
      <label className="w3-text-red">
        <b>Descripción</b>
      </label>
      <input
        name="descripcion"
        type="text"
        value={producto.descripcion}
        onChange={handleProductoChange}
        className="w3-input w3-border"
      />
    </p>
    <p>
      <label className="w3-text-red">
        <b>Stock</b>
      </label>
      <input
        name="stock"
        type="number"
        value={producto.stock}
        onChange={handleProductoChange}
        className="w3-input w3-border"
      />
    </p>
    <p>
      <label className="w3-text-red">
        <b>Precio</b>
      </label>
      <input
        name="precio"
        type="number"
        value={producto.precio}
        onChange={handleProductoChange}
        className="w3-input w3-border"
      />
    </p>
    <button type="submit" className="w3-btn w3-red w3-margin-top">
      Agregar Producto
    </button>
  </form>

  {/* Formulario para agregar ventas */}
  <form className="w3-container w3-card-4 w3-light-grey w3-text-red w3-margin" onSubmit={handleSubmitVenta}>
    <h2>Agregar Venta</h2>
    <p>
      <label className="w3-text-red">
        <b>Nombre del producto vendido</b>
      </label>
      <input
        name="nombre"
        type="text"
        value={venta.nombre}
        onChange={handleVentaChange}
        className="w3-input w3-border"
      />
    </p>
    <p>
      <label className="w3-text-red">
        <b>Categoría</b>
      </label>
      <input
        name="categoria"
        type="text"
        value={venta.categoria}
        onChange={handleVentaChange}
        className="w3-input w3-border"
      />
    </p>
    <p>
      <label className="w3-text-red">
        <b>Precio</b>
      </label>
      <input
        name="precio"
        type="number"
        value={venta.precio}
        onChange={handleVentaChange}
        className="w3-input w3-border"
      />
    </p>
    <p>
      <label className="w3-text-red">
        <b>Cantidad</b>
      </label>
      <input
        name="cantidad"
        type="number"
        value={venta.cantidad}
        onChange={handleVentaChange}
        className="w3-input w3-border"
      />
    </p>
    <p>
      <label className="w3-text-red">
        <b>Total</b>
      </label>
      <input
        name="total"
        type="number"
        value={venta.total}
        onChange={handleVentaChange}
        className="w3-input w3-border"
      />
    </p>
    <button type="submit" className="w3-btn w3-red w3-margin-top">
      Agregar Venta
    </button>
  </form>
</div>
);
};