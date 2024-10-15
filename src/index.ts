import express from "express";
import userRoutes from "../src/lib/routes/users";  // Importa el archivo de rutas que acabas de crear

const app = express();
app.use(express.json());  // Middleware para manejar JSON en los cuerpos de las solicitudes

app.use('/api/users', userRoutes);  // Conectar las rutas de usuarios bajo /api/users

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
