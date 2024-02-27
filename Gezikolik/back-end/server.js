import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db"
import { errorResponseHandler, invalidPathHandler } from "./middleware/errorHandler";
//Routes
import userRoutes from "./routes/userRoutes";
import postRoutes from "./routes/postRoutes";
import commentRoutes from "./routes/commentRoutes";

import path from "path";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());


app.get('/', (req,res) => {
    res.send("Server is running...");
});


app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);


app.use('/uploads', express.static(path.join(__dirname,'/uploads')));

app.use(invalidPathHandler);
app.use(errorResponseHandler);



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));