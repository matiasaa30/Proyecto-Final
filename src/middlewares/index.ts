const authMiddleware = (req, res, next) =>{
    if(req.headers.rol== "admin"){
        next()
    }else{
        res.send('Este es un error porque no tiene permisos')
    }
}

export = authMiddleware