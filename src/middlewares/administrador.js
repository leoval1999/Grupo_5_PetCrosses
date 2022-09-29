function administrador (req,res,next){
    const usuarioLogueado = req.session.usuarioLogueado
    if (usuarioLogueado && usuarioLogueado.user_esAdmin == true) {
        
        res.locals.esAdmin = true;
        console.log(res.locals.esAdmin)
    }
    next();
    }
    
    module.exports = administrador;