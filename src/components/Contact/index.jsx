import { useState } from "react";
import axios from "axios";
import sAlert from "sweetalert2";

import validateForm from "../../utils/functions/validateForm";

const Contact = ({ closeModal }) => {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});

  const baseUrl = process.env.REACT_APP_HOST;

  const handleSubmit = (event) => {
    event.preventDefault();
    const validatedInputs = validateForm(inputs, true);
    setErrors(validatedInputs);
    if (!Object.keys(validatedInputs).length) {
      axios.post(`${baseUrl}/user`, {
        name: inputs.name,
        location: inputs.location,
        phone: inputs.phone,
        message: inputs.message,
      });
      setInputs({});
      closeModal();
      sAlert.fire({
        icon: "success",
        text: "Tu mensaje fue enviado con éxito!",
      });
    } else {
      sAlert.fire({
        title: "Ocurrió un error.",
        text: "Hay errores en el formulario, resuelvalos e intente nuevamente.",
        icon: "error",
      });
    }
  };

  const handleUpdate = (event) => {
    const { name, value } = event.target;
    const newData = { [name]: value };
    setInputs({ ...inputs, ...newData });
    setErrors(validateForm(newData));
  };

  return (
    <div className="lg:p-2 p-1 bg-whiteBackground text-navText font-humanist777 rounded">
      <button
        onClick={closeModal}
        className="float-right lg:text-2xl text-xl text-red-600 hover:text-red-700 focus:text-red-700 focus:outline-none"
      >
        <i className="fa-solid fa-circle-xmark" />
      </button>
      <div className="text-center">
        <h2 className="lg:text-3xl md:text-2xl sm:text-xl mb-8">Contactanos</h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block lg:text-sm text-xs font-medium text-navUnderline"
          >
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Escribe tu nombre"
            value={inputs.name}
            onChange={handleUpdate}
            className={`mt-1 lg:p-2 p-1 w-full border ${
              !errors.name ? "border-navUnderlineHover" : "border-red-500"
            } border-2 rounded-md placeholder:text-navUnderlineUnselected placeholder:lg:text-base placeholder:text-sm ${
              !errors.name
                ? "focus:border-navUnderline"
                : "focus:border-red-700"
            } focus:outline-none`}
          />
          {errors.name && (
            <p className="lg:text-base md:text-sm text-xs text-red-500">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="location"
            className="block lg:text-sm text-xs font-medium text-navUnderline"
          >
            Domicilio
          </label>
          <input
            type="text"
            id="location"
            name="location"
            autoComplete="location"
            placeholder="Escribe la dirección de tu domicilio"
            value={inputs.location}
            onChange={handleUpdate}
            className={`mt-1 lg:p-2 p-1 w-full border ${
              !errors.location ? "border-navUnderlineHover" : "border-red-500"
            } border-2 rounded-md placeholder:text-navUnderlineUnselected placeholder:lg:text-base placeholder:text-sm ${
              !errors.location
                ? "focus:border-navUnderline"
                : "focus:border-red-700"
            } focus:outline-none`}
          />
          {errors.location && (
            <p className="lg:text-base md:text-sm text-xs text-red-500">
              {errors.location}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block lg:text-sm text-xs font-medium text-navUnderline"
          >
            Número de teléfono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel"
            placeholder="Escribe tu número de teléfono"
            value={inputs.phone}
            onChange={handleUpdate}
            className={`mt-1 lg:p-2 p-1 w-full border ${
              !errors.phone ? "border-navUnderlineHover" : "border-red-500"
            } border-2 rounded-md placeholder:text-navUnderlineUnselected placeholder:lg:text-base placeholder:text-sm ${
              !errors.phone
                ? "focus:border-navUnderline"
                : "focus:border-red-700"
            } focus:outline-none`}
          />
          {errors.phone && (
            <p className="lg:text-base md:text-sm text-xs text-red-500">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block lg:text-sm text-xs font-medium text-navUnderline"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Escribe la razón del contacto"
            value={inputs.message}
            onChange={handleUpdate}
            className={`mt-1 lg:p-2 p-1 w-full border ${
              !errors.message ? "border-navUnderlineHover" : "border-red-500"
            } border-2 rounded-md placeholder:text-navUnderlineUnselected placeholder:lg:text-base placeholder:text-sm ${
              !errors.message
                ? "focus:border-navUnderline"
                : "focus:border-red-700"
            } focus:outline-none`}
          />
          {errors.message && (
            <p className="lg:text-base md:text-sm text-xs text-red-500">
              {errors.message}
            </p>
          )}
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white py-2 px-4 rounded focus:outline-none"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
