import "../assets/styles/main.scss";
import { useDispatch } from "react-redux";
import { addUser } from "../features/users/usersSlice";
import { useState } from "react";

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    codigo: "",
    nombre: "",
    apellidos: "",
    email: "",
    contrasenia: "",
    tipousuario: "",
    departamento: "",
    carrera: "",
    semestre: "",
    estados: "2",
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const newUser = await response.json();

        dispatch(addUser(newUser));

        setUserData({
          codigo: "",
          nombre: "",
          apellidos: "",
          email: "",
          contrasenia: "",
          tipousuario: "",
          departamento: "",
          carrera: "",
          semestre: "",
          estados: "2",
        });

      } else {
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("Error", error);
    }
  };
  return (
    <div className="flex-container">
      <div className="container">
        <h2 className="container__title">¡Bienvenido!</h2>
        <p className="container__text">
          Completa este formulario para empezar a subir tus proyectos y
          interactuar con tus proyectos favoritos.
        </p>
      </div>
      <form method="post" className="form" onSubmit={handleSubmit}>
        <h3 className="form__title">Crea una cuenta</h3>
        <p className="form__text">
          ¿Ya tienes una cuenta? <a href="">Inicia sesion</a>
        </p>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          className="form__input"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="apellidos"
          placeholder="Apellido"
          className="form__input"
          required
          onChange={handleChange}
        />
        <input
          type="number"
          name="codigo"
          placeholder="Codigo"
          className="form__input form__input--block"
          required
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Correo"
          className="form__input form__input--block"
          required
          onChange={handleChange}
        />
        <input
          type="password"
          name="contrasenia"
          placeholder="Contraseña"
          className="form__input form__input--block"
          required
          onChange={handleChange}
        />
        <label htmlFor="profesor" className="form__label">
          <input
            type="radio"
            name="tipousuario"
            id="profesor"
            className="form__radio"
            value="3"
            onChange={handleChange}
          />
          Profesor
        </label>
        <label htmlFor="estudiante" className="form__label">
          <input
            type="radio"
            name="tipousuario"
            id="estudiante"
            className="form__radio"
            value="2"
          />
          Estudiante
        </label>
        <fieldset className="form__fieldset">
          <h4 className="fieldset__title">Profesor</h4>
          <select
            name="departamento"
            id=""
            className="form__select form__select--block"
          >
            <option disabled>Departamento</option>
          </select>
        </fieldset>
        <fieldset className="form__fieldset">
          <h4 className="fieldset__title">Estudiante</h4>
          <select name="carrera" className="form__select">
            <option disabled>Carrera</option>
            <option value="Tecnología En Sistemas De Gestión De Calidad">
              Tec. Sistemas De Gestión De Calidad
            </option>
            <option value="Tecnología En Desarrollo De Sistemas De Información Y De Software">
              Tec. Desarrollo De Sistemas De Información Y De Software
            </option>
            <option value="Tecnología En Gestión De Servicios Turísticos Y Hoteleros">
              Tec. Gestión De Servicios Turísticos Y Hoteleros
            </option>
            <option value="Licenciatura En Bilingüismo Con Énfasis En Inglés">
              Licenciatura En Bilingüismo Con Énfasis En Inglés
            </option>
            <option value="Contaduría Pública">Contaduría Pública</option>
            <option value="Administración De Empresas">
              Administración De Empresas
            </option>
            <option value="Derecho">Derecho</option>
            <option value="Ingeniería Industrial">Ingeniería Industrial</option>
            <option value="Ingeniería De Sistemas">
              Ingeniería De Sistemas
            </option>
            <option value="Administración De Empresas Turísticas Y Hoteleras">
              Administración De Empresas Turísticas Y Hoteleras
            </option>
          </select>
          <select name="semestre" className="form__select">
            <option disabled>Semestre</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </fieldset>
        <input type="submit" value="Registrarse" className="form__button" />
      </form>
    </div>
  );
};