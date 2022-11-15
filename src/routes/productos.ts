import { Router } from "express";
const routerProductos = Router()
import authMiddleware from '../middlewares'

routerProductos.get('/', (req, res) => {
    res.send('get productos ok')
})

routerProductos.post('/',authMiddleware, (req, res) => {
    res.send('post productos ok')
})

export = routerProductos