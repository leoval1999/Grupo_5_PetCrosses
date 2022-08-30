const path = require("path");
const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req,file,callback) =>{
        let folder = path.join(__dirname,'../../public/img/users');
        callback(null,folder); 
    },
    filename: (req,file,callback) =>{
        let imageName = 'imagenPerfil' + Date.now() + path.extname(file.originalname);
        callback(null,imageName);
    }
})
const upload = multer({storage});

module.exports = storage;
module.exports = upload;  