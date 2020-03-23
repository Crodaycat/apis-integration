class PropertyRequiredError extends Error {
  constructor(property) {
    super('Propiedad requerida: ' + property);
    this.name = 'PropertyRequiredError';
    this.error = `La propiedad ${property} no está definida`;
    this.status = 400;

    console.error(super.stack);
  }

  errorDto() {
    return {
      status: this.status,
      message: super.message,
      error: this.error
    };
  }
}

module.exports = PropertyRequiredError;
