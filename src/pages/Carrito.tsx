import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Carrito = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState<any[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    cargarCarrito();
    
    // Escuchar cambios en el carrito
    const handleCarritoChange = () => cargarCarrito();
    window.addEventListener('carritoActualizado', handleCarritoChange);
    window.addEventListener('storage', handleCarritoChange);
    
    return () => {
      window.removeEventListener('carritoActualizado', handleCarritoChange);
      window.removeEventListener('storage', handleCarritoChange);
    };
  }, []);

  const cargarCarrito = () => {
    const carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
    setItems(carrito);
    
    const totalCarrito = carrito.reduce((sum: number, item: any) => 
      sum + (item.precio_final * item.cantidad), 0
    );
    setTotal(totalCarrito);
  };

  const aumentarCantidad = (index: number) => {
    const nuevoCarrito = [...items];
    nuevoCarrito[index].cantidad += 1;
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
    setItems(nuevoCarrito);
    cargarCarrito();
  };

  const disminuirCantidad = (index: number) => {
    const nuevoCarrito = [...items];
    if (nuevoCarrito[index].cantidad > 1) {
      nuevoCarrito[index].cantidad -= 1;
    } else {
      nuevoCarrito.splice(index, 1);
    }
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
    setItems(nuevoCarrito);
    cargarCarrito();
    window.dispatchEvent(new CustomEvent('carritoActualizado'));
  };

  const eliminarItem = (index: number) => {
    const nuevoCarrito = items.filter((_: any, i: number) => i !== index);
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
    setItems(nuevoCarrito);
    cargarCarrito();
    window.dispatchEvent(new CustomEvent('carritoActualizado'));
  };

  const procederCompra = () => {
    const listaProductos = items
      .map((item) => `• ${item.nombre} (Talla ${item.talla}, Color ${item.color}) x${item.cantidad} = €${(item.precio_final * item.cantidad).toFixed(2)}`)
      .join('\n');
    
    const mensaje = `Hola Alexa Moda, me gustaría comprar los siguientes productos:\n\n${listaProductos}\n\nTOTAL: €${total.toFixed(2)}\n\n¿Cuál es el siguiente paso?`;
    const numeroWhatsApp = "34664123153";
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  const vaciarCarrito = () => {
    if (confirm('¿Estás segura de que deseas vaciar el carrito?')) {
      localStorage.setItem('carrito', '[]');
      setItems([]);
      setTotal(0);
      window.dispatchEvent(new CustomEvent('carritoActualizado'));
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar alwaysOpaque={true} />
        <main className="pt-28 pb-16">
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px", textAlign: "center" }}>
            <h1 style={{
              fontSize: "28px",
              fontFamily: "'Playfair Display', serif",
              color: "#1a1a1a",
              marginBottom: "20px"
            }}>
              TU CARRITO ESTÁ VACÍO
            </h1>
            <p style={{ fontSize: "16px", color: "#666", marginBottom: "30px" }}>
              Explore nuestra colección y encuentre el vestido perfecto para tu próximo evento.
            </p>
            <button
              onClick={() => navigate('/vestidos')}
              style={{
                padding: "14px 40px",
                backgroundColor: "#1a1a1a",
                color: "white",
                fontSize: "13px",
                fontWeight: "bold",
                border: "none",
                cursor: "pointer",
                fontFamily: "'Playfair Display', serif",
                letterSpacing: "1px"
              }}
              onMouseOver={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = "#333";
              }}
              onMouseOut={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = "#1a1a1a";
              }}
            >
              SEGUIR COMPRANDO
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar alwaysOpaque={true} />
      <main className="pt-28 pb-16">
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          
          {/* Breadcrumb */}
          <button
            onClick={() => navigate('/vestidos')}
            style={{
              background: "none",
              border: "none",
              color: "#999",
              cursor: "pointer",
              fontSize: "13px",
              fontFamily: "'Playfair Display', serif",
              marginBottom: "30px",
              letterSpacing: "0.5px"
            }}
          >
            ← VOLVER A COLECCIÓN
          </button>

          <h1 style={{
            fontSize: "28px",
            fontFamily: "'Playfair Display', serif",
            color: "#1a1a1a",
            marginBottom: "40px",
            letterSpacing: "1px"
          }}>
            TU CARRITO
          </h1>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 350px", gap: "40px" }}>
            
            {/* Lista de productos */}
            <div>
              {items.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "120px 1fr",
                    gap: "25px",
                    paddingBottom: "25px",
                    marginBottom: "25px",
                    borderBottom: "1px solid #e0e0e0",
                    alignItems: "start"
                  }}
                >
                  {/* Imagen */}
                  <div style={{
                    aspectRatio: "3/4",
                    backgroundColor: "#f5f5f5",
                    overflow: "hidden",
                    cursor: "pointer"
                  }}
                  onClick={() => navigate(`/producto/${item.id}`)}
                  >
                    <img
                      src={item.foto_url}
                      alt={item.nombre}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }}
                    />
                  </div>

                  {/* Detalles */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    <div>
                      <h3 style={{
                        fontSize: "14px",
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: "600",
                        margin: "0 0 8px 0",
                        color: "#1a1a1a",
                        letterSpacing: "0.5px"
                      }}>
                        {item.nombre}
                      </h3>
                      <p style={{
                        fontSize: "12px",
                        color: "#999",
                        margin: "0 0 4px 0"
                      }}>
                        <strong>Talla:</strong> {item.talla}
                      </p>
                      <p style={{
                        fontSize: "12px",
                        color: "#999",
                        margin: 0
                      }}>
                        <strong>Color:</strong> {item.color}
                      </p>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        border: "1px solid #ddd",
                        borderRadius: "2px"
                      }}>
                        <button
                          onClick={() => disminuirCantidad(index)}
                          style={{
                            width: "32px",
                            height: "32px",
                            border: "none",
                            background: "none",
                            cursor: "pointer",
                            fontSize: "14px",
                            fontWeight: "bold"
                          }}
                        >
                          −
                        </button>
                        <span style={{
                          minWidth: "30px",
                          textAlign: "center",
                          fontSize: "13px",
                          fontWeight: "600"
                        }}>
                          {item.cantidad}
                        </span>
                        <button
                          onClick={() => aumentarCantidad(index)}
                          style={{
                            width: "32px",
                            height: "32px",
                            border: "none",
                            background: "none",
                            cursor: "pointer",
                            fontSize: "14px",
                            fontWeight: "bold"
                          }}
                        >
                          +
                        </button>
                      </div>

                      <span style={{
                        fontSize: "15px",
                        fontWeight: "700",
                        color: "#1a1a1a"
                      }}>
                        €{(item.precio_final * item.cantidad).toFixed(2)}
                      </span>

                      <button
                        onClick={() => eliminarItem(index)}
                        style={{
                          background: "none",
                          border: "none",
                          color: "#c5413b",
                          cursor: "pointer",
                          fontSize: "13px",
                          fontWeight: "600",
                          fontFamily: "'Playfair Display', serif"
                        }}
                      >
                        ELIMINAR
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Resumen y botones */}
            <div style={{
              position: "sticky",
              top: "100px",
              height: "fit-content",
              backgroundColor: "white",
              padding: "30px",
              border: "1px solid #e0e0e0",
              borderRadius: "2px"
            }}>
              <h2 style={{
                fontSize: "14px",
                fontFamily: "'Playfair Display', serif",
                fontWeight: "700",
                letterSpacing: "1.5px",
                marginBottom: "25px",
                color: "#1a1a1a"
              }}>
                RESUMEN
              </h2>

              <div style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "12px",
                fontSize: "13px",
                color: "#666"
              }}>
                <span>Subtotal:</span>
                <span>€{total.toFixed(2)}</span>
              </div>

              <div style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "12px",
                fontSize: "13px",
                color: "#666"
              }}>
                <span>Envío:</span>
                <span>A consultar</span>
              </div>

              <div style={{
                borderTop: "1px solid #e0e0e0",
                paddingTop: "15px",
                marginBottom: "25px",
                display: "flex",
                justifyContent: "space-between",
                fontSize: "16px",
                fontWeight: "700",
                color: "#1a1a1a"
              }}>
                <span>TOTAL:</span>
                <span>€{total.toFixed(2)}</span>
              </div>

              <button
                onClick={procederCompra}
                style={{
                  width: "100%",
                  padding: "15px",
                  backgroundColor: "#1a1a1a",
                  color: "white",
                  fontSize: "12px",
                  fontWeight: "700",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "'Playfair Display', serif",
                  letterSpacing: "1.5px",
                  marginBottom: "10px",
                  transition: "all 0.3s ease"
                }}
                onMouseOver={(e) => {
                  (e.target as HTMLButtonElement).style.backgroundColor = "#333";
                }}
                onMouseOut={(e) => {
                  (e.target as HTMLButtonElement).style.backgroundColor = "#1a1a1a";
                }}
              >
                PROCEDER VÍA WHATSAPP
              </button>

              <button
                onClick={() => navigate('/vestidos')}
                style={{
                  width: "100%",
                  padding: "15px",
                  backgroundColor: "white",
                  color: "#1a1a1a",
                  fontSize: "12px",
                  fontWeight: "700",
                  border: "1.5px solid #1a1a1a",
                  cursor: "pointer",
                  fontFamily: "'Playfair Display', serif",
                  letterSpacing: "1.5px",
                  marginBottom: "10px",
                  transition: "all 0.3s ease"
                }}
                onMouseOver={(e) => {
                  (e.target as HTMLButtonElement).style.backgroundColor = "#fcfaf7";
                }}
                onMouseOut={(e) => {
                  (e.target as HTMLButtonElement).style.backgroundColor = "white";
                }}
              >
                SEGUIR COMPRANDO
              </button>

              <button
                onClick={vaciarCarrito}
                style={{
                  width: "100%",
                  padding: "12px",
                  backgroundColor: "transparent",
                  color: "#c5413b",
                  fontSize: "11px",
                  fontWeight: "600",
                  border: "1px solid #f0e0e0",
                  cursor: "pointer",
                  fontFamily: "'Playfair Display', serif",
                  letterSpacing: "1px",
                  transition: "all 0.3s ease"
                }}
                onMouseOver={(e) => {
                  (e.target as HTMLButtonElement).style.backgroundColor = "#fff0f0";
                }}
                onMouseOut={(e) => {
                  (e.target as HTMLButtonElement).style.backgroundColor = "transparent";
                }}
              >
                VACIAR CARRITO
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Carrito;
