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
        user_gender:{
            type: dataTypes.STRING
        }

    }

    let config = {
        tableName: "users",
        timestamps: false
    }

    let Usuario = sequelize.define(alias,cols,config);

   /* Usuario.associate = function (models){
        Usuario.hasMany(models.Perro,{
            as: "perros",
            foreignKey: "user_id"
        })
    }
    */
    return Usuario
}



