class PropertyRequiredError extends Error {
  constructor(property) {
    super(`No se ha enviado la ropiedad requerida: ${property}`);
    this.name = 'PropertyRequiredError';
    this.error = `La propiedad ${property} no está definida`;
    this.status = 400;

    console.error(super.stack);
  }

  errorDto() {
    return {
      status: this.status,
      message: this.message,
      error: this.error
    };
  }
}

module.exports = PropertyRequiredError;
