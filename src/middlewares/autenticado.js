function autenticado (req,res,next){
    if(!req.session.usuarioLogueado){
        return res.redirect("/user/ingresar")
    }
    next();
    }
    
    module.exports = autenticado;
     