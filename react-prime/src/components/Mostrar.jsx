import React, { useState, useEffect } from "react";
import ClientesTable from "./ClientesTable";
import ProductosTable from "./ProductosTable";
import VentasTable from "./VentasTable";

export const Mostrar = () => {
  const [clientes, setClientes] = useState([]);
  const [productos, setProductos] = useState([]);
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    const clientesData = localStorage.getItem("clientes");
    if (clientesData) {
      setClientes(JSON.parse(clientesData));
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

  return (
    <div>
      <div className="w3-container w3-margin">
        <h2 className="w3-text-green">Clientes</h2>
        <ClientesTable clientes={clientes} />
      </div>
      <div className="w3-container w3-margin">
        <h2 className="w3-text-red">Productos</h2>
        <ProductosTable productos={productos} />
      </div>
      <div className="w3-container w3-margin">
        <h2 className="w3-text-blue">Ventas</h2>
        <VentasTable ventas={ventas} />
      </div>
    </div>
  );
};