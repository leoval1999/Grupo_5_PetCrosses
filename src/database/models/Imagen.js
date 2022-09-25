module.exports = function(sequelize,dataTypes){

    let alias = "Imagen";
    
    let cols = {
        image_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        image_url: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: "images",
        timestamps: false
    }

    let Imagen = sequelize.define(alias,cols,config);

    Imagen.associate = function (models){
        Imagen.belongsTo(models.Producto,{
            as: "producto",
            foreignKey: "product_id"
        })
    }
    
    return Imagen
}