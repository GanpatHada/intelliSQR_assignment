import { NextFunction, Request, Response } from "express";
import Joi, { Schema, ValidationResult } from "joi";
import ApiError from "../utils/apiError.utils";

interface CustomRequest<T = any> extends Request {
  body: T;
}

const validate = (schema: Schema) => {
  return (req: CustomRequest, res: Response, next: NextFunction) => {
    req.body=req.body ?? {}
    const result: ValidationResult<any> = schema.validate(req.body, { abortEarly: false });

    if (result.error) {
      throw new ApiError(400,result.error.details[0].message)
      
    }

    req.body = result.value;
    next();
  };
};

export default validate;
