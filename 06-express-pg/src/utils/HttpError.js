const messages = {
  400: 'Bad Request',
  401: 'Unauthorized',
  404: 'Not Found',
  409: 'Conflict',
  500: 'Internal Server Error',
};

const HttpError = (status, message = messages[status]) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

export default HttpError;
