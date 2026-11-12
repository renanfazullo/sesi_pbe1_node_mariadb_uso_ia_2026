
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const usuarioRoutes = require("./src/routes/usuario.routes");
const usoiaRoutes = require("./src/routes/usoia.routes");

app.use("/usuarios", usuarioRoutes);
app.use("/usoia", usoiaRoutes);

app.listen(3000, () => {
    console.log("Servidor online");
});
