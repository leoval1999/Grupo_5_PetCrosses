module.exports = function(sequelize,dataTypes){

    let alias = "Producto";
    
    let cols = {
        product_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_name: {
            type: dataTypes.STRING
        },
        product_price:{
            type: dataTypes.DECIMAL
        },
        product_description: {
            type: dataTypes.STRING
        },
        product_stock:{
            type: dataTypes.INTEGER
        },
        categoryID:{
            type: dataTypes.INTEGER
        },
        subcategoryID:{
            type: dataTypes.INTEGER
        },
        product_image: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: "products",
        timestamps: false
    }

    let Producto = sequelize.define(alias,cols,config);

    
    Producto.associate = function (models){
        Producto.belongsTo(models.Categoria,{
            as: "categoria",
            foreignKey: "categoryID"
        })
    }

    Producto.associate = function (models){
        Producto.belongsTo(models.SubCategoria,{
            as: "subcategoria",
            foreignKey: "subCategoryID"
        })
    }
    
    return Producto
}