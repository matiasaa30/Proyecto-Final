import express from 'express';
const app = express();
import routerProductos from './routes/productos';
import routerCarritos from './routes/carritos';

app.use('/api/productos', routerProductos)
app.use('/api/carritos', routerCarritos)


app.listen (8080, ()=> console.log("Server Running"))