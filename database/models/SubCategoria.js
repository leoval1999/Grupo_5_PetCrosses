module.exports = function(sequelize,dataTypes){

    let alias = "SubCategoria";
    
    let cols = {
        subcategory_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        subcategory_name: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: "products_subcategories",
        timestamps: false
    }

    let SubCategoria = sequelize.define(alias,cols,config);

    SubCategoria.associate = function (models){
        SubCategoria.hasMany(models.Producto,{
            as: "productos",
            foreignKey: "subCategory_id"
        })
    }

    SubCategoria.associate = function (models){
        SubCategoria.hasMany(models.Categoria,{
            as: "categorias",
            foreignKey: "category_id"
        })
    }
    
    return SubCategoria
}