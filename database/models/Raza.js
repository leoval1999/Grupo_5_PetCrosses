module.exports = function(sequelize,dataTypes){

    let alias = "Raza";
    
    let cols = {
        breed_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        breed_name: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: "breeds_dogs",
        timestamps: false
    }

    let Raza = sequelize.define(alias,cols,config);

    Raza.associate = function (models){
        Raza.hasMany(models.Perro,{
            as: "perros",
            foreignKey: "breed_id"
        })
    }
    
    return Raza
}