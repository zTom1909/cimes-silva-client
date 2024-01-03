const validateForm = (inputs, isSubmit) => {
  let errors = {};

  if (("name" in inputs || isSubmit) && !inputs.name) errors.name = "Debes escribir tu nombre";
  if (("location" in inputs || isSubmit) && !inputs.location) errors.location = "Debes escribir la dirección de tu domicilio";
  if (("message" in inputs || isSubmit) && !inputs.message) errors.message = "Debes escribir un mensaje";
  if (("phone" in inputs || isSubmit)) {
    const phoneRegex = /^\+?[0-9]+$/;

    if (!inputs.phone) {
      errors.phone = "Debes escribir tu número de teléfono";
    } else if (!phoneRegex.test(inputs.phone)) {
      errors.phone = "Formato inválido de teléfono";
    }
  }

  return errors;
};

export default validateForm;
