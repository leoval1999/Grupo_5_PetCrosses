module.exports = function(sequelize,dataTypes){

    let alias = "Usuario";
    
    let cols = {
        user_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_name: {
            type: dataTypes.STRING
        },
        user_surname:{
            type: dataTypes.STRING
        },
        user_email: {
            type: dataTypes.STRING
        },
        user_password:{
            type: dataTypes.STRING
        },
        user_image:{
            type: dataTypes.STRING
        },
        user_date:{
            type: dataTypes.DATE
        },
        user_genre:{
            type: dataTypes.STRING
        },
        user_esAdmin:{
            type: dataTypes.TINYINT
        }
    }

    let config = {
        tableName: "users",
        timestamps: false
    }

    let Usuario = sequelize.define(alias,cols,config);

    Usuario.associate = function (models){
        Usuario.hasMany(models.Perro,{
            as: "perros",
            foreignKey: "user_id"
        })
    }
    
    return Usuario
}

const path = require('path');
const fs = require('fs');

const User = {
    fileName:  path.join(__dirname, "../data/users.json"),

    getData: function () {
        return JSON.parse (fs.readFileSync(this.fileName, 'utf-8'));
    },

    generateId: function () {
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if (lastUser) {
            return lastUser.id + 1;
        }
        return 1;
    },

    
    findAll:function(userData){
        return this.getData();
    },

findByPk : function (id){
    let allUsers = this.findAll();
    let userFound = allUsers.find(oneUser => oneUser.id === id);
    return userFound
},

findField : function (field, text){
    let allUsers = this.findAll();
    let userFound = allUsers.find(oneUser => oneUser[field] === text);
    return userFound
},


    create: function(userData){
        let allUsers= this.findAll();
        let newUser = {
            id: this.generateId(),
            ...userData
            
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName,JSON.stringify(allUsers,null," "));
        return true;
    },

    delete: function (id) {
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id)
        fs.writeFileSync(this.fileName,JSON.stringify(finalUsers,null," "));
        return true;
    }

}

module.exports = User;
