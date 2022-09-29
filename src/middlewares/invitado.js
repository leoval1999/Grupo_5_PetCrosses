function invitado (req,res,next){
const usuarioLogueado = req.session.usuarioLogueado
if(req.session.usuarioLogueado){

    console.log(req.session.usuarioLogueado.user_id)
    return res.redirect("/user/perfil")
}
if (usuarioLogueado && usuarioLogueado.esAdmin == true) {
    res.locals.esAdmin = true;
}
next();
}

module.exports = invitado;