import { Request, Response } from "express";
import * as userModel from "../models/user.model";
import asyncHandler from "../utils/asyncHandler.utils";
import ApiError from "../utils/apiError.utils";
import ApiResponse from "../utils/apiResponse.utils";

export const getUser = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body;
      const user = await userModel.getUserByEmail(email);
      if (!user)
        throw new ApiError(400,'User not found')
      else if (password !== user.password)
        throw new ApiError(404,'Incorrect password')
      else
        res.status(200).json(new ApiResponse(200,user,'Login successfull'));
    } catch (error) {
      throw error
    }
  }
);
