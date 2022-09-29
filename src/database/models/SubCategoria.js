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
            foreignKey: "subCategoryID"
        })
    }

    SubCategoria.associate = function (models){
        SubCategoria.belongsTo(models.Categoria,{
            as: "categoria",
            foreignKey: "categoryID"
        })
    }
    
    return SubCategoria
}