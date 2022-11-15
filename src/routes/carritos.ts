import { Router } from "express";
const routerCarritos = Router()
import authMiddleware from '../middlewares'

routerCarritos.get('/', (req, res) => {
    res.send('get carritos ok')
})

routerCarritos.post('/',authMiddleware, (req, res) => {
    res.send('post carritos ok')
})

export = routerCarritos