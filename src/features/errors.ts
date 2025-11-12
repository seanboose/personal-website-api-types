export class ApiError extends Error {
  constructor(
    readonly statusCode: number,
    readonly errorType: string,
    readonly message: string,
  ) {
    super(message);
    this.name = this.constructor.name;
    Object.setPrototypeOf(this, new.target.prototype);
  }

  toJSON() {
    return {
      statusCode: this.statusCode,
      errorType: this.errorType,
      message: this.message,
    };
  }
}

export class UnexpectedError extends ApiError {
  constructor(message = 'Something went wrong') {
    super(500, 'INTERNAL_SERVER_ERROR', message);
  }
}

export class ValidationError extends ApiError {
  constructor(message = 'Error occurred during schema validation') {
    super(400, 'VALIDATION_ERROR', message);
  }
}
