import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Container } from "react-bootstrap";

const Loggin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const validaLogin = (e) => {
    e.preventDefault();
    if (email.toLowerCase().trim() == "" || password.trim() == "") {
      Swal.fire({
        title: "Error!",
        text: "Todos los campos son obligatorios",
        icon: "error",
        confirmButtonText: "Cerrar",
      });
      navigate("/Loggin");
    } else {
      if (password.length >= 6) {
        Swal.fire({
          title: "Confirmado",
          text: "Haz iniciado sesión correctamente",
          icon: "success",
          confirmButtonText: "Cerrar",
        });
        return(true);
        navigate("/Profile")
      } else {
        Swal.fire({
          title: "Error!",
          text: "La contraseña debe tener al menos 6 caracteres",
          icon: "error",
          confirmButtonText: "Cerrar",
        });
        navigate("/Loggin");
      }
    }

    setEmail("");
    setPassword("");
  };
  return (
    <>
      <Container className="d-flex flex-column justify-content-center align-items-center" style={{ height: "80vh" }}>
          <div style={{ width: "75rem" }} className="d-flex justify-content-center flex-column align-items-center" >
            <h1>Inicio de sesión</h1>
          <div>
            <form onSubmit={(e) => validaLogin(e)}>
                <div>
                  <label className="form-label">Correo electrónico</label>
                  <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Tu Correo"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label className="form-label">Contraseña</label>
                  <input
                  type="password"
                  className="form-control"
                  id="pass"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary m-2">Enviar</button>
                </div>
             </form>
          </div>
        </div>
        
      </Container>
    </>
  );
};

export default Loggin;