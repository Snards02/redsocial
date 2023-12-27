import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes";
import postRoutes from "./routes/postRoutes";
import cors from "cors";
const app = express()
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // For legacy browser support
};

app.use(cors(corsOptions));
app.use(express.json()) // middleware que transforma la req.body a json
const PORT = 3000
const mongoURI = "mongodb://localhost:27017/dbredsocial";

mongoose.connect(mongoURI)
    .then(() => console.log("Conexión exitosa a MongoDB"))
    .catch((err) => console.error("Error al conectar a MongoDB:", err));


// Rutas
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

app.listen(PORT, () => {
    console.log("SERVER RUNNING ON PORT", PORT)
})