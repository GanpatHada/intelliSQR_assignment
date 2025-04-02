import express from 'express';
import { getUser } from '../controllers/user.controller';
import validate from '../middlewares/validation.middleware';
import { loginSchema } from '../validations/login.validation';


const router = express.Router();

router.route("/").post(validate(loginSchema),getUser)

export default router;
