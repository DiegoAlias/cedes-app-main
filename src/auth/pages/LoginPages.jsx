import { NavLink, useNavigate } from "react-router-dom";
import { Navbar } from "../../ui";
import { useForm} from "react-hook-form";
import { fetchToken } from "../helpers/fetchToken";

export const LoginPages = () => {  
  
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },    
  } = useForm();
  
  const onSubmit = handleSubmit(async(data) => {          
    const userToken = await fetchToken(data);  
     navigateToDatabase(userToken);       
  });
    
  const navigateToDatabase = (token) => {
    navigate("/database", {
      replace: true,
      state: {token}, // Pasa el token como parte del estado de la ruta
    });  
  };
  
  return (
    <div>
      <Navbar buttonAction="none" />

      <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-5 bg-white">Iniciar sesión</h2>

        <form className="bg-white" onSubmit={onSubmit}>
          <div className="mb-4 bg-white">
            {/* INPUT USERNAME */}
            <label
              htmlFor="username"
              className="block text-gray-600 text-sm font-medium mb-2 bg-white"
            >
              Nombre de usuario
            </label>
            <input
              type="text"
              id="username"
              name="username"              
              className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500 bg-white"
              autoFocus
              {...register("username", {
                required: {
                  value: true,
                  message: "Ingrese un nombre de usuario",
                },
                minLength: {
                  value: 4,
                  message:
                    "El nombre de usuario debe tener mas de 4 caracteres",
                },
                maxLength: {
                  value: 20,
                  message:
                    "El nombre de usuario debe tener menos de 20 caracteres",
                },
              })}
            />
            {errors.nombre && (
              <span className="text-red-500 bg-transparent">
                {errors.nombre.message}
              </span>
            )}
          </div>

          {/* INPUT PASSWORD */}
          <div className="mb-6 bg-white">
            <label
              htmlFor="password"
              className="block text-gray-600 text-sm font-medium mb-2 bg-white"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"              
              className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500 bg-white"
              {...register("password", {
                required: {
                  value: true,
                  message: "La contraseña es requeridas",
                },
              })}
            />
            {errors.pass && (
              <span className="text-red-500 bg-transparent">
                {errors.pass.message}
              </span>
            )}
          </div>

          {/* BUTTON */}
          {/* <NavLink to="/database"> */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-700 focus:outline-none"
            // onClick={onLogin}
          >
            Iniciar sesión
          </button>
          {/* </NavLink> */}

          {/* RECUPERAR CONTRASEÑA */}
          <div className="mt-4 bg-transparent">
            <NavLink
              to="/recuperar-contrasena"
              className="text-blue-600 hover:underline bg-transparent"
            >
              ¿Olvidaste tu contraseña?
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};
