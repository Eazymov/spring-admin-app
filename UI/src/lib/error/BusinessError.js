/* @flow strict */

export class BusinessError extends Error {
  code: null | number;

  constructor(message: string, code: null | number = null) {
    super(message);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, BusinessError);
    }

    this.code = code;
    this.name = 'BusinessError';
  }
}
