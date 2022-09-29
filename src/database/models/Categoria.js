module.exports = function(sequelize,dataTypes){

    let alias = "Categoria";
    
    let cols = {
        category_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        category_name: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: "products_categories",
        timestamps: false
    }

    let Categoria = sequelize.define(alias,cols,config);

    Categoria.associate = function (models){
        Categoria.hasMany(models.Producto,{
            as: "productos",
            foreignKey: "categoryID"
        })
    }

    Categoria.associate = function (models){
        Categoria.hasMany(models.SubCategoria,{
            as: "subcategorias",
            foreignKey: "categoryID"
        })
    }
    
    return Categoria
}