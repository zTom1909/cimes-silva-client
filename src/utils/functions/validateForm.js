const validateForm = (inputs, isSubmit) => {
  let errors = {};

  if ("name" in inputs || isSubmit) {
    const nameRegex = /^[A-Za-z]+(?:['\s][A-Za-z]+)*\s[A-Za-z]+$/;

    if (!inputs.name) errors.name = "Debes escribir tu nombre";
    else if (inputs.name.length < 4)
      errors.name = "Tu nombre debe tener al menos 4 letras";
    else if (inputs.name.length > 20)
      errors.name = "Tu nombre debe tener un máximo de 20 letras";
    else if (!nameRegex.test(inputs.name.trim()))
      errors.name = "Formato inválido de nombre";
  }
  if ("location" in inputs || isSubmit) {
    if (!inputs.location)
      errors.location = "Debes escribir la dirección de tu domicilio";
    else if (inputs.location.length < 4)
      errors.location = "Tu domicilio debe tener al menos 4 caractéres";
    else if (inputs.location.length > 30)
      errors.location = "Tu domicilio debe tener un máximo de 30 caractéres";
  }
  if ("message" in inputs || isSubmit) {
    if (!inputs.message) errors.message = "Debes escribir un mensaje";
    else if (inputs.message.length < 4)
      errors.message = "Tu mensaje debe tener al menos 4 caractéres";
    else if (inputs.message.length > 200)
      errors.message = "Tu mensaje debe tener un máximo de 200 caractéres";
  }
  if ("phone" in inputs || isSubmit) {
    const phoneRegex = /^\+?[0-9]+$/;

    if (!inputs.phone) errors.phone = "Debes escribir tu número de teléfono";
    else if (inputs.phone.length < 8)
      errors.phone = "Tu teléfono debe tener al menos 8 números";
    else if (inputs.phone.length > 16)
      errors.phone = "Tu teléfono debe tener un máximo de 16 números";
    else if (!phoneRegex.test(inputs.phone))
      errors.phone = "Formato inválido de teléfono";
  }

  return errors;
};

export default validateForm;
