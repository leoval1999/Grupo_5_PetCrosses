function invitado (req,res,next){
if(req.session.usuarioLogueado){
    return res.redirect("/perfil")
}
next();
}

module.exports = invitado;