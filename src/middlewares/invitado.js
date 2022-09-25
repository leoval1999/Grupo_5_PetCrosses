function invitado (req,res,next){
if(req.session.usuarioLogueado){
    return res.redirect("/user/perfil")
}
next();
}

module.exports = invitado;