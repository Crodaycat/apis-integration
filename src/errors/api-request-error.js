class APIRequestError extends Error {
  constructor(message, errorData) {
    super(message);
    this.name = 'APIRequestError';
    this.error = errorData;
    this.status = 500;

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

module.exports = APIRequestError;
