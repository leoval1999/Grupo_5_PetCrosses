function autenticado (req,res,next){
    if(!req.session.usuarioLogueado){
        return res.redirect("/ingreso")
    }
    next();
    }
    
    module.exports = autenticado;