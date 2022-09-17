module.exports = function(sequelize,dataTypes){

    let alias = "Perro";
    
    let cols = {
        dog_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dog_name: {
            type: dataTypes.STRING
        },
        dog_size:{
            type: dataTypes.STRING
        },
        dog_age: {
            type: dataTypes.INTEGER
        },
        dog_sex: {
            type: dataTypes.STRING
        },
        dog_description: {
            type: dataTypes.STRING
        },
        dog_image:{
            type: dataTypes.STRING
        },
        dog_match:{
            type: dataTypes.TINYINT
        },
        dog_pedegree:{
            type: dataTypes.TINYINT
        }
    }

    let config = {
        tableName: "dogs",
        timestamps: false
    }

    let Perro = sequelize.define(alias,cols,config);

    Perro.associate = function (models){
        Perro.belongsTo(models.Usuario,{
            as: "usuario",
            foreignKey: "user_id"
        })
    }

    Perro.associate = function (models){
        Perro.belongsTo(models.Raza,{
            as: "raza",
            foreignKey: "breed_id"
        })
    }
    
    return Perro
}