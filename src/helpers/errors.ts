import type { ResponseError } from "src/models/Response";

const getError = (error: Array<string> | string): string =>
  typeof error === 'string' ? error : error[0];

const catchError = (error: any): ResponseError => {
  console.clear();
  if (error.response) {
    return {
      statusCode: error.response.status,
      message: getError(error?.response.data.message || error.message),
    };
  } else {
    return {
      statusCode: 500,
      message: 'Something went wrong',
    };
  }
};
export { getError, catchError };