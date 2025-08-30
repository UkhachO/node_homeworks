import HttpError from '../utils/HttpError.js';

const notFoundHandler = (req, res, next) => {
  next(HttpError(404));
};

export default notFoundHandler;
