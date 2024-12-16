import React from 'react'

function Login() {
  return (
    <div> 
       <div className="flex h-screen items-center justify-center bg-blue-500">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg flex">
        {/* Left Side: Login Form */}
        <div className="w-1/2 p-8">
          <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">
            LOGIN
          </h1>
          <p className="text-blue-500 text-center font-semibold mb-6">
            ¡Bienvenido/a!
          </p>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Usuario</label>
              <input
                type="text"
                placeholder="Usuario"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Contraseña</label>
              <input
                type="password"
                placeholder="Contraseña"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
            >
              Iniciar Sesion
            </button>
          </form>
          <p className="text-center mt-4 text-gray-600">
            ¿No tienes una cuenta?{" "}
            <a href="#" className="text-green-500 font-semibold">
              Regístrate
            </a>
          </p>
        </div>

        {/* Right Side: Image Section */}
        <div className="w-1/2 bg-blue-500 flex items-center justify-center relative">
          <div className="bg-white rounded-full w-64 h-64 flex items-center justify-center shadow-lg">
            <img
              src="https://via.placeholder.com/150" /* Replace with your image */
              alt="Login"
              className="w-48 h-48 object-cover"
            />
          </div>
          <div className="absolute top-6 left-6 text-white text-3xl font-bold">
            Fibertel
          </div>
        </div>
      </div>
    </div>
      
      </div>
  )
}

export default Login