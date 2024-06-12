import React from "react";

const ClientesTable = ({ clientes }) => {
  if (!clientes || clientes.length === 0) {
    return <p>No se encontraron clientes.</p>;
  }

  return (
    <div>
    <h2>Tabla de Clientes</h2>
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Teléfono</th>
        </tr>
      </thead>
      <tbody>
        {clientes.map((cliente) => (
          <tr key={cliente.id}>
            <td>{cliente.nombre}</td>
            <td>{cliente.correo}</td>
            <td>{cliente.telefono}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default ClientesTable;