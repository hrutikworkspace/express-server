import { checkSchema, validationResult } from 'express-validator';

const validationHandler = (validator: any): any => {
  return [
    checkSchema(validator),
    (req, res, next) => {
      const error = validationResult(req);
      if (!error.isEmpty()) {
        next(res.send({
          message: 'Incorrect request',
          status: 404,
          error: error.array()
        }));
      }
      next();
    },
  ];
};

export default validationHandler;