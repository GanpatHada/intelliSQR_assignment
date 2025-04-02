import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoute from './routes/user.route';
import { connectDb } from "./configs/db.config";
import errorHandler from "./middlewares/error.middleware";

dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));

connectDb()
  .then(() => {
    console.log('Connected to the database');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => {
    console.error('Database connection failed:', error);
    process.exit(1);
  });

app.use('/api/v1/users', userRoute);
app.use(errorHandler)
