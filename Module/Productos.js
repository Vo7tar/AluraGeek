const listaProductos = () => {
    return fetch("http://localhost:3000/productos")
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };
  
  const crearProducto = (titulo, precio, imagen) => {
    return fetch("http://localhost:3000/productos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        titulo,
        precio,
        imagen,
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };
  
  const borrarProducto = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };
  
  export const servicioProducto = {
    listaProductos,
    crearProducto,
    borrarProducto,
  };
  