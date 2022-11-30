const app = require('./app');
const swaggerDocs = require("../swagger");
require('dotenv').config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
    swaggerDocs(app, PORT);
})