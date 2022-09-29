function invitado (req,res,next){
if(req.session.usuarioLogueado){
    console.log(req.session.usuarioLogueado.user_id)
    return res.redirect("/user/perfil")
}
next();
}

module.exports = invitado;