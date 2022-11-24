import { Router } from "express";
const routerProductos = Router()
import authMiddleware from '../middlewares'
import Productos from "../container/productos";
const containerProductos = new Productos('../files/productos.json')//Agregar la url del json

routerProductos.get('/:id?', (req, res) => {
    let resultado = containerProductos.getById(req.params.id)//el id es opcional, si lo pasa trae el producto y sino trae todos
    res.send(resultado)
})

routerProductos.post('/', authMiddleware, (req, res) => {
    res.send('post productos ok')
})

export = routerProductos